"use client";

import Main from "@/components/main";
import { Nav } from "@/components/nav";
import { Sidebar } from "@/components/sidebar";
import { user } from "@/data";
import { useState } from "react";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <Sidebar open={isSidebarOpen} />
            <div className="flex flex-1 flex-col">
                <Nav user={user} onSidebarOpen={setIsSidebarOpen} />
                <Main />
            </div>
        </>
    );
};

export default Home;
