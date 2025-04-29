
import { Trade } from '@/utils/types';
import { useState, useEffect } from 'react';
import { trades as initialTrades } from '@/utils/mockData';
import { v4 as uuidv4 } from 'uuid';

// Local storage key
const TRADES_STORAGE_KEY = 'ict-trading-journal-trades';

// Load trades from localStorage or use initial data
export const loadTrades = (): Trade[] => {
  const storedTrades = localStorage.getItem(TRADES_STORAGE_KEY);
  if (storedTrades) {
    try {
      return JSON.parse(storedTrades);
    } catch (e) {
      console.error('Error parsing stored trades:', e);
    }
  }
  return initialTrades;
};

// Save trades to localStorage
export const saveTrades = (trades: Trade[]): void => {
  localStorage.setItem(TRADES_STORAGE_KEY, JSON.stringify(trades));
};

// Add a new trade
export const addTrade = (trade: Partial<Trade>): Trade => {
  const trades = loadTrades();
  
  const newTrade: Trade = {
    id: uuidv4(),
    date: trade.date || new Date().toISOString(),
    symbol: trade.symbol || '',
    direction: trade.direction || 'Long',
    entryPrice: trade.entryPrice || 0,
    exitPrice: trade.exitPrice || 0,
    quantity: trade.quantity || 1,
    profitLoss: trade.profitLoss || 0,
    profitLossPercentage: trade.profitLossPercentage || 0,
    setup: trade.setup || '',
    timeframe: trade.timeframe || '1h',
    duration: trade.duration || '',
    notes: trade.notes || '',
    emotions: trade.emotions || {
      before: 5,
      during: 5,
      after: 5,
    },
    psychology: trade.psychology || {
      confidence: 5,
      stress: 5,
      discipline: 5,
      patience: 5,
    },
    screenshots: trade.screenshots || [],
    tags: trade.tags || [],
    marketCondition: trade.marketCondition || 'Trending',
    orderFlow: trade.orderFlow || 'Neutral',
    ictConcepts: trade.ictConcepts || [],
    entryReason: trade.entryReason || [],
    exitReason: trade.exitReason || [],
    riskRewardRatio: trade.riskRewardRatio || 1,
    riskPercentage: trade.riskPercentage || 1,
    smartMoney: trade.smartMoney || false,
  };
  
  const updatedTrades = [newTrade, ...trades];
  saveTrades(updatedTrades);
  
  return newTrade;
};

// Delete a trade
export const deleteTrade = (id: string): void => {
  const trades = loadTrades();
  const updatedTrades = trades.filter(trade => trade.id !== id);
  saveTrades(updatedTrades);
};

// Update a trade
export const updateTrade = (id: string, updates: Partial<Trade>): Trade | null => {
  const trades = loadTrades();
  const index = trades.findIndex(trade => trade.id === id);
  
  if (index === -1) return null;
  
  const updatedTrade = { ...trades[index], ...updates };
  trades[index] = updatedTrade;
  saveTrades(trades);
  
  return updatedTrade;
};

// Custom hook for trades
export const useTrades = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  
  // Load trades on initial render
  useEffect(() => {
    setTrades(loadTrades());
  }, []);
  
  // Add new trade
  const addNewTrade = (trade: Partial<Trade>) => {
    const newTrade = addTrade(trade);
    setTrades(prev => [newTrade, ...prev]);
    return newTrade;
  };
  
  // Delete trade
  const removeTrade = (id: string) => {
    deleteTrade(id);
    setTrades(prev => prev.filter(trade => trade.id !== id));
  };
  
  // Update trade
  const editTrade = (id: string, updates: Partial<Trade>) => {
    const updated = updateTrade(id, updates);
    if (updated) {
      setTrades(prev => prev.map(trade => trade.id === id ? updated : trade));
    }
    return updated;
  };
  
  return { trades, addTrade: addNewTrade, deleteTrade: removeTrade, updateTrade: editTrade };
};
