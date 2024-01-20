import { Wallet } from "@/components/main/walletList";
import { cn } from "@/lib/utils";

const WalletList = ({ items }: WalletListProps) => {
    return (
        <div className="flex flex-wrap gap-4 text-white">
            {items.map((wallet, idx) => (
                <Wallet
                    key={idx}
                    className={cn({
                        "from-violet-600 to-purple-500": idx % 4 === 0,
                        "from-emerald-600 to-green-500": idx % 4 === 1,
                        "from-rose-600 to-pink-500": idx % 4 === 2,
                        "from-blue-600 to-sky-500": idx % 4 === 3,
                    })}
                    {...wallet}
                />
            ))}
        </div>
    );
};

export default WalletList;
