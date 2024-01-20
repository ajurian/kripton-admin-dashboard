"use client";

import {
    CircularMeterProps,
    CircularMeterRenderProps,
} from "@/components/ui/circularMeter/circularMeterTypes";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef } from "react";
import { Meter as BaseMeter } from "react-aria-components";

const clamp = (value: number, minValue: number, maxValue: number) =>
    Math.min(Math.max(value, minValue), maxValue);

const map = (
    value: number,
    minValue: number,
    maxValue: number,
    range: number = 1,
) => clamp((value - minValue) / (maxValue - minValue), 0, 1) * range;

const SvgMeter = ({
    cssVariables,
    trackThickness,
    percentage,
    className,
}: CircularMeterRenderProps) => {
    return (
        <svg
            key={percentage}
            style={cssVariables}
            className={cn("aspect-square w-[4.5rem] font-medium", className)}
        >
            <circle
                cx="50%"
                cy="50%"
                fill="transparent"
                strokeWidth={trackThickness}
                r="var(--progress-radius)"
                style={{ stroke: "var(--stroke-track, var(--color-gray-300))" }}
            />
            <circle
                cx="50%"
                cy="50%"
                fill="transparent"
                strokeDashoffset="var(--to-stroke-dashoffset)"
                strokeWidth={trackThickness}
                strokeDasharray="var(--progress-circumference)"
                strokeLinecap="butt"
                r="var(--progress-radius)"
                className="origin-center -rotate-90"
                style={{
                    stroke: "var(--stroke-progress, var(--color-primary))",
                }}
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="var(--from-stroke-dashoffset)"
                    to="var(--to-stroke-dashoffset)"
                    dur="1s"
                    repeatCount={1}
                    calcMode="spline"
                    keySplines="0.16 1 0.3 1"
                />
            </circle>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-semibold"
            >
                {Number((percentage * 100).toFixed(1))}%
            </text>
        </svg>
    );
};

const CircularMeter = ({
    innerSize = "100%",
    trackThickness = "12%",
    svgClassName,
    value = 0,
    minValue = 0,
    maxValue = 100,
    className,
    children,
    ...props
}: CircularMeterProps) => {
    const percentage = useMemo(
        () => map(value, minValue, maxValue),
        [value, minValue, maxValue],
    );
    const previousPercentageRef = useRef(0);

    const cssVariables = useMemo(
        () => ({
            "--progress-radius": `calc(${innerSize} / 2 - ${trackThickness} / 2)`,
            "--progress-circumference": `calc(${
                2 * Math.PI
            } * var(--progress-radius))`,
            "--from-stroke-dashoffset": `calc(var(--progress-circumference) - var(--progress-circumference) * ${previousPercentageRef.current})`,
            "--to-stroke-dashoffset": `calc(var(--progress-circumference) - var(--progress-circumference) * ${percentage})`,
        }),
        [innerSize, trackThickness, percentage],
    );

    useEffect(() => {
        previousPercentageRef.current = percentage;
    }, [percentage]);

    return (
        <BaseMeter
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            className={cn(
                "relative flex flex-col items-center gap-2 text-sm",
                className,
            )}
            {...props}
        >
            {({ valueText }) => (
                <>
                    {typeof children === "function"
                        ? children({ valueText })
                        : children}
                    <SvgMeter
                        cssVariables={cssVariables}
                        trackThickness={trackThickness}
                        percentage={percentage}
                        className={svgClassName}
                    />
                </>
            )}
        </BaseMeter>
    );
};

export default CircularMeter;
