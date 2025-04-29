
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trade } from '@/utils/types';
import { trades as mockTrades } from '@/utils/mockData';
import { useToast } from '@/hooks/use-toast';

const TradingJournal = () => {
  const [newTagValue, setNewTagValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trade Saved",
      description: "Your trade has been added to your journal.",
    });
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTagValue.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(newTagValue.trim())) {
        setTags([...tags, newTagValue.trim()]);
      }
      setNewTagValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
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

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Trade analysis and observations..." />
          </div>

          <div className="space-y-2">
            <Label>Trade Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map(tag => (
                <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveTag(tag)}>
                  {tag} ×
                </Badge>
              ))}
            </div>
            <Input
              value={newTagValue}
              onChange={(e) => setNewTagValue(e.target.value)}
              onKeyDown={handleAddTag}
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
