import React from "react";

const CardDetailsInfo = (props: CardDetailsInfoProps) => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div>
                    <div className="text-sm text-gray-500">Card Name</div>
                    <div className="mt-1 text-sm font-semibold">
                        {props.cardName}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Valid Date</div>
                    <div className="mt-1 text-sm font-semibold">
                        {props.validDate}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Card Number</div>
                    <div className="mt-1 text-sm font-semibold">
                        **** **** **** {props.cardNumber.slice(-4)}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div>
                    <div className="text-sm text-gray-500">Bank Name</div>
                    <div className="mt-1 text-sm font-semibold">
                        {props.bankName}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Card Holder</div>
                    <div className="mt-1 text-sm font-semibold">
                        {props.cardHolder}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Card Theme</div>
                    <div className="mt-2 flex gap-2 text-sm font-semibold">
                        <div className="h-[2em] w-[2em] rounded-full bg-violet-500" />
                        <div className="h-[2em] w-[2em] rounded-full bg-emerald-500" />
                        <div className="h-[2em] w-[2em] rounded-full bg-rose-500" />
                        <div className="h-[2em] w-[2em] rounded-full bg-blue-500" />
                        <div className="h-[2em] w-[2em] rounded-full bg-orange-500" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetailsInfo;
