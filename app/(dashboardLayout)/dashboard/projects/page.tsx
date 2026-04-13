"use client";

import React from 'react';
import { 
  FolderKanban, 
  Layers, 
  Clock, 
  MoreVertical,
  ArrowUpRight,
  Users
} from 'lucide-react';

const TeamProjects = () => {
  
  const projects = [
    {
      id: 1,
      name: "TeamOrbit SaaS",
      category: "Web Application",
      progress: 75,
      totalTasks: 48,
      completedTasks: 36,
      deadline: "Nov 15, 2026",
      status: "Active",
      members: ["T", "A", "S", "N"]
    },
    {
      id: 2,
      name: "DashChat Mobile",
      category: "Mobile App",
      progress: 40,
      totalTasks: 25,
      completedTasks: 10,
      deadline: "Dec 05, 2026",
      status: "In Development",
      members: ["T", "S", "M"]
    },
    {
      id: 3,
      name: "Quantum UI Kit",
      category: "Design System",
      progress: 100,
      totalTasks: 15,
      completedTasks: 15,
      deadline: "Finished",
      status: "Completed",
      members: ["T", "N"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] p-4 md:p-6">
   
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#003d9b] tracking-tight">Team Projects</h1>
          <p className="text-sm text-slate-500 font-medium">Overview of all ongoing and completed projects.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#003d9b] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-blue-200 hover:bg-[#002e75] transition-all w-fit">
          <Layers size={16} />
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-3 rounded-xl text-[#003d9b] group-hover:bg-[#003d9b] group-hover:text-white transition-all">
                  <FolderKanban size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 tracking-tight">{project.name}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-600">
                <MoreVertical size={18} />
              </button>
            </div>

     
            <div className="mb-6">
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-xs font-black text-slate-700">{project.progress}% Completed</span>
                <span className="text-[10px] font-bold text-slate-400">{project.completedTasks}/{project.totalTasks} Tasks</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    project.progress === 100 ? 'bg-emerald-500' : 'bg-[#003d9b]'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-50">
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-300 uppercase flex items-center gap-1">
                    <Clock size={10} /> Deadline
                  </span>
                  <span className="text-xs font-bold text-slate-600">{project.deadline}</span>
                </div>
                
        
                <div className="flex -space-x-1.5">
                  {project.members.map((m, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[9px] font-black text-[#003d9b]">
                      {m}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-400">
                    +
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-1.5 text-[#003d9b] font-black text-[10px] uppercase tracking-tight hover:gap-2 transition-all">
                Open Project <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* add new Project Card */}
        <div className="border-2 border-dashed border-blue-100 rounded-[2rem] flex flex-col items-center justify-center p-6 hover:bg-blue-50/30 transition-all cursor-pointer group min-h-[180px]">
           <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-200 group-hover:text-[#003d9b] shadow-sm transition-all mb-3">
              <Users size={24} />
           </div>
           <p className="text-xs text-slate-400 font-bold">Waiting for new assignments...</p>
        </div>
      </div>
    </div>
  );
};

export default TeamProjects;