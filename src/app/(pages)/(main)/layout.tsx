"use client";
import Header from "./_components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="John Doe" userRole="Admin" />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
