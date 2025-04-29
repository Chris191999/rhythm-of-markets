
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, BrainCircuit, LineChart, Gauge } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-sidebar-background">
      <div className="flex items-center">
        <ChartBar className="h-6 w-6 text-primary mr-2" />
        <h1 className="text-xl font-semibold text-gradient">ICT Rhythm of Markets</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <LineChart className="h-4 w-4 mr-1" />
          Order Flow
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <BrainCircuit className="h-4 w-4 mr-1" />
          Smart Money
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Gauge className="h-4 w-4 mr-1" />
          AI Analysis
        </Button>
        <Button variant="secondary" size="sm">
          New Trade
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
