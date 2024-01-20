interface CardDetailsStatsProps {
    monthlyLimits: {
        mainLimits: number;
        seconds: number;
        others: number;
    };
    moneySpent: {
        rent: number;
        investment: number;
        restaurant: number;
        food: number;
        installment: number;
    };
}
