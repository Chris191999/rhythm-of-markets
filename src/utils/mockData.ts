
import { Trade, PerformanceMetric, ChartData, EmotionData, PsychologyMetric, AdvancedMetrics, AiAnalysis } from './types';

// Mock trades
export const trades: Trade[] = [
  {
    id: '1',
    date: '2025-04-25',
    symbol: 'AAPL',
    direction: 'Long',
    entryPrice: 182.54,
    exitPrice: 185.92,
    quantity: 10,
    profitLoss: 33.80,
    profitLossPercentage: 1.85,
    setup: 'Breakout',
    timeframe: '1H',
    duration: '4h 15m',
    notes: 'Strong momentum after earnings announcement. Waited for pullback to enter.',
    emotions: {
      before: 7,
      during: 6,
      after: 9
    },
    psychology: {
      confidence: 8,
      stress: 4,
      discipline: 7,
      patience: 8
    },
    tags: ['Earnings', 'Momentum', 'Breakout'],
    marketCondition: 'Trending',
    orderFlow: 'Bullish',
    ictConcepts: ['Fair Value Gap', 'Liquidity Grab'],
    entryReason: ['Break of structure', 'Volume confirmation'],
    exitReason: ['Target reached', 'Momentum slowing'],
    riskRewardRatio: 2.5,
    riskPercentage: 0.8,
    smartMoney: true
  },
  {
    id: '2',
    date: '2025-04-24',
    symbol: 'MSFT',
    direction: 'Long',
    entryPrice: 402.87,
    exitPrice: 399.54,
    quantity: 5,
    profitLoss: -16.65,
    profitLossPercentage: -0.83,
    setup: 'Support Bounce',
    timeframe: '4H',
    duration: '1d 2h',
    notes: 'Failed support level. Cut losses according to plan.',
    emotions: {
      before: 8,
      during: 4,
      after: 5
    },
    psychology: {
      confidence: 7,
      stress: 7,
      discipline: 8,
      patience: 5
    },
    tags: ['Support', 'Failed Setup'],
    marketCondition: 'Ranging',
    orderFlow: 'Neutral',
    ictConcepts: ['Breaker Block', 'Optimal Trade Entry'],
    entryReason: ['Support retest', 'Previous swing low'],
    exitReason: ['Stop loss hit', 'Support broken'],
    riskRewardRatio: 3.0,
    riskPercentage: 1.0,
    smartMoney: false
  },
  {
    id: '3',
    date: '2025-04-23',
    symbol: 'NVDA',
    direction: 'Short',
    entryPrice: 885.12,
    exitPrice: 870.45,
    quantity: 3,
    profitLoss: 44.01,
    profitLossPercentage: 1.66,
    setup: 'Overbought Reversal',
    timeframe: '1D',
    duration: '2d 5h',
    notes: 'Textbook reversal pattern. Took profit at first support.',
    emotions: {
      before: 6,
      during: 7,
      after: 8
    },
    psychology: {
      confidence: 7,
      stress: 5,
      discipline: 8,
      patience: 7
    },
    tags: ['Reversal', 'Overbought', 'Technical'],
    marketCondition: 'Volatile',
    orderFlow: 'Bearish',
    ictConcepts: ['Equal Highs', 'Liquidity Sweep'],
    entryReason: ['Price rejection', 'Bearish order block'],
    exitReason: ['Target reached', 'Support level'],
    riskRewardRatio: 2.2,
    riskPercentage: 1.2,
    smartMoney: true
  },
  {
    id: '4',
    date: '2025-04-22',
    symbol: 'AMZN',
    direction: 'Long',
    entryPrice: 177.23,
    exitPrice: 180.54,
    quantity: 8,
    profitLoss: 26.48,
    profitLossPercentage: 1.87,
    setup: 'Moving Average Crossover',
    timeframe: '2H',
    duration: '8h 40m',
    notes: 'Clean entry at MA crossover. Held through minor pullback.',
    emotions: {
      before: 7,
      during: 6,
      after: 8
    },
    psychology: {
      confidence: 8,
      stress: 5,
      discipline: 7,
      patience: 7
    },
    tags: ['MA Crossover', 'Trend Following'],
    marketCondition: 'Trending',
    orderFlow: 'Bullish',
    ictConcepts: ['Order Block', 'Smart Money Concept'],
    entryReason: ['MA crossover', 'Bullish candle pattern'],
    exitReason: ['Target reached', 'Resistance approach'],
    riskRewardRatio: 2.8,
    riskPercentage: 0.7,
    smartMoney: true
  },
  {
    id: '5',
    date: '2025-04-21',
    symbol: 'TSLA',
    direction: 'Short',
    entryPrice: 168.34,
    exitPrice: 172.56,
    quantity: 10,
    profitLoss: -42.20,
    profitLossPercentage: -2.51,
    setup: 'Resistance Rejection',
    timeframe: '1H',
    duration: '3h 15m',
    notes: 'Misread volume profile. Market shrugged off bad news.',
    emotions: {
      before: 8,
      during: 4,
      after: 3
    },
    psychology: {
      confidence: 5,
      stress: 8,
      discipline: 4,
      patience: 3
    },
    tags: ['Resistance', 'Failed Setup', 'News'],
    marketCondition: 'Volatile',
    orderFlow: 'Bullish',
    ictConcepts: ['Premium/Discount', 'Market Structure'],
    entryReason: ['Resistance test', 'Bearish divergence'],
    exitReason: ['Stop loss hit', 'Unexpected momentum'],
    riskRewardRatio: 2.0,
    riskPercentage: 1.5,
    smartMoney: false
  }
];

