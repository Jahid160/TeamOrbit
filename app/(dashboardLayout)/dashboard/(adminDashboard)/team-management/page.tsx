// app/team/page.tsx (Server Component)
import React from "react";

import { UserPlus } from "lucide-react";
import TeamTableClient from "@/components/Dashboard/AdminDashboard/TeamManagementClient/TeamTableClient";

export default function teamManagementPage() {
  return (
    <div className="flex flex-col w-full pb-12">
      {/* Header Section - Static */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#003d9b] uppercase">
            Workspace / Core Team
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Team Management
          </h1>
          <p className="text-slate-500 max-w-lg text-sm md:text-base leading-relaxed">
            Administer user permissions, roles, and access across your
            architectural projects.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#003d9b] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-100 hover:bg-blue-800 transition-all active:scale-95 self-start md:self-auto">
          <UserPlus size={18} />
          <span>Add Team Member</span>
        </button>
      </header>

      {/* Stats Cards - Static */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Total Members
          </div>
          <div className="text-3xl font-black text-slate-800 mt-1">24</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Admins
          </div>
          <div className="text-3xl font-black text-slate-800 mt-1">4</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Active Now
          </div>
          <div className="text-3xl font-black text-[#003d9b] mt-1">18</div>
        </div>
        <div className="bg-[#003d9b] p-6 rounded-2xl shadow-md text-white">
          <div className="text-[10px] font-bold tracking-widest opacity-70 uppercase">
            Capacity
          </div>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-3xl font-black">82%</span>
            <div className="w-full bg-white/20 h-1.5 rounded-full mb-2">
              <div className="bg-white h-full w-[82%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Component for Interactive Table & Filters */}
      <TeamTableClient />
    </div>
  );
}
