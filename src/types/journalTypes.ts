
export interface TradingJournalFormData {
  date: string;
  symbol: string;
  direction: 'Long' | 'Short';
  entryPrice: string;
  exitPrice: string;
  quantity: string;
  setup: string;
  timeframe: string;
  marketCondition: string;
  orderFlow: string;
  smartMoney: boolean;
  riskRewardRatio: string;
  riskPercentage: string;
  notes: string;
  confidence: number;
  stress: number;
  discipline: number;
  patience: number;
}

export interface TradeTag {
  type: 'tag' | 'ict' | 'entry' | 'exit';
  value: string;
}
