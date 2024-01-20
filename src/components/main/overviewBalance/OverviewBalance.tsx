import {
    OverviewBalanceHeader,
    OverviewBalanceStats,
} from "@/components/main/overviewBalance";

const OverviewBalance = () => {
    return (
        <div className="max-w-128 flex-grow basis-128 self-start rounded-md bg-white p-6 shadow-lg">
            <OverviewBalanceHeader />
            <OverviewBalanceStats valuePrevious={563443} valueNow={557235.31} />
        </div>
    );
};

export default OverviewBalance;
