
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, WalletIcon, PiggyBank } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
      <div className="flex items-center">
        <ChartBar className="h-6 w-6 text-primary mr-2" />
        <h1 className="text-xl font-semibold">Rhythm of Markets</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <WalletIcon className="h-4 w-4 mr-1" />
          Portfolio
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <PiggyBank className="h-4 w-4 mr-1" />
          Reports
        </Button>
        <Button variant="secondary" size="sm">
          New Trade
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
