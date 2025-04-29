
// In a production environment, this would connect to a real AI/OCR service
// For this demo, we're simulating the AI extraction with predefined patterns

export const extractTradeDataFromImage = async (imageFile: File) => {
  // Simulating an API call to an AI service
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // In reality, this data would come from the AI analysis of the image
        // This is just a simulation based on the provided screenshot
        resolve({
          symbol: "NAS100",
          buyPrice: "19430.4",
          sellPrice: "19428.9",
          pnl: "89.8",
          amount: "50246.03",
          riskReward: "2.46",
          quantity: "2",
          stopLoss: "36.5",
          target: "89.8"
        });
      } catch (error) {
        reject(new Error("Failed to process image"));
      }
    }, 2000); // Simulate processing delay
  });
};

export const calculateTradeMetrics = (buyPrice: number, sellPrice: number, quantity: number) => {
  const profitLoss = (sellPrice - buyPrice) * quantity;
  const profitLossPercentage = ((sellPrice - buyPrice) / buyPrice) * 100;
  
  return {
    profitLoss,
    profitLossPercentage
  };
};

export const parseCurrency = (value: string): number => {
  if (!value) return 0;
  // Remove currency symbols, commas and convert to number
  return parseFloat(value.replace(/[^0-9.-]+/g, ""));
};
