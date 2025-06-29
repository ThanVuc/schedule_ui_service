"use client";

import Sidebar from "./_components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-70">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;