
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Lightbulb, TrendingUp } from "lucide-react";
import { AiAnalysis } from '@/utils/types';
import { aiAnalysis } from '@/utils/mockData';

const AITradingAnalysis = () => {
  const [currentInsight, setCurrentInsight] = useState<'patterns' | 'psychology' | 'recommendations'>('patterns');
  
  const renderContent = () => {
    switch(currentInsight) {
      case 'patterns':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Trading Patterns Detected</h3>
            </div>
            <ul className="space-y-3">
              {aiAnalysis.tradingPatterns.map((pattern, idx) => (
                <li key={idx} className="flex items-start space-x-2 p-2 rounded-md bg-secondary/50">
                  <span className="text-primary font-semibold">•</span>
                  <span>{pattern}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Pattern Confidence</span>
                <span className="text-sm font-medium">{aiAnalysis.confidenceScore}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${aiAnalysis.confidenceScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      
      case 'psychology':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Psychological Insights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-secondary/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-trading-win">Strengths</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                  {aiAnalysis.strengths.map((strength, idx) => (
                    <p key={idx} className="text-sm">• {strength}</p>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-secondary/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-trading-loss">Improvement Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                  {aiAnalysis.improvementAreas.map((area, idx) => (
                    <p key={idx} className="text-sm">• {area}</p>
                  ))}
                </CardContent>
              </Card>
            </div>
            <div className="bg-secondary/50 rounded-md p-3 border border-border">
              <p className="text-sm italic text-muted-foreground">
                "Your psychological analysis indicates a correlation between lower stress levels and higher profitability. 
                Consider techniques to maintain emotional equilibrium during volatile market conditions."
              </p>
            </div>
          </div>
        );
      
      case 'recommendations':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">AI Recommendations</h3>
            </div>
            <ul className="space-y-3">
              {aiAnalysis.recommendations.map((rec, idx) => (
                <li key={idx} className="p-3 rounded-md bg-secondary/50 ict-border">
                  <p className="text-sm">{rec}</p>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex justify-end">
              <Button size="sm" variant="outline" className="text-xs">
                Generate Custom Training Plan
              </Button>
            </div>
          </div>
        );
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <BrainCircuit className="h-5 w-5 mr-2 text-primary" />
          AI Trading Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <Button 
            size="sm" 
            variant={currentInsight === 'patterns' ? "default" : "outline"}
            onClick={() => setCurrentInsight('patterns')}
          >
            Patterns
          </Button>
          <Button 
            size="sm" 
            variant={currentInsight === 'psychology' ? "default" : "outline"}
            onClick={() => setCurrentInsight('psychology')}
          >
            Psychology
          </Button>
          <Button 
            size="sm" 
            variant={currentInsight === 'recommendations' ? "default" : "outline"}
            onClick={() => setCurrentInsight('recommendations')}
          >
            Recommendations
          </Button>
        </div>
        
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default AITradingAnalysis;
