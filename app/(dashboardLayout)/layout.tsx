"use client";

import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";

import React, { useState, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // useState-এ বুলিয়ান টাইপ ডিফাইন করা হয়েছে
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const sidebarWidth: string = isCollapsed ? "lg:pl-[80px]" : "lg:pl-[240px]";
  const contentMargin: string = isCollapsed ? "lg:ml-[80px]" : "lg:ml-[240px]";

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. The Top Navbar */}
      <div
        className={`fixed top-0 right-0 left-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${sidebarWidth}`}
      >
        <DashboardNavbar isCollapsed={isCollapsed} />
      </div>

      <div className="flex">
        {/* 2. The Sidebar */}
        <DashboardSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* 3. Main Content Area */}
        <main
          className={`flex-1 ${contentMargin} p-4 md:p-6 pt-[80px] w-full transition-all duration-300 ease-in-out`}
        >
          <div className="mx-auto max-w-[1600px]">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
