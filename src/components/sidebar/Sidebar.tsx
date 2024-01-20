import Chevron from "@/assets/icons/chevron.svg";
import Illustration from "@/assets/banner/illustration.svg";
import Crypto from "@/assets/icons/crypto.svg";
import Exchange from "@/assets/icons/exchange.svg";
import Settings from "@/assets/icons/settings.svg";
import Transaction from "@/assets/icons/transaction.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Dashboard from "@/assets/icons/dashboard.svg";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sidebar = ({ open }: SidebarProps) => {
    return (
        <nav
            className={cn(
                "invisible sticky top-0 z-10 -ml-64 flex min-h-screen min-w-64 basis-64 flex-col self-start bg-white px-4 shadow-sm transition-all duration-200",
                {
                    "visible ml-0": open,
                },
            )}
        >
            <header className="mb-4 flex h-20 items-center py-4">
                <Logo className="ml-4 h-10" />
            </header>
            <ul className="flex flex-col gap-2 text-sm font-semibold text-gray-500">
                <li>
                    <Link href="#dashboard" className="flex gap-4 px-4 py-2">
                        <div className="aspect-square w-[1.5em]">
                            <Dashboard className="text-inherit" />
                        </div>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href="#my-wallet"
                        className="flex items-center gap-4 rounded bg-gray-200 px-4 py-2 text-primary"
                    >
                        <div className="aspect-square w-[1.5em]">
                            <Wallet className="text-inherit" />
                        </div>
                        My Wallet
                        <div className="ml-auto aspect-square w-[1em] rotate-90">
                            <Chevron />
                        </div>
                    </Link>
                    <ul className="ml-12 mt-2 flex flex-col gap-2">
                        <li>
                            <Link
                                href="#add-new"
                                className="block w-full px-2 py-1"
                            >
                                Add New
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#card-list"
                                className="block w-full px-2 py-1"
                            >
                                Card List
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#history"
                                className="block w-full px-2 py-1"
                            >
                                History
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        href="#transaction"
                        className="flex items-center gap-4 px-4 py-2"
                    >
                        <div className="aspect-square w-[1.5em]">
                            <Transaction className="text-inherit" />
                        </div>
                        Transaction
                        <div className="ml-auto aspect-square w-[1em]">
                            <Chevron />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#crypto"
                        className="flex items-center gap-4 px-4 py-2"
                    >
                        <div className="aspect-square w-[1.5em]">
                            <Crypto className="text-inherit" />
                        </div>
                        Crypto
                        <div className="ml-auto aspect-square w-[1em]">
                            <Chevron />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#exchange"
                        className="flex items-center gap-4 px-4 py-2"
                    >
                        <div className="aspect-square w-[1.5em]">
                            <Exchange className="text-inherit" />
                        </div>
                        Exchange
                        <div className="ml-auto aspect-square w-[1em]">
                            <Chevron />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#settings"
                        className="flex items-center gap-4 px-4 py-2"
                    >
                        <div className="aspect-square w-[1.5em]">
                            <Settings className="text-inherit" />
                        </div>
                        Settings
                        <div className="ml-auto aspect-square w-[1em]">
                            <Chevron />
                        </div>
                    </Link>
                </li>
            </ul>
            <div className="relative mt-20">
                <div className="absolute left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Illustration />
                </div>
                <div className="mx-4 flex h-24 items-end justify-center rounded-lg bg-primary p-4 text-white">
                    <div className="flex items-center gap-1 text-xs">
                        <Link href="#generate-report">Generate Report</Link>
                        <div className="h-[1.2em] w-[1.2em]">
                            <Chevron />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-xs text-gray-500">
                <div className="font-semibold">
                    Kripton Crypto Admin Dashboard
                </div>
                <div>© 2020 All Rights Reserved</div>
                <div className="mt-2">
                    Credits to{" "}
                    <Link
                        href="https://www.figma.com/community/file/1222112795133261547"
                        className="font-semibold text-primary"
                    >
                        Peterdraw
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
