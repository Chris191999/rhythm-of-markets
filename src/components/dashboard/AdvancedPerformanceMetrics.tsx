
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { advancedMetrics } from '@/utils/mockData';

const AdvancedPerformanceMetrics = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Advanced Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="timeframe">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="timeframe">By Timeframe</TabsTrigger>
            <TabsTrigger value="setup">By Setup</TabsTrigger>
            <TabsTrigger value="conditions">Market Conditions</TabsTrigger>
            <TabsTrigger value="smart">Smart Money</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeframe">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={advancedMetrics.performanceByTimeframe}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="timeframe" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                    labelStyle={{ color: '#f8fafc' }}
                  />
                  <Bar dataKey="profitLoss" fill="#8B5CF6" name="P&L" />
                  <Bar dataKey="winRate" fill="#22c55e" name="Win Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Best Timeframe</p>
                <p className="text-lg font-bold">1H</p>
                <p className="text-xs text-muted-foreground">Win Rate: 68%</p>
              </div>
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Most Profitable</p>
                <p className="text-lg font-bold">4H</p>
                <p className="text-xs text-muted-foreground">Avg: $42.32 per trade</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="setup">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={advancedMetrics.setupPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="setup" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                    labelStyle={{ color: '#f8fafc' }}
                  />
                  <Bar dataKey="avgReturn" fill="#8B5CF6" name="Avg Return %" />
                  <Bar dataKey="winRate" fill="#22c55e" name="Win Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Best Setup</p>
                <p className="text-lg font-bold">Fair Value Gap</p>
                <p className="text-xs text-muted-foreground">Win Rate: 72%</p>
              </div>
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Most Profitable</p>
                <p className="text-lg font-bold">Liquidity Grab</p>
                <p className="text-xs text-muted-foreground">Avg: 2.8% per trade</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="conditions">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={advancedMetrics.marketConditionPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="condition" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                    labelStyle={{ color: '#f8fafc' }}
                  />
                  <Bar dataKey="avgReturn" fill="#8B5CF6" name="Avg Return %" />
                  <Bar dataKey="winRate" fill="#22c55e" name="Win Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Best Condition</p>
                <p className="text-lg font-bold">Trending</p>
                <p className="text-xs text-muted-foreground">Win Rate: 65%</p>
              </div>
              <div className="p-3 rounded-md bg-secondary/50">
                <p className="text-sm font-medium">Worst Condition</p>
                <p className="text-lg font-bold">Volatile</p>
                <p className="text-xs text-muted-foreground">Win Rate: 42%</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="smart">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Aligned', value: advancedMetrics.smartMoneyAlignment.aligned },
                      { name: 'Not Aligned', value: advancedMetrics.smartMoneyAlignment.notAligned },
                      { name: 'Undetermined', value: advancedMetrics.smartMoneyAlignment.undetermined },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    <Cell fill="#8B5CF6" />
                    <Cell fill="#f43f5e" />
                    <Cell fill="#94a3b8" />
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                    labelStyle={{ color: '#f8fafc' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 rounded-md bg-secondary/50">
              <p className="text-sm">
                Smart Money alignment shows how often your trades aligned with institutional order flow. 
                When aligned, your win rate is <span className="font-bold text-trading-win">78%</span> vs 
                <span className="font-bold text-trading-loss"> 35%</span> when not aligned.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdvancedPerformanceMetrics;
