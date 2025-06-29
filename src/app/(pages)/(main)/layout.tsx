"use client";
import SideBar from "./_components/Sidebar";
import Header from "./_components/header";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white flex flex-col">
      <main className="">
        <Header userName="John Doe" userRole="Admin" />
      </main>
      <div className="flex w-full h-full">
        <div className="h-full w-70">
          <SideBar />
        </div>
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;