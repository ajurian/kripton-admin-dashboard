"use client";

import { cn } from "@/lib/utils";
import {
    Cell,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
} from "react-aria-components";
import Arrow from "@/assets/icons/arrow.svg";
import { useEffect, useRef, useState } from "react";

const WalletActivityTable = () => {
    const columns = [
        { id: "type", name: "Type", isRowHeader: true },
        { id: "timestamp", name: "Timestamp" },
        { id: "amount", name: "Amount" },
        { id: "status", name: "Status" },
    ];

    const rows = [
        {
            id: 1,
            type: "Withdraw",
            timestamp: "06:24:45 AM",
            amount: "-$542",
            status: "Pending",
        },
        {
            id: 2,
            type: "Topup",
            timestamp: "06:24:45 AM",
            amount: "$5,563",
            status: "Completed",
        },
        {
            id: 3,
            type: "Withdraw",
            timestamp: "06:24:45 AM",
            amount: "-$912",
            status: "Canceled",
        },
        {
            id: 4,
            type: "Topup",
            timestamp: "06:24:45 AM",
            amount: "+$7,762",
            status: "Completed",
        },
        {
            id: 5,
            type: "Topup",
            timestamp: "06:24:45 AM",
            amount: "+$5,563",
            status: "Completed",
        },
        {
            id: 6,
            type: "Withdraw",
            timestamp: "06:24:45 AM",
            amount: "-$912",
            status: "Canceled",
        },
    ];

    const [scrollState, setScrollState] = useState<"start" | "middle" | "end">(
        "start",
    );
    const elementRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (elementRef.current === null) {
                return;
            }

            const scrollTop = elementRef.current.scrollTop || 0;

            setScrollState(
                scrollTop === 0
                    ? "start"
                    : scrollTop ===
                        elementRef.current.scrollHeight -
                            elementRef.current.clientHeight
                      ? "end"
                      : "middle",
            );
        };

        window.addEventListener("scroll", onScroll, true);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <Table
            ref={elementRef}
            aria-label="Wallet Activity"
            className={cn(
                "mb-4 block max-h-96 w-full overflow-y-auto border-b text-center [&_tr]:flex",
                scrollState === "end" && "border-b-0",
            )}
        >
            <TableHeader
                columns={columns}
                className={cn(
                    "sticky top-0 z-10 block w-full border-b border-transparent bg-white",
                    (scrollState === "middle" || scrollState === "end") &&
                        "border-zinc-300",
                )}
            >
                {(column) => (
                    <Column
                        isRowHeader={column.isRowHeader}
                        className="float-left w-[25%] px-6 py-4 first:text-left last:text-right"
                    >
                        {column.name}
                    </Column>
                )}
            </TableHeader>
            <TableBody items={rows} className="flex w-full flex-col">
                {(item) => (
                    <Row columns={columns}>
                        {(column) => (
                            <Cell
                                className={cn(
                                    "float-left flex w-[25%] items-center justify-center gap-2 px-6 py-4 text-sm font-semibold first:justify-start last:justify-end",
                                    column.id === "status" && {
                                        "text-green-500":
                                            item.status === "Completed",
                                        "text-red-500":
                                            item.status === "Canceled",
                                        "text-gray-500":
                                            item.status === "Pending",
                                    },
                                )}
                            >
                                {column.isRowHeader && (
                                    <span
                                        className={cn(
                                            "flex aspect-square h-[3em] origin-center items-center justify-center rounded-lg border-2 p-2",
                                            {
                                                "rotate-90 text-green-500":
                                                    item.type === "Withdraw",
                                                "-rotate-90 text-primary":
                                                    item.type === "Topup",
                                            },
                                        )}
                                    >
                                        <Arrow />
                                    </span>
                                )}
                                {/* @ts-expect-error */}
                                {item[column.id]}
                            </Cell>
                        )}
                    </Row>
                )}
            </TableBody>
        </Table>
    );
};

export default WalletActivityTable;