// Performance metrics
export const performanceMetrics: PerformanceMetric[] = [
  {
    label: 'Win Rate',
    value: '60%',
    change: 5,
    isPositive: true
  },
  {
    label: 'Profit Factor',
    value: 1.85,
    change: 0.2,
    isPositive: true
  },
  {
    label: 'Average Win',
    value: '$34.76',
    change: 2.3,
    isPositive: true
  },
  {
    label: 'Average Loss',
    value: '$29.43',
    change: -1.5,
    isPositive: true
  },
  {
    label: 'Net P&L',
    value: '$45.44',
    change: -15.2,
    isPositive: false
  },
  {
    label: 'Largest Win',
    value: '$44.01',
    change: 0,
    isPositive: true
  }
];

// Chart data for P&L over time
export const plChartData: ChartData[] = [
  { date: '2025-04-21', value: -42.20 },
  { date: '2025-04-22', value: 26.48 },
  { date: '2025-04-23', value: 44.01 },
  { date: '2025-04-24', value: -16.65 },
  { date: '2025-04-25', value: 33.80 }
];

// Emotion data over time
export const emotionData: EmotionData[] = [
  { emotion: 'Confidence', beforeTrade: 7, duringTrade: 6, afterTrade: 7 },
  { emotion: 'Stress', beforeTrade: 6, duringTrade: 5, afterTrade: 4 },
  { emotion: 'Discipline', beforeTrade: 7, duringTrade: 6, afterTrade: 7 },
  { emotion: 'Patience', beforeTrade: 6, duringTrade: 5, afterTrade: 6 }
];

// Psychology metrics
export const psychologyMetrics: PsychologyMetric[] = [
  { label: 'Trading Discipline', value: 7.5, category: 'strength' },
  { label: 'Emotional Control', value: 6.2, category: 'neutral' },
  { label: 'FOMO Tendency', value: 4.3, category: 'strength' },
  { label: 'Risk Management', value: 8.1, category: 'strength' },
  { label: 'Revenge Trading', value: 3.2, category: 'strength' },
  { label: 'Analysis Paralysis', value: 7.4, category: 'weakness' },
  { label: 'Patience', value: 6.8, category: 'neutral' },
  { label: 'Overconfidence', value: 5.1, category: 'neutral' }
];

