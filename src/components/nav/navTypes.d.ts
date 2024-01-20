import { Dispatch, SetStateAction } from "react";

interface NavProps {
    user: User;
    onSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
