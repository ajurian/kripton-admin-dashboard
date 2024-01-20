import { CardDetails } from "@/components/main/cardDetails";
import { OverviewBalance } from "@/components/main/overviewBalance";
import { WalletActivity } from "@/components/main/walletActivity";
import { WalletList } from "@/components/main/walletList";
import { Button } from "@/components/ui/button";
import { wallets } from "@/data";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Main = () => {
    return (
        <main className="flex flex-1 flex-col gap-6 px-8 py-4">
            <Button className="ml-auto h-12 rounded-full px-8 text-xs">
                + Add Wallet
            </Button>
            <WalletList items={wallets} />
            <div className="flex flex-wrap gap-4">
                <CardDetails />
                <OverviewBalance />
                <WalletActivity />
            </div>
        </main>
    );
};

export default Main;
