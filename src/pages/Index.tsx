
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/layout/Navbar';
import PerformanceMetrics from '@/components/dashboard/PerformanceMetrics';
import TradingJournal from '@/components/dashboard/TradingJournal';
import TradeHistory from '@/components/dashboard/TradeHistory';
import PsychologicalInsights from '@/components/dashboard/PsychologicalInsights';
import AITradingAnalysis from '@/components/dashboard/AITradingAnalysis';
import AdvancedPerformanceMetrics from '@/components/dashboard/AdvancedPerformanceMetrics';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceMetrics />
            <PsychologicalInsights />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <AdvancedPerformanceMetrics />
            <AITradingAnalysis />
          </div>
          
          <Tabs defaultValue="history">
            <TabsList className="grid grid-cols-2 w-full max-w-md mb-4">
              <TabsTrigger value="history">Trade History</TabsTrigger>
              <TabsTrigger value="journal">New Entry</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="space-y-4">
              <TradeHistory />
            </TabsContent>
            
            <TabsContent value="journal" className="space-y-4">
              <TradingJournal />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
