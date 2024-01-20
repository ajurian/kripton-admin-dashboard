import { cn } from "@/lib/utils";
import React from "react";

const Wallet = ({ cardNumber, name, balance, className }: WalletProps) => {
    return (
        <div
            className={cn(
                "relative flex min-h-40 min-w-72 flex-col rounded-xl bg-gradient-to-r p-6 py-8 shadow-lg after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:scale-100 after:bg-wave after:bg-left",
                className,
            )}
        >
            <div className="mb-1 text-sm font-light text-gray-300">{name}</div>
            <div className="text-xl font-bold">
                $ {balance.toLocaleString()}
            </div>
            <div className="mt-auto font-mono text-sm text-yellow-300">
                {cardNumber.slice(0, -3)}***
            </div>
        </div>
    );
};

export default Wallet;
