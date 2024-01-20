import { Button } from "@/components/ui/button";

const WalletActivityHeader = () => {
    return (
        <div className="flex items-center justify-between gap-4 p-6">
            <div>
                <div className="text-sm font-semibold">Wallet Activity</div>
                <div className="mt-1 text-xs">
                    Lorem ipsum dolor sit amet, consectetur
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="plain" size="sm" className="rounded-full">
                    Monthly
                </Button>
                <Button variant="plain" size="sm" className="rounded-full">
                    Weekly
                </Button>
                <Button size="sm" className="rounded-full">
                    Today
                </Button>
            </div>
        </div>
    );
};

export default WalletActivityHeader;
