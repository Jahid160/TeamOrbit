"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  ShieldCheck,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ShieldUser,
  User,
  FolderKanbanIcon,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const DashboardSidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role?.toLowerCase();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const adminNav = [
    { name: "Users", href: "/dashboard/users", icon: Users },
    {
      name: "User Management",
      href: "/dashboard/user-management",
      icon: User,
    },
    { name: "TeamLM", href: "/dashboard/teamLeaders", icon: ShieldUser },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Tasks", href: "/dashboard/tasks", icon: ShieldCheck },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  ];

  const teamLeaderNav = [
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Tasks", href: "/dashboard/tasks", icon: ShieldCheck },
  ];

  const userNav = [
    { 
      name: "My Tasks", 
      href: "/dashboard/my-tasks", 
      icon: ShieldCheck 
    },
    { 
      name: "Team Projects", 
      href: "/dashboard/projects", 
      icon: FolderKanbanIcon 
    },
    { 
      name: "My Team", 
      href: "/dashboard/team-list", 
      icon: Users 
    },
    { 
      name: "Performance", 
      href: "/dashboard/my-stats", 
      icon: BarChart3 
    },
  ];

  const navItems =
    role === "admin"
      ? adminNav
      : role === "teamleader"
        ? teamLeaderNav
        : userNav;

  const getLinkStyle = (href: string) => {
    const isActive = pathname === href;
    return `flex items-center gap-3 py-3 rounded-lg transition-all duration-200 ${
      isCollapsed ? "justify-center px-0 w-12 mx-auto" : "px-4 w-full"
    } ${
      isActive
        ? "bg-[#003d9b] text-white shadow-lg shadow-blue-200"
        : "text-slate-500 hover:bg-white hover:text-[#003d9b]"
    }`;
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-[#003d9b] text-white rounded-lg"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={`fixed left-0 top-0 h-screen bg-[#f1f3ff] z-50 flex flex-col transition-all duration-300 border-r border-blue-100 
        ${isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"} 
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 z-[100] bg-white border border-blue-100 rounded-full p-1 text-[#003d9b] hover:bg-[#003d9b] hover:text-white shadow-md transition-all"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        <div
          className={`flex flex-col h-full ${isCollapsed ? "px-2 py-6" : "p-6"}`}
        >
          {/* Logo */}
          <div
            className={`mb-10 flex flex-col items-center ${isCollapsed ? "" : "items-start"}`}
          >
            <h1 className="text-xl font-black text-[#003d9b] tracking-tighter">
              {isCollapsed ? "T" : "TeamOrbit"}
            </h1>
            {!isCollapsed && (
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                Precision
              </p>
            )}
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 flex-1 items-center lg:items-stretch">
            <NextLink
              href="/dashboard"
              className={getLinkStyle("/dashboard")}
              title="Dashboard"
            >
              <LayoutDashboard size={22} />
              {!isCollapsed && (
                <span className="font-bold text-sm">Dashboard</span>
              )}
            </NextLink>

            <div
              className={`my-4 border-t border-blue-200/50 pt-4 flex flex-col gap-2 ${isCollapsed ? "w-full items-center" : ""}`}
            >
              {navItems.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={getLinkStyle(item.href)}
                  title={item.name}
                >
                  <item.icon size={22} />
                  {!isCollapsed && (
                    <span className="font-bold text-sm">{item.name}</span>
                  )}
                </NextLink>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div
            className={`mt-auto flex flex-col gap-2 border-t border-blue-200/50 pt-4 ${isCollapsed ? "items-center" : ""}`}
          >
            <NextLink
              href="/dashboard/settings"
              className={getLinkStyle("/dashboard/settings")}
              title="Settings"
            >
              <Settings size={22} />
              {!isCollapsed && (
                <span className="text-sm font-bold">Settings</span>
              )}
            </NextLink>

            <button
              className={`flex items-center gap-3 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-all ${isCollapsed ? "justify-center w-12" : "px-4 w-full"}`}
            >
              <LogOut size={22} />
              {!isCollapsed && (
                <span className="text-sm font-bold">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
