"use client";

import Sidebar from "./_components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-70">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;