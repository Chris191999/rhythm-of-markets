
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trade } from '@/utils/types';
import { useToast } from '@/hooks/use-toast';
import TradeScreenshotAnalyzer from '../trading/TradeScreenshotAnalyzer';
import { useTrades } from '@/services/tradeDataService';
import { parseCurrency } from '@/utils/imageProcessing';
import PsychologicalFactors from '../trading/PsychologicalFactors';
import TagManager from '../trading/TagManager';
import TradeAttributesSection from '../trading/TradeAttributesSection';
import TradeBasicDetails from '../trading/TradeBasicDetails';
import { TradingJournalFormData } from '@/types/journalTypes';

const TradingJournal = () => {
  const [newTagValue, setNewTagValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [ictConcepts, setIctConcepts] = useState<string[]>([]);
  const [entryReasons, setEntryReasons] = useState<string[]>([]);
  const [exitReasons, setExitReasons] = useState<string[]>([]);
  const [smartMoney, setSmartMoney] = useState<boolean>(false);
  const [confidence, setConfidence] = useState<number>(7);
  const [stress, setStress] = useState<number>(4);
  const [discipline, setDiscipline] = useState<number>(8);
  const [patience, setPatience] = useState<number>(6);
  const { toast } = useToast();
  const { addTrade } = useTrades();
  
  const [formData, setFormData] = useState<TradingJournalFormData>({
    date: new Date().toISOString().split('T')[0],
    symbol: '',
    direction: 'Long',
    entryPrice: '',
    exitPrice: '',
    quantity: '1',
    setup: '',
    timeframe: '1h',
    marketCondition: 'Trending',
    orderFlow: 'Neutral',
    smartMoney: false,
    riskRewardRatio: '',
    riskPercentage: '',
    notes: '',
    confidence: 7,
    stress: 4,
    discipline: 8,
    patience: 6,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAddTag = (e: React.KeyboardEvent, type: 'tag' | 'ict' | 'entry' | 'exit') => {
    if (e.key === 'Enter' && newTagValue.trim() !== '') {
      e.preventDefault();
      
      switch(type) {
        case 'tag':
          if (!tags.includes(newTagValue.trim())) {
            setTags([...tags, newTagValue.trim()]);
          }
          break;
        case 'ict':
          if (!ictConcepts.includes(newTagValue.trim())) {
            setIctConcepts([...ictConcepts, newTagValue.trim()]);
          }
          break;
        case 'entry':
          if (!entryReasons.includes(newTagValue.trim())) {
            setEntryReasons([...entryReasons, newTagValue.trim()]);
          }
          break;
        case 'exit':
          if (!exitReasons.includes(newTagValue.trim())) {
            setExitReasons([...exitReasons, newTagValue.trim()]);
          }
          break;
      }
      
      setNewTagValue('');
    }
  };

  const handleRemoveItem = (item: string, type: 'tag' | 'ict' | 'entry' | 'exit') => {
    switch(type) {
      case 'tag':
        setTags(tags.filter(tag => tag !== item));
        break;
      case 'ict':
        setIctConcepts(ictConcepts.filter(concept => concept !== item));
        break;
      case 'entry':
        setEntryReasons(entryReasons.filter(reason => reason !== item));
        break;
      case 'exit':
        setExitReasons(exitReasons.filter(reason => reason !== item));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const entryPrice = parseCurrency(formData.entryPrice);
      const exitPrice = parseCurrency(formData.exitPrice);
      const quantity = parseInt(formData.quantity) || 1;
      
      // Calculate P&L
      const profitLoss = (exitPrice - entryPrice) * quantity;
      const profitLossPercentage = entryPrice > 0 
        ? ((exitPrice - entryPrice) / entryPrice) * 100
        : 0;
      
      const newTrade: Partial<Trade> = {
        date: formData.date,
        symbol: formData.symbol,
        direction: formData.direction as 'Long' | 'Short',
        entryPrice: entryPrice,
        exitPrice: exitPrice,
        quantity: quantity,
        profitLoss: profitLoss,
        profitLossPercentage: profitLossPercentage,
        setup: formData.setup,
        timeframe: formData.timeframe,
        duration: '', // Could calculate from entry/exit timestamps if available
        notes: formData.notes,
        emotions: {
          before: confidence,
          during: stress, // Repurposing for simplicity
          after: discipline, // Repurposing for simplicity
        },
        psychology: {
          confidence: confidence,
          stress: stress,
          discipline: discipline,
          patience: patience,
        },
        tags: tags,
        marketCondition: formData.marketCondition as any,
        orderFlow: formData.orderFlow as any,
        ictConcepts: ictConcepts,
        entryReason: entryReasons,
        exitReason: exitReasons,
        riskRewardRatio: parseFloat(formData.riskRewardRatio) || 0,
        riskPercentage: parseFloat(formData.riskPercentage) || 0,
        smartMoney: smartMoney,
      };
      
      addTrade(newTrade);
      
      toast({
        title: "Trade Saved",
        description: "Your trade has been added to your journal.",
      });
      
      // Reset form
      setFormData({
        date: new Date().toISOString().split('T')[0],
        symbol: '',
        direction: 'Long',
        entryPrice: '',
        exitPrice: '',
        quantity: '1',
        setup: '',
        timeframe: '1h',
        marketCondition: 'Trending',
        orderFlow: 'Neutral',
        smartMoney: false,
        riskRewardRatio: '',
        riskPercentage: '',
        notes: '',
        confidence: 7,
        stress: 4,
        discipline: 8,
        patience: 6,
      });
      setTags([]);
      setIctConcepts([]);
      setEntryReasons([]);
      setExitReasons([]);
      setSmartMoney(false);
    } catch (error) {
      console.error("Error saving trade:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your trade.",
        variant: "destructive",
      });
    }
  };

  const handleTradeDataExtracted = (data: any) => {
    // Update form with extracted data
    setFormData(prev => ({
      ...prev,
      symbol: data.symbol || prev.symbol,
      entryPrice: data.buyPrice || prev.entryPrice,
      exitPrice: data.sellPrice || prev.exitPrice,
      quantity: data.quantity || prev.quantity,
      riskRewardRatio: data.riskRewardRatio || prev.riskRewardRatio,
    }));

    // Add extracted tags if any
    if (data.target) {
      setTags(prev => 
        prev.includes("Target: " + data.target) 
          ? prev 
          : [...prev, "Target: " + data.target]
      );
    }
    
    if (data.stopLoss) {
      setTags(prev => 
        prev.includes("SL: " + data.stopLoss) 
          ? prev 
          : [...prev, "SL: " + data.stopLoss]
      );
    }

    toast({
      title: "Data Applied",
      description: "Trading data has been applied to the form.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">New Trade Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <TradeScreenshotAnalyzer onDataExtracted={handleTradeDataExtracted} />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <TradeBasicDetails 
            date={formData.date}
            symbol={formData.symbol}
            direction={formData.direction}
            entryPrice={formData.entryPrice}
            exitPrice={formData.exitPrice}
            quantity={formData.quantity}
            setup={formData.setup}
            timeframe={formData.timeframe}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
          />

          <TradeAttributesSection 
            marketCondition={formData.marketCondition}
            orderFlow={formData.orderFlow}
            smartMoney={smartMoney}
            setSmartMoney={setSmartMoney}
            riskRewardRatio={formData.riskRewardRatio}
            riskPercentage={formData.riskPercentage}
            ictConcepts={ictConcepts}
            entryReasons={entryReasons}
            exitReasons={exitReasons}
            newTagValue={newTagValue}
            setNewTagValue={setNewTagValue}
            handleAddTag={handleAddTag}
            handleRemoveItem={handleRemoveItem}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
          />

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Trade analysis and observations..." 
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <TagManager 
            title="Trade Tags"
            tags={tags}
            newTagValue={newTagValue}
            setNewTagValue={setNewTagValue}
            handleAddTag={handleAddTag}
            handleRemoveItem={handleRemoveItem}
            type="tag"
            placeholder="Add tag and press Enter"
          />

          <PsychologicalFactors 
            confidence={confidence}
            setConfidence={setConfidence}
            stress={stress}
            setStress={setStress}
            discipline={discipline}
            setDiscipline={setDiscipline}
            patience={patience}
            setPatience={setPatience}
          />
          
          <div className="pt-2">
            <Button type="submit" className="w-full">Save Trade</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TradingJournal;
