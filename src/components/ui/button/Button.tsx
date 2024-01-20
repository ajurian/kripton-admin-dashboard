"use client";

import {
    ButtonProps,
    ButtonVariants,
} from "@/components/ui/button/buttonTypes";
import buttonVariants from "@/components/ui/button/buttonVariants";
import { cn } from "@/lib/utils";
import { Button as BaseButton } from "react-aria-components";

const Button = ({
    size = "md",
    variant = "solid",
    color = "primary",
    className,
    ...props
}: ButtonProps) => (
    <BaseButton
        {...props}
        className={(state) => {
            const variantHoveredClassName: Record<
                NonUndefined<ButtonVariants["variant"]>,
                string
            > = {
                plain: "bg-opacity-25",
                outlined: "bg-opacity-25",
                solid: "bg-opacity-90",
                text: "text-opacity-85",
            };
            const variantPressedClassName: Record<
                NonUndefined<ButtonVariants["variant"]>,
                string
            > = {
                plain: "bg-opacity-40",
                outlined: "bg-opacity-40",
                solid: "bg-opacity-80",
                text: "text-opacity-100",
            };

            return cn(
                buttonVariants({ size, variant, color }),
                state.isFocused && "outline-none",
                state.isFocusVisible && "outline-none ring-2",
                state.isDisabled && "pointer-events-none opacity-50",
                state.isHovered && variantHoveredClassName[variant],
                state.isPressed && variantPressedClassName[variant],
                typeof className === "function" ? className(state) : className,
            );
        }}
        data-size={size}
        data-variant={variant}
        data-color={color}
    />
);

export default Button;
