import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
    Roboto_Mono as FontMono,
    Inter as FontSans,
    Noto_Serif as FontSerif,
} from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });
const fontMono = FontMono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Kripton Admin Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "flex min-h-screen bg-gray-100 font-sans text-black antialiased",
                    fontSans.variable,
                    fontSerif.variable,
                    fontMono.variable,
                )}
            >
                {children}
            </body>
        </html>
    );
}
