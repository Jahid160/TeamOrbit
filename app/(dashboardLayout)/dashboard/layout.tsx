"use client";

import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";

import React, { useState, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. The Top Navbar - only shift on desktop when sidebar is present */}
      <nav
        className={`fixed top-0 left-0 right-0 h-[80px] z-40 bg-white border-b border-gray-200 transition-all duration-300 ${
          isCollapsed ? "lg:ml-[80px]" : "lg:ml-[240px]"
        }`}
      >
        <DashboardNavbar isCollapsed={isCollapsed} />
      </nav>

      {/* 2. The Sidebar */}
      <DashboardSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* 3. Main Content Area - only add margin on desktop */}
      <main
        className={`min-h-screen bg-gray-50 transition-all duration-300 ease-in-out pt-[80px] ${
          isCollapsed ? "lg:ml-[80px]" : "lg:ml-[240px]"
        }`}
      >
        <div className="p-4 md:p-6 mx-auto max-w-[1600px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
