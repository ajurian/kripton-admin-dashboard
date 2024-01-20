import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary))",
            },
            backgroundColor: {
                primary: "rgb(var(--primary) / var(--tw-bg-opacity, 1))",
            },
            textColor: {
                primary: "rgb(var(--primary) / var(--tw-text-opacity, 1))",
            },
            borderColor: {
                primary: "rgb(var(--primary) / var(--tw-border-opacity, 1))",
            },
            transitionDuration: {
                DEFAULT: "100ms",
            },
            backgroundImage: {
                wave: "url('/wave.svg')",
            },
            maxWidth: {
                128: "32rem",
            },
            flexBasis: {
                128: "32rem",
            },
        },
    },
    plugins: [require("./colorVarsPlugin")],
};

export default config;
