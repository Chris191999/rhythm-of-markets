
import React from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PsychologicalFactorsProps {
  confidence: number;
  setConfidence: (value: number) => void;
  stress: number;
  setStress: (value: number) => void;
  discipline: number;
  setDiscipline: (value: number) => void;
  patience: number;
  setPatience: (value: number) => void;
}

const PsychologicalFactors: React.FC<PsychologicalFactorsProps> = ({
  confidence,
  setConfidence,
  stress,
  setStress,
  discipline,
  setDiscipline,
  patience,
  setPatience
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Psychological Factors</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Confidence (1-10)</Label>
              <span className="text-sm text-muted-foreground">{confidence}</span>
            </div>
            <Slider 
              value={[confidence]} 
              max={10} 
              step={1} 
              className="w-full"
              onValueChange={([val]) => setConfidence(val)} 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Stress Level (1-10)</Label>
              <span className="text-sm text-muted-foreground">{stress}</span>
            </div>
            <Slider 
              value={[stress]} 
              max={10} 
              step={1} 
              className="w-full"
              onValueChange={([val]) => setStress(val)}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Discipline (1-10)</Label>
              <span className="text-sm text-muted-foreground">{discipline}</span>
            </div>
            <Slider 
              value={[discipline]} 
              max={10} 
              step={1} 
              className="w-full"
              onValueChange={([val]) => setDiscipline(val)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Patience (1-10)</Label>
              <span className="text-sm text-muted-foreground">{patience}</span>
            </div>
            <Slider 
              value={[patience]} 
              max={10} 
              step={1} 
              className="w-full"
              onValueChange={([val]) => setPatience(val)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologicalFactors;
