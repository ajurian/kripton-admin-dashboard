import { WalletActivityHeader } from "@/components/main/walletActivity";
import { WalletActivityTable } from "@/components/main/walletActivity/table";

const WalletActivity = () => {
    return (
        <div className="flex-grow basis-128 rounded-md bg-white shadow-lg">
            <WalletActivityHeader />
            <WalletActivityTable />
        </div>
    );
};

export default WalletActivity;
