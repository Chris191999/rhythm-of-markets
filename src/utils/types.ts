
export interface Trade {
  id: string;
  date: string;
  symbol: string;
  direction: 'Long' | 'Short';
  entryPrice: number;
  exitPrice: number;
  quantity: number;
  profitLoss: number;
  profitLossPercentage: number;
  setup: string;
  timeframe: string;
  duration: string;
  notes: string;
  emotions: {
    before: number; // 1-10 scale
    during: number; // 1-10 scale
    after: number; // 1-10 scale
  };
  psychology: {
    confidence: number; // 1-10 scale
    stress: number; // 1-10 scale
    discipline: number; // 1-10 scale
    patience: number; // 1-10 scale
  };
  screenshots?: string[];
  tags: string[];
}

export interface PerformanceMetric {
  label: string;
  value: number | string;
  change?: number;
  isPositive?: boolean;
}

export interface ChartData {
  date: string;
  value: number;
}

export interface EmotionData {
  emotion: string;
  beforeTrade: number;
  duringTrade: number;
  afterTrade: number;
}

export interface PsychologyMetric {
  label: string;
  value: number;
  category: 'strength' | 'weakness' | 'neutral';
}
