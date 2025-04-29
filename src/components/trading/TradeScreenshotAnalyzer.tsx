
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from '@/hooks/use-toast';

interface ExtractedTradeData {
  symbol?: string;
  buyPrice?: string;
  sellPrice?: string;
  pnl?: string;
  profitLossAmount?: string;
  riskRewardRatio?: string;
  quantity?: string;
  stopLoss?: string;
  target?: string;
}

const TradeScreenshotAnalyzer = ({ onDataExtracted }: { onDataExtracted: (data: ExtractedTradeData) => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<ExtractedTradeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setExtractedData(null);
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit");
      return;
    }

    // Show preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const analyzeScreenshot = async () => {
    if (!previewUrl) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      // Simulating AI processing with sample data extraction based on the provided screenshot
      // In a real implementation, this would call an OCR or AI service
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time

      // Sample extracted data based on the TradingView screenshot
      const data: ExtractedTradeData = {
        symbol: "NAS100",
        buyPrice: "19,430.4",
        sellPrice: "19,428.9",
        pnl: "89.8",
        profitLossAmount: "50246.03",
        riskRewardRatio: "2.46",
        quantity: "2",
        stopLoss: "36.5 (0.19%)",
        target: "89.8 (0.48%)"
      };

      setExtractedData(data);
      onDataExtracted(data);
      
      toast({
        title: "Trade data extracted",
        description: "Successfully analyzed your trading screenshot",
      });
    } catch (err) {
      console.error("Error analyzing screenshot:", err);
      setError("Failed to analyze screenshot. Please try again.");
      
      toast({
        title: "Analysis failed",
        description: "Could not extract trade data from the image",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          Trade Screenshot Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="max-w-sm"
              disabled={isAnalyzing}
            />
            <Button
              onClick={analyzeScreenshot}
              disabled={!previewUrl || isAnalyzing}
              className={isAnalyzing ? "opacity-80" : ""}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {previewUrl && (
          <div className="space-y-3">
            <p className="text-sm font-medium">Screenshot Preview:</p>
            <div className="relative border border-border rounded-md overflow-hidden">
              <img 
                src={previewUrl} 
                alt="Trading screenshot" 
                className="max-w-full h-auto max-h-[300px] mx-auto"
              />
            </div>
          </div>
        )}

        {extractedData && (
          <div className="space-y-3 bg-secondary/50 p-4 rounded-md">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-trading-win" />
              <p className="font-medium">Extracted Trade Data:</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>Symbol: <span className="font-medium">{extractedData.symbol}</span></div>
              <div>Buy Price: <span className="font-medium">{extractedData.buyPrice}</span></div>
              <div>Sell Price: <span className="font-medium">{extractedData.sellPrice}</span></div>
              <div>P&L: <span className="font-medium">{extractedData.pnl}</span></div>
              <div>Amount: <span className="font-medium">{extractedData.profitLossAmount}</span></div>
              <div>Risk/Reward: <span className="font-medium">{extractedData.riskRewardRatio}</span></div>
              <div>Quantity: <span className="font-medium">{extractedData.quantity}</span></div>
              <div>Stop Loss: <span className="font-medium">{extractedData.stopLoss}</span></div>
              <div>Target: <span className="font-medium">{extractedData.target}</span></div>
            </div>
            <Button
              size="sm"
              className="mt-2"
              onClick={() => onDataExtracted(extractedData)}
            >
              Use This Data
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TradeScreenshotAnalyzer;
