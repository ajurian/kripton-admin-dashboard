import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors",
    {
        variants: {
            size: {
                sm: "h-8 px-3 text-xs",
                md: "h-9 px-4 text-sm",
                lg: "h-10 px-6",
                icon: "aspect-square w-9",
            },
            variant: {
                plain: [],
                outlined: [],
                solid: [],
                text: [],
            },
            color: {
                primary: [],
                gray: [],
            },
        },
        compoundVariants: [
            {
                variant: "plain",
                color: "primary",
                className: "bg-primary bg-opacity-0 text-primary",
            },
            {
                variant: "outlined",
                color: "primary",
                className:
                    "border border-primary border-opacity-30 bg-primary bg-opacity-0",
            },
            {
                variant: "solid",
                color: "primary",
                className: "bg-primary text-white",
            },
            {
                variant: "text",
                color: "primary",
                className: "text-primary text-opacity-70",
            },
            {
                variant: "plain",
                color: "gray",
                className: "bg-gray-600 bg-opacity-0",
            },
            {
                variant: "outlined",
                color: "gray",
                className: "border border-gray-600/30 bg-gray-600 bg-opacity-0",
            },
            {
                variant: "solid",
                color: "gray",
                className: "bg-gray-600 text-white",
            },
            {
                variant: "text",
                color: "gray",
                className: "text-gray-600 text-opacity-70",
            },
        ],
        defaultVariants: {
            size: "md",
            variant: "solid",
            color: "primary",
        },
    },
);

export default buttonVariants;
