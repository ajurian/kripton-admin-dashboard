import Bell from "@/assets/icons/bell.svg";
import Chat from "@/assets/icons/chat.svg";
import Gift from "@/assets/icons/gift.svg";
import Hamburger from "@/assets/icons/hamburger.svg";
import { NavProps } from "@/components/nav/navTypes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Nav = ({ user, onSidebarOpen }: NavProps) => {
    return (
        <nav className="flex h-20 items-center justify-between gap-4 bg-gray-50 px-8 py-6">
            <div className="flex items-center gap-4">
                <Button
                    size="icon"
                    variant="plain"
                    color="gray"
                    className="w-9"
                    onPress={() => onSidebarOpen((open) => !open)}
                >
                    <Hamburger />
                </Button>
                <h1 className="text-xl font-bold">My Wallets</h1>
            </div>
            <input />
            <div className="flex gap-2">
                <Button variant="outlined" size="icon">
                    <div className="aspect-square w-[1.25em]">
                        <Bell />
                    </div>
                </Button>
                <Button variant="outlined" size="icon">
                    <div className="aspect-square w-[1.25em]">
                        <Chat />
                    </div>
                </Button>
                <Button variant="outlined" size="icon">
                    <div className="aspect-square w-[1.25em]">
                        <Gift />
                    </div>
                </Button>
            </div>
            <div className="flex h-full gap-2">
                <div className="relative aspect-square h-full">
                    <Image fill src={user.photoUrl} alt={user.photoUrl} />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold">{user.username}</div>
                    <div className="text-[0.65rem] text-gray-500">
                        {user.role}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
