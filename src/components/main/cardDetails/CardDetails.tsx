import {
    CardDetailsHeader,
    CardDetailsInfo,
    CardDetailsStats,
} from "@/components/main/cardDetails";

const CardDetails = () => {
    return (
        <div className="flex-grow rounded-md bg-white p-6 shadow-lg">
            <CardDetailsHeader />
            <div className="mt-6 flex gap-x-12 gap-y-6">
                <div className="flex basis-full flex-wrap justify-between gap-12">
                    <CardDetailsInfo
                        cardName="Main Balance"
                        validDate="8/21"
                        cardNumber="1234 1234 1234 1234"
                        bankName="ABC Center Bank"
                        cardHolder="Marquezz Silalahi"
                    />
                    <CardDetailsStats
                        monthlyLimits={{
                            mainLimits: 10000,
                            seconds: 500,
                            others: 7,
                        }}
                        moneySpent={{
                            rent: 28,
                            investment: 9,
                            restaurant: 21,
                            food: 18,
                            installment: 24,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
