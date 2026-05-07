// app/team/TeamTableClient.tsx (Client Component)
"use client";

import React, { useState } from "react";
import {
  Search,
  ShieldCheck,
  User,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TeamTableClient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // এই ডাটাটি আপনি props হিসেবেও Server Component থেকে পাঠাতে পারেন
  const members = [
    {
      id: 1,
      name: "Julian Vasseur",
      email: "julian.v@architect.design",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      email: "elena.rod@architect.design",
      role: "Member",
      status: "Active",
    },
  ];

  const handleDelete = (id: number) => {
    console.log("Deleting member with ID:", id);
  };

  return (
    <section className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
      {/* Table Actions & Filters */}
      <div className="p-5 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl w-full md:w-80 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Search size={18} className="text-slate-400" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 text-slate-700"
            placeholder="Search members..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          <button className="px-4 py-1.5 rounded-lg bg-[#003d9b] text-white text-xs font-bold whitespace-nowrap">
            All Roles
          </button>
          <button className="px-4 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-200 text-slate-600 text-xs font-semibold whitespace-nowrap transition-colors">
            Admin
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Name & Email
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Role
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {members.map((member) => (
              <tr
                key={member.id}
                className="group hover:bg-slate-50/80 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-white shadow-sm flex items-center justify-center font-bold text-[#003d9b]">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">
                        {member.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {member.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${member.role === "Admin" ? "bg-orange-50 text-orange-700 border-orange-100" : "bg-blue-50 text-blue-700 border-blue-100"}`}
                  >
                    {member.role === "Admin" ? (
                      <ShieldCheck size={14} />
                    ) : (
                      <User size={14} />
                    )}
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-semibold text-slate-700">
                      {member.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 rounded-lg text-slate-400 hover:text-[#003d9b] hover:bg-blue-50 transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="p-2 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Simplified Interaction */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 bg-slate-50/30">
        <span className="text-xs text-slate-500 font-medium">
          Showing 1-10 of 24 members
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white disabled:opacity-30">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#003d9b] text-white text-xs font-bold">
            1
          </button>
          <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamTableClient;
