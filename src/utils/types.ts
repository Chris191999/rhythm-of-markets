
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
  // Advanced metrics
  marketCondition: 'Trending' | 'Ranging' | 'Volatile' | 'Calm';
  orderFlow: 'Bullish' | 'Bearish' | 'Neutral';
  ictConcepts: string[]; // ICT concepts applied
  entryReason: string[];
  exitReason: string[];
  riskRewardRatio: number;
  riskPercentage: number;
  smartMoney: boolean; // Was position aligned with smart money?
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

export interface AdvancedMetrics {
  performanceByTimeframe: {
    timeframe: string;
    winRate: number;
    profitLoss: number;
    trades: number;
  }[];
  setupPerformance: {
    setup: string;
    winRate: number;
    avgReturn: number;
    trades: number;
  }[];
  psychologyCorrelations: {
    factor: string;
    profitCorrelation: number; // -1 to 1
    description: string;
  }[];
  smartMoneyAlignment: {
    aligned: number; // percentage
    notAligned: number; // percentage
    undetermined: number; // percentage
  };
  marketConditionPerformance: {
    condition: string;
    winRate: number;
    avgReturn: number;
    trades: number;
  }[];
}

export interface AiAnalysis {
  tradingPatterns: string[];
  psychologicalInsights: string[];
  improvementAreas: string[];
  strengths: string[];
  recommendations: string[];
  confidenceScore: number; // 0-100
}
