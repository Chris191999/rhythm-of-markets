
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Trade } from '@/utils/types';
import { trades as mockTrades } from '@/utils/mockData';
import { useToast } from '@/hooks/use-toast';

const TradingJournal = () => {
  const [newTagValue, setNewTagValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [ictConcepts, setIctConcepts] = useState<string[]>([]);
  const [entryReasons, setEntryReasons] = useState<string[]>([]);
  const [exitReasons, setExitReasons] = useState<string[]>([]);
  const [smartMoney, setSmartMoney] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trade Saved",
      description: "Your trade has been added to your journal.",
    });
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">New Trade Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="symbol">Symbol</Label>
              <Input id="symbol" placeholder="AAPL" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="direction">Direction</Label>
              <Select>
                <SelectTrigger id="direction">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="long">Long</SelectItem>
                  <SelectItem value="short">Short</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="entryPrice">Entry Price</Label>
              <Input id="entryPrice" type="number" step="0.01" placeholder="0.00" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exitPrice">Exit Price</Label>
              <Input id="exitPrice" type="number" step="0.01" placeholder="0.00" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" step="1" placeholder="0" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="setup">Setup</Label>
              <Input id="setup" placeholder="Breakout" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeframe">Timeframe</Label>
              <Select>
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1m</SelectItem>
                  <SelectItem value="5m">5m</SelectItem>
                  <SelectItem value="15m">15m</SelectItem>
                  <SelectItem value="30m">30m</SelectItem>
                  <SelectItem value="1h">1h</SelectItem>
                  <SelectItem value="4h">4h</SelectItem>
                  <SelectItem value="1d">1d</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="marketCondition">Market Condition</Label>
              <Select>
                <SelectTrigger id="marketCondition">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="ranging">Ranging</SelectItem>
                  <SelectItem value="volatile">Volatile</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="orderFlow">Order Flow</Label>
              <Select>
                <SelectTrigger id="orderFlow">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bullish">Bullish</SelectItem>
                  <SelectItem value="bearish">Bearish</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 pt-3">
                <Checkbox id="smartMoney" checked={smartMoney} onCheckedChange={(checked) => setSmartMoney(checked as boolean)} />
                <label
                  htmlFor="smartMoney"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Smart Money Aligned?
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="riskRewardRatio">Risk/Reward Ratio</Label>
              <Input id="riskRewardRatio" type="number" step="0.1" placeholder="2.0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="riskPercentage">Risk Percentage</Label>
              <Input id="riskPercentage" type="number" step="0.1" placeholder="1.0" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>ICT Concepts Applied</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {ictConcepts.map((concept) => (
                <Badge key={concept} variant="secondary" className="cursor-pointer bg-[hsl(var(--ict-concept))]" onClick={() => handleRemoveItem(concept, 'ict')}>
                  {concept} ×
                </Badge>
              ))}
            </div>
            <Input
              value={newTagValue}
              onChange={(e) => setNewTagValue(e.target.value)}
              onKeyDown={(e) => handleAddTag(e, 'ict')}
              placeholder="Add ICT concept and press Enter"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Entry Reasons</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {entryReasons.map((reason) => (
                  <Badge key={reason} variant="outline" className="cursor-pointer" onClick={() => handleRemoveItem(reason, 'entry')}>
                    {reason} ×
                  </Badge>
                ))}
              </div>
              <Input
                value={newTagValue}
                onChange={(e) => setNewTagValue(e.target.value)}
                onKeyDown={(e) => handleAddTag(e, 'entry')}
                placeholder="Add entry reason and press Enter"
              />
            </div>
            <div className="space-y-2">
              <Label>Exit Reasons</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {exitReasons.map((reason) => (
                  <Badge key={reason} variant="outline" className="cursor-pointer" onClick={() => handleRemoveItem(reason, 'exit')}>
                    {reason} ×
                  </Badge>
                ))}
              </div>
              <Input
                value={newTagValue}
                onChange={(e) => setNewTagValue(e.target.value)}
                onKeyDown={(e) => handleAddTag(e, 'exit')}
                placeholder="Add exit reason and press Enter"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Trade analysis and observations..." />
          </div>

          <div className="space-y-2">
            <Label>Trade Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map(tag => (
                <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveItem(tag, 'tag')}>
                  {tag} ×
                </Badge>
              ))}
            </div>
            <Input
              value={newTagValue}
              onChange={(e) => setNewTagValue(e.target.value)}
              onKeyDown={(e) => handleAddTag(e, 'tag')}
              placeholder="Add tag and press Enter"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Psychological Factors</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Confidence (1-10)</Label>
                    <span className="text-sm text-muted-foreground">7</span>
                  </div>
                  <Slider defaultValue={[7]} max={10} step={1} className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Stress Level (1-10)</Label>
                    <span className="text-sm text-muted-foreground">4</span>
                  </div>
                  <Slider defaultValue={[4]} max={10} step={1} className="w-full" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Discipline (1-10)</Label>
                    <span className="text-sm text-muted-foreground">8</span>
                  </div>
                  <Slider defaultValue={[8]} max={10} step={1} className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Patience (1-10)</Label>
                    <span className="text-sm text-muted-foreground">6</span>
                  </div>
                  <Slider defaultValue={[6]} max={10} step={1} className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full">Save Trade</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TradingJournal;
