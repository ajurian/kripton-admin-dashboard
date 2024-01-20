import Chevron from "@/assets/icons/chevron.svg";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "react-aria";
import {
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    Select,
    SelectValue,
} from "react-aria-components";

const OverviewBalanceHeader = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <div className="text-sm font-semibold">Overview balance</div>
                <div className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur
                </div>
            </div>
            <Select selectedKey="weekly">
                <VisuallyHidden>
                    <Label>Date</Label>
                </VisuallyHidden>
                <Button variant="text" className="rounded-full border text-xs">
                    <SelectValue />
                    <div
                        aria-hidden="true"
                        className="ml-2 aspect-square w-[1em] rotate-90"
                    >
                        <Chevron />
                    </div>
                </Button>
                <Popover className="rounded-xl border bg-white py-2 text-sm shadow-xl">
                    <ListBox className="flex cursor-default flex-col gap-0.5 text-primary">
                        <ListBoxItem
                            id="monthly"
                            className="rounded px-4 py-1 outline-none hover:bg-gray-100"
                        >
                            Monthly (2020)
                        </ListBoxItem>
                        <ListBoxItem
                            id="weekly"
                            className="rounded px-4 py-1 outline-none hover:bg-gray-100"
                        >
                            Weekly (2020)
                        </ListBoxItem>
                        <ListBoxItem
                            id="daily"
                            className="rounded px-4 py-1 outline-none hover:bg-gray-100"
                        >
                            Daily (2020)
                        </ListBoxItem>
                    </ListBox>
                </Popover>
            </Select>
        </div>
    );
};

export default OverviewBalanceHeader;
