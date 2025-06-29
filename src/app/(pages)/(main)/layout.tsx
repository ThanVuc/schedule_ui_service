"use client";
import Header from "./_components/header";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div><Header userName="John Doe" userRole="Admin" /></div>
      <div className="flex">
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;