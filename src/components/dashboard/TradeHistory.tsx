
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trade } from '@/utils/types';
import { trades as mockTrades } from '@/utils/mockData';

const TradeHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trades, setTrades] = useState<Trade[]>(mockTrades);
  
  const filteredTrades = trades.filter(trade => 
    trade.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trade.setup.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trade.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Trade History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 pr-4">
            <Input
              placeholder="Search by symbol, setup or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead className="text-right">P&L</TableHead>
                <TableHead className="hidden md:table-cell">Setup</TableHead>
                <TableHead className="hidden md:table-cell">Timeframe</TableHead>
                <TableHead className="hidden md:table-cell">Tags</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTrades.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell>{new Date(trade.date).toLocaleDateString()}</TableCell>
                  <TableCell className="font-medium">{trade.symbol}</TableCell>
                  <TableCell>
                    <Badge variant={trade.direction === 'Long' ? 'outline' : 'secondary'}>
                      {trade.direction}
                    </Badge>
                  </TableCell>
                  <TableCell className={`text-right font-medium ${trade.profitLoss >= 0 ? 'text-trading-win' : 'text-trading-loss'}`}>
                    {trade.profitLoss > 0 ? '+' : ''}{trade.profitLoss.toFixed(2)} ({trade.profitLossPercentage > 0 ? '+' : ''}{trade.profitLossPercentage.toFixed(2)}%)
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{trade.setup}</TableCell>
                  <TableCell className="hidden md:table-cell">{trade.timeframe}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {trade.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs py-0">
                          {tag}
                        </Badge>
                      ))}
                      {trade.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs py-0">
                          +{trade.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeHistory;
