
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TradeBasicDetailsProps {
  date: string;
  symbol: string;
  direction: string;
  entryPrice: string;
  exitPrice: string;
  quantity: string;
  setup: string;
  timeframe: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (id: string, value: string) => void;
}

const TradeBasicDetails: React.FC<TradeBasicDetailsProps> = ({
  date,
  symbol,
  direction,
  entryPrice,
  exitPrice,
  quantity,
  setup,
  timeframe,
  handleChange,
  handleSelectChange
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input 
            id="date" 
            type="date" 
            value={date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="symbol">Symbol</Label>
          <Input 
            id="symbol" 
            placeholder="AAPL" 
            value={symbol} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="direction">Direction</Label>
          <Select onValueChange={(value) => handleSelectChange('direction', value)}>
            <SelectTrigger id="direction">
              <SelectValue placeholder={direction} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Long">Long</SelectItem>
              <SelectItem value="Short">Short</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="entryPrice">Entry Price</Label>
          <Input 
            id="entryPrice" 
            type="text" 
            placeholder="0.00" 
            value={entryPrice} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="exitPrice">Exit Price</Label>
          <Input 
            id="exitPrice" 
            type="text" 
            placeholder="0.00" 
            value={exitPrice} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input 
            id="quantity" 
            type="number" 
            step="1" 
            placeholder="0" 
            value={quantity} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="setup">Setup</Label>
          <Input 
            id="setup" 
            placeholder="Breakout" 
            value={setup} 
            onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeframe">Timeframe</Label>
          <Select onValueChange={(value) => handleSelectChange('timeframe', value)}>
            <SelectTrigger id="timeframe">
              <SelectValue placeholder={timeframe} />
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
    </>
  );
};

export default TradeBasicDetails;
