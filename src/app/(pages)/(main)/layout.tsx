"use client";
import SideBar from "./_components/Sidebar";
import Header from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-tl from-[#b460c0] to-[#1e0350] text-white flex">
      <div className="w-2/12">
          <SideBar />
      </div>
      <main className="flex-1 h-full overflow-y-auto">
        <Header />
        <div className="flex flex-col">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
