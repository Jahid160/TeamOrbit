"use client";

import React, { useState } from "react";
import { Search, Bell, Sparkles, User } from "lucide-react";
import { useSession } from "next-auth/react";

const DashboardNavbar = () => {
  const { data: session } = useSession();
  const [showNotif, setShowNotif] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-xl dark:bg-slate-900/80 sticky top-0 z-40 shadow-[0_10px_30px_-10px_rgba(0,61,155,0.1)] border-b border-blue-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
        {/* Left Side: Search */}
        <div className="flex items-center gap-8">
          <div className="relative flex items-center group">
            <Search
              className="absolute left-3 text-slate-400 group-focus-within:text-blue-600 transition-colors"
              size={18}
            />
            <input
              className="bg-[#f1f3ff] border-none rounded-full py-2.5 pl-10 pr-4 w-64 lg:w-96 text-sm focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              placeholder="Search tasks, projects..."
              type="text"
            />
          </div>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Notification Button */}
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="p-2.5 rounded-full hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-all relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <button className="hidden sm:flex p-2.5 rounded-full hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-all">
            <Sparkles size={20} />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
            <div className="hidden text-right md:block">
              <p className="text-sm font-bold text-slate-800 leading-none capitalize">
                {session?.user?.name || "Member"}
              </p>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter mt-1">
                {session?.user?.role || "Pet Lover"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm">
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User size={20} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
