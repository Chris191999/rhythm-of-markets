
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emotionData, psychologyMetrics } from '@/utils/mockData';
import { Progress } from "@/components/ui/progress";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const PsychologicalInsights = () => {
  // Transform emotion data for radar chart
  const radarData = [
    { subject: 'Before', A: emotionData[0].beforeTrade, B: emotionData[1].beforeTrade, C: emotionData[2].beforeTrade, D: emotionData[3].beforeTrade },
    { subject: 'During', A: emotionData[0].duringTrade, B: emotionData[1].duringTrade, C: emotionData[2].duringTrade, D: emotionData[3].duringTrade },
    { subject: 'After', A: emotionData[0].afterTrade, B: emotionData[1].afterTrade, C: emotionData[2].afterTrade, D: emotionData[3].afterTrade },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Psychological Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Emotional States During Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 10]} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }} 
                  />
                  <Radar 
                    name="Confidence" 
                    dataKey="A" 
                    stroke="#8B5CF6" 
                    fill="#8B5CF6" 
                    fillOpacity={0.4}
                  />
                  <Radar 
                    name="Stress" 
                    dataKey="B" 
                    stroke="#f43f5e" 
                    fill="#f43f5e" 
                    fillOpacity={0.4} 
                  />
                  <Radar 
                    name="Discipline" 
                    dataKey="C" 
                    stroke="#22c55e" 
                    fill="#22c55e" 
                    fillOpacity={0.4} 
                  />
                  <Radar 
                    name="Patience" 
                    dataKey="D" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.4} 
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: 10, color: '#94a3b8' }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trading Psychology Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {psychologyMetrics.map((metric, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{metric.label}</span>
                  <span className="text-muted-foreground">{metric.value}/10</span>
                </div>
                <Progress 
                  value={metric.value * 10} 
                  className={`h-2 ${
                    metric.category === 'strength' 
                      ? 'bg-muted [&>[data-progress]]:bg-trading-win' 
                      : metric.category === 'weakness' 
                        ? 'bg-muted [&>[data-progress]]:bg-trading-loss' 
                        : 'bg-muted [&>[data-progress]]:bg-trading-neutral'
                  }`}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PsychologicalInsights;
