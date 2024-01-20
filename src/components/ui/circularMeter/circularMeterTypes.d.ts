import { ReactNode } from "react";
import {
    MeterProps as BaseMeterProps,
    MeterRenderProps as BaseMeterRenderProps,
} from "react-aria-components";

interface CircularMeterRenderProps extends Omit<BaseMeterRenderProps, "valueText"> {
    cssVariables: { [key: string]: string };
    trackThickness?: string | number;
    className?: string;
}

interface CircularMeterProps extends BaseMeterProps {
    innerSize?: string | number;
    trackThickness?: string | number;
    svgClassName?: string;
    children?:
        | ReactNode
        | ((values: Omit<BaseMeterRenderProps, "percentage">) => ReactNode);
}
