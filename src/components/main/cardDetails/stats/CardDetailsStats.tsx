import { CircularMeter } from "@/components/ui/circularMeter";
import { CircularMeterProps } from "@/components/ui/circularMeter/circularMeterTypes";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Label, Text } from "react-aria-components";
import { Doughnut } from "react-chartjs-2";

const DATA = [28, 9, 21, 18, 24];

interface MeterProps extends CircularMeterProps {
    labelTitle: string;
}

const Meter = ({ labelTitle, className, ...props }: MeterProps) => (
    <CircularMeter
        className={cn("flex-col-reverse self-start", className)}
        {...props}
    >
        {({ valueText }) => (
            <div className="flex flex-col text-center">
                <Label className="text-sm font-semibold">{labelTitle}</Label>
                <Text>{valueText}</Text>
            </div>
        )}
    </CircularMeter>
);

const Graph = (props: CardDetailsStatsProps["moneySpent"]) => {
    const total =
        props.rent +
        props.investment +
        props.restaurant +
        props.food +
        props.installment;

    const backgroundColor = useMemo(() => {
        if (typeof window === "undefined") {
            return [];
        }

        const style = getComputedStyle(document.body);
        const blue = style.getPropertyValue("--color-blue-500");
        const purple = style.getPropertyValue("--color-purple-500");
        const amber = style.getPropertyValue("--color-amber-500");
        const rose = style.getPropertyValue("--color-rose-500");
        const green = style.getPropertyValue("--color-green-500");

        return [blue, purple, amber, rose, green];
    }, []);

    return (
        <div className="h-60 w-60">
            <Doughnut
                data={{
                    labels: [
                        [
                            `Rent ${Number(
                                ((props.rent / total) * 100).toFixed(1),
                            )}%`,
                        ],
                        `Investment ${Number(
                            ((props.investment / total) * 100).toFixed(1),
                        )}%`,
                        `Restaurant ${Number(
                            ((props.restaurant / total) * 100).toFixed(1),
                        )}%`,
                        `Food ${Number(
                            ((props.food / total) * 100).toFixed(1),
                        )}%`,
                        `Installment ${Number(
                            ((props.installment / total) * 100).toFixed(1),
                        )}%`,
                    ],
                    datasets: [
                        {
                            label: "Money Spent",
                            data: [
                                props.rent,
                                props.investment,
                                props.restaurant,
                                props.food,
                                props.installment,
                            ],
                            backgroundColor,
                            spacing: 6,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                usePointStyle: true,
                                pointStyle: "rectRounded",
                                boxWidth: 12,
                                boxHeight: 12,
                            },
                            position: "bottom",
                        },
                    },
                }}
            />
        </div>
    );
};

const CardDetailsStats = ({
    monthlyLimits,
    moneySpent,
}: CardDetailsStatsProps) => {
    const monthlyLimitsTotal =
        monthlyLimits.mainLimits + monthlyLimits.seconds + monthlyLimits.others;

    return (
        <div className="flex flex-col gap-6">
            <div className="text-sm text-gray-500">Monthly Limits</div>
            <div className="flex flex-wrap gap-6">
                <Meter
                    labelTitle="Main Limits"
                    valueLabel={`$${monthlyLimits.mainLimits.toLocaleString()}`}
                    value={
                        (monthlyLimits.mainLimits / monthlyLimitsTotal) * 100
                    }
                    style={
                        {
                            "--stroke-progress": "var(--color-orange-500)",
                        } as React.CSSProperties
                    }
                />
                <Meter
                    labelTitle="Seconds"
                    valueLabel={`$${monthlyLimits.seconds.toLocaleString()}`}
                    value={(monthlyLimits.seconds / monthlyLimitsTotal) * 100}
                    style={
                        {
                            "--stroke-progress": "var(--color-green-500)",
                        } as React.CSSProperties
                    }
                />
                <Meter
                    labelTitle="Others"
                    valueLabel={`$${monthlyLimits.others.toLocaleString()}`}
                    value={(monthlyLimits.others / monthlyLimitsTotal) * 100}
                    style={
                        {
                            "--stroke-progress": "var(--color-gray-500)",
                        } as React.CSSProperties
                    }
                />
                <Graph {...moneySpent} />
            </div>
        </div>
    );
};

export default CardDetailsStats;
