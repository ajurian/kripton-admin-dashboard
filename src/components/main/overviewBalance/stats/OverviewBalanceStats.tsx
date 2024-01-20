import Chevron from "@/assets/icons/chevron.svg";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { Text } from "react-aria-components";
import { Bar } from "react-chartjs-2";

const Graph = () => {
    const [now] = useState(() => new Date());

    const backgroundColor = useMemo(() => {
        if (typeof window === "undefined") {
            return [];
        }

        const style = getComputedStyle(document.body);
        const primary = style.getPropertyValue("--color-primary");

        return primary;
    }, []);

    const labels = useMemo(() => {
        const labels = [];

        for (let i = 1; i <= 13; i++) {
            const timeOffset = i * 1000 * 60 * 60 * 24;
            const targetDate = new Date(now.getTime() - timeOffset);
            const label = ("0" + targetDate.getDate()).slice(-2);
            labels.unshift(label);
        }

        return labels;
    }, [now]);

    return (
        <div className="h-60 w-full">
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            data: [
                                244000, 469000, 589000, 595000, 390000, 454000,
                                401000, 511000, 530000, 430000, 603000, 861000,
                                607000,
                            ],
                            backgroundColor,
                        },
                    ],
                }}
                options={{
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: (value) => {
                                    return (
                                        (
                                            Number(value) / 1000
                                        ).toLocaleString() + "K"
                                    );
                                },
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

const OverviewBalanceStats = ({
    valuePrevious,
    valueNow,
}: OverviewBalanceStatsProps) => {
    const movement = valueNow - valuePrevious;
    const increasing = movement > 0;
    const decreasing = movement < 0;

    return (
        <div className="flex flex-col justify-around">
            <div className="my-4 flex items-center justify-between gap-4">
                <Text className="text-sm font-medium">
                    Last week{" "}
                    <Text
                        className={cn({
                            "text-green-500": decreasing,
                            "text-red-500": increasing,
                        })}
                    >
                        ${valuePrevious.toLocaleString()}
                    </Text>
                </Text>
                <div className="flex items-center gap-2">
                    <Text className="text-xl font-bold">
                        ${valueNow.toLocaleString()}
                    </Text>
                    <div
                        className={cn("flex items-center font-semibold", {
                            "text-green-500": increasing,
                            "text-red-500": decreasing,
                        })}
                    >
                        <Text>
                            {Number((valueNow / valuePrevious - 1).toFixed(4))}%
                        </Text>
                        <div
                            className={cn(
                                "aspect-square h-[1em] w-[1em] origin-center",
                                {
                                    "-rotate-90": increasing,
                                    "rotate-90": decreasing,
                                },
                            )}
                        >
                            <Chevron />
                        </div>
                    </div>
                </div>
            </div>
            <Graph />
        </div>
    );
};

export default OverviewBalanceStats;