// Advanced metrics
export const advancedMetrics: AdvancedMetrics = {
  performanceByTimeframe: [
    { timeframe: '1H', winRate: 68, profitLoss: 28.5, trades: 12 },
    { timeframe: '4H', winRate: 62, profitLoss: 42.3, trades: 8 },
    { timeframe: '1D', winRate: 55, profitLoss: 35.8, trades: 6 },
    { timeframe: '1W', winRate: 75, profitLoss: 22.4, trades: 4 }
  ],
  setupPerformance: [
    { setup: 'Breakout', winRate: 64, avgReturn: 1.8, trades: 14 },
    { setup: 'Fair Value Gap', winRate: 72, avgReturn: 2.1, trades: 9 },
    { setup: 'Liquidity Grab', winRate: 68, avgReturn: 2.8, trades: 11 },
    { setup: 'Order Block', winRate: 58, avgReturn: 1.6, trades: 7 }
  ],
  psychologyCorrelations: [
    { factor: 'Confidence', profitCorrelation: 0.65, description: 'Higher confidence correlates with better trade outcomes.' },
    { factor: 'Stress', profitCorrelation: -0.72, description: 'Lower stress levels strongly correlate with profitable trades.' },
    { factor: 'Discipline', profitCorrelation: 0.81, description: 'Strong positive correlation between discipline and profitability.' },
    { factor: 'Patience', profitCorrelation: 0.58, description: 'More patient trading approach tends to yield better results.' }
  ],
  smartMoneyAlignment: {
    aligned: 65,
    notAligned: 28,
    undetermined: 7
  },
  marketConditionPerformance: [
    { condition: 'Trending', winRate: 65, avgReturn: 2.2, trades: 18 },
    { condition: 'Ranging', winRate: 58, avgReturn: 1.4, trades: 12 },
    { condition: 'Volatile', winRate: 42, avgReturn: 0.8, trades: 9 },
    { condition: 'Calm', winRate: 70, avgReturn: 1.6, trades: 7 }
  ]
};

// AI Analysis
export const aiAnalysis: AiAnalysis = {
  tradingPatterns: [
    "You consistently perform better in trending markets than in volatile or ranging conditions.",
    "Your most profitable trades occur when using ICT concepts like fair value gaps and order blocks.",
    "You tend to exit profitable trades too early, leaving potential gains on the table.",
    "Your win rate increases significantly when you align with smart money flow.",
    "Risk management is most disciplined during morning trading sessions."
  ],
  psychologicalInsights: [
    "Lower stress levels correlate strongly with higher profitability in your trading.",
    "You exhibit higher patience during winning streaks but diminished patience after losses.",
    "Confidence scores show optimal performance in the middle range (6-8), with overconfidence leading to mistakes.",
    "Your emotional control is strongest during longer timeframe trades (4H and above)."
  ],
  improvementAreas: [
    "Improve trade management during volatile market conditions",
    "Develop more precise exit strategies based on market structure",
    "Work on reducing stress levels during active trades",
    "Strengthen discipline in adhering to trading plans during drawdowns"
  ],
  strengths: [
    "Excellent at identifying smart money concepts",
    "Strong risk management on winning trades",
    "Consistent application of ICT methodologies",
    "Good pattern recognition in trending markets"
  ],
  recommendations: [
    "Focus on trades that align with institutional order flow - your win rate increases by 43% in these scenarios.",
    "Consider extending your average trade duration by 20-30% to capture more of the move.",
    "Implement a 5-minute mindfulness practice before trading sessions to reduce stress levels.",
    "Prioritize Fair Value Gap and Liquidity Grab setups, where your performance is strongest.",
    "Avoid trading during highly volatile market conditions where your win rate drops below 45%."
  ],
  confidenceScore: 85
};
