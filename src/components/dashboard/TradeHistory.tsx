
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trade } from '@/utils/types';
import { useTrades, deleteTrade } from '@/services/tradeDataService';
import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';

const TradeHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('30d');
  const { trades } = useTrades();
  const { toast } = useToast();
  
  // Filter trades based on time filter
  const getFilteredByDate = () => {
    const now = new Date();
    
    switch(timeFilter) {
      case '7d':
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
        return trades.filter(trade => new Date(trade.date) >= sevenDaysAgo);
      case '30d':
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        return trades.filter(trade => new Date(trade.date) >= thirtyDaysAgo);
      case '90d':
        const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90));
        return trades.filter(trade => new Date(trade.date) >= ninetyDaysAgo);
      case 'all':
      default:
        return trades;
    }
  };
  
  // Apply search filter
  const filteredTrades = getFilteredByDate().filter(trade => 
    trade.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trade.setup.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trade.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDelete = (id: string) => {
    deleteTrade(id);
    toast({
      title: "Trade Deleted",
      description: "The trade has been removed from your journal."
    });
  };

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
          <Select onValueChange={setTimeFilter} defaultValue={timeFilter}>
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
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
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
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-destructive/70 hover:text-destructive"
                        onClick={() => handleDelete(trade.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No trades found. Add a new trade to see it here.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeHistory;
