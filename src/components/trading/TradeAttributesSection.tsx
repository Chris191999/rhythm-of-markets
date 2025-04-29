
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import TagManager from './TagManager';

interface TradeAttributesSectionProps {
  marketCondition: string;
  orderFlow: string;
  smartMoney: boolean;
  setSmartMoney: (checked: boolean) => void;
  riskRewardRatio: string;
  riskPercentage: string;
  ictConcepts: string[];
  entryReasons: string[];
  exitReasons: string[];
  newTagValue: string;
  setNewTagValue: (value: string) => void;
  handleAddTag: (e: React.KeyboardEvent, type: 'tag' | 'ict' | 'entry' | 'exit') => void;
  handleRemoveItem: (item: string, type: 'tag' | 'ict' | 'entry' | 'exit') => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (id: string, value: string) => void;
}

const TradeAttributesSection: React.FC<TradeAttributesSectionProps> = ({
  marketCondition,
  orderFlow,
  smartMoney,
  setSmartMoney,
  riskRewardRatio,
  riskPercentage,
  ictConcepts,
  entryReasons,
  exitReasons,
  newTagValue,
  setNewTagValue,
  handleAddTag,
  handleRemoveItem,
  handleChange,
  handleSelectChange
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="marketCondition">Market Condition</Label>
          <Select onValueChange={(value) => handleSelectChange('marketCondition', value)}>
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
          <Select onValueChange={(value) => handleSelectChange('orderFlow', value)}>
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
            <Checkbox 
              id="smartMoney" 
              checked={smartMoney} 
              onCheckedChange={(checked) => setSmartMoney(checked as boolean)} 
            />
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
          <Input 
            id="riskRewardRatio" 
            type="number" 
            step="0.1" 
            placeholder="2.0" 
            value={riskRewardRatio} 
            onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="riskPercentage">Risk Percentage</Label>
          <Input 
            id="riskPercentage" 
            type="number" 
            step="0.1" 
            placeholder="1.0" 
            value={riskPercentage} 
            onChange={handleChange}
          />
        </div>
      </div>

      <TagManager 
        title="ICT Concepts Applied"
        tags={ictConcepts}
        newTagValue={newTagValue}
        setNewTagValue={setNewTagValue}
        handleAddTag={handleAddTag}
        handleRemoveItem={handleRemoveItem}
        type="ict"
        placeholder="Add ICT concept and press Enter"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TagManager 
          title="Entry Reasons"
          tags={entryReasons}
          newTagValue={newTagValue}
          setNewTagValue={setNewTagValue}
          handleAddTag={handleAddTag}
          handleRemoveItem={handleRemoveItem}
          type="entry"
          variant="outline"
          placeholder="Add entry reason and press Enter"
        />
        
        <TagManager 
          title="Exit Reasons"
          tags={exitReasons}
          newTagValue={newTagValue}
          setNewTagValue={setNewTagValue}
          handleAddTag={handleAddTag}
          handleRemoveItem={handleRemoveItem}
          type="exit"
          variant="outline"
          placeholder="Add exit reason and press Enter"
        />
      </div>
    </>
  );
};

export default TradeAttributesSection;
