"use client";

import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  MoreHorizontal, 
  ShieldCheck, 
  User, 
  ExternalLink
} from 'lucide-react';

const TeamList = () => {
  const members = [
    { 
      id: 1, 
      name: "Tangila Islam", 
      role: "Team Leader", 
      email: "tangila@teamorbit.com", 
      status: "Online", 
      tasks: 5,
      avatar: "" 
    },
    { 
      id: 2, 
      name: "Abir Hossain", 
      role: "Full Stack Developer", 
      email: "abir@teamorbit.com", 
      status: "Offline", 
      tasks: 8,
      avatar: "" 
    },
    { 
      id: 3, 
      name: "Samiul Rahim", 
      role: "Frontend Developer", 
      email: "samiul@teamorbit.com", 
      status: "Online", 
      tasks: 3,
      avatar: "" 
    },
    { 
      id: 4, 
      name: "Nabila Ahmed", 
      role: "UI/UX Designer", 
      email: "nabila@teamorbit.com", 
      status: "Busy", 
      tasks: 4,
      avatar: "" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] p-4 md:p-6">
    
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#003d9b] tracking-tight">Team Members</h1>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Meet the experts of <span className="text-[#003d9b] font-bold">Quantum Coders</span>.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white text-[#003d9b] border border-blue-100 px-4 py-2 rounded-xl font-bold text-xs shadow-sm hover:bg-blue-50 transition-all w-fit">
          <ExternalLink size={16} />
          Export Directory
        </button>
      </div>

   
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
         <div className="bg-white px-4 py-2 rounded-xl border border-blue-50 flex items-center gap-2 shadow-sm min-w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-bold text-slate-600">02 Online</span>
         </div>
         <div className="bg-white px-4 py-2 rounded-xl border border-blue-50 flex items-center gap-2 shadow-sm min-w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span className="text-[11px] font-bold text-slate-600">01 Busy</span>
         </div>
      </div>

      {/* members  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {members.map((member) => (
          <div key={member.id} className="bg-white p-5 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
            
                <div className="w-14 h-14 rounded-2xl bg-[#f1f3ff] flex items-center justify-center text-[#003d9b] border border-blue-100 group-hover:scale-105 transition-transform">
                  <User size={28} strokeWidth={1.5} />
                </div>
                
                <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
                  member.status === 'Online' ? 'bg-emerald-500' : member.status === 'Busy' ? 'bg-amber-500' : 'bg-slate-300'
                }`}></div>
              </div>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 leading-tight">{member.name}</h3>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1 flex items-center gap-1">
                {member.role === 'Team Leader' && <ShieldCheck size={12} />}
                {member.role}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-slate-400">
               <Mail size={14} />
               <span className="text-xs font-medium truncate">{member.email}</span>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-300 uppercase">Active Tasks</span>
                <span className="text-xs font-bold text-slate-700">{member.tasks} assigned</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 rounded-lg bg-[#f1f3ff] text-[#003d9b] hover:bg-[#003d9b] hover:text-white transition-all">
                  <MessageSquare size={16} />
                </button>
                <button className="p-2.5 rounded-lg bg-[#f1f3ff] text-[#003d9b] hover:bg-[#003d9b] hover:text-white transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;