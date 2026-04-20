// app/dashboard/DashboardWrapper.tsx (Client Component)
"use client";

import React, { useState, ReactNode } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";

interface WrapperProps {
  children: ReactNode;
  role: string | undefined;
}

const DashboardWrapper: React.FC<WrapperProps> = ({ children, role }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* ১. The Sidebar (সার্ভার থেকে আসা রোল এখানে পাস করা হলো) */}
      <DashboardSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        role={role}
      />

      {/* ২. The Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 h-[80px] z-40 bg-white border-b border-gray-200 transition-all duration-300 ${
          isCollapsed ? "lg:ml-[80px]" : "lg:ml-[240px]"
        }`}
      >
        <DashboardNavbar isCollapsed={isCollapsed} />
      </nav>

      {/* ৩. Main Content Area */}
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

export default DashboardWrapper;
