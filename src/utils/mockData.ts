
import { Trade, PerformanceMetric, ChartData, EmotionData, PsychologyMetric } from './types';

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
    tags: ['Earnings', 'Momentum', 'Breakout']
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
    tags: ['Support', 'Failed Setup']
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
    tags: ['Reversal', 'Overbought', 'Technical']
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
    tags: ['MA Crossover', 'Trend Following']
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
    tags: ['Resistance', 'Failed Setup', 'News']
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
