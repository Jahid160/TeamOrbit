"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';

const MyTasks = () => {
  const [filter, setFilter] = useState('All');

 
  const tasks = [
    { 
      id: "T-1024", 
      title: "Design System Implementation", 
      project: "TeamOrbit",
      priority: "High", 
      deadline: "Oct 25, 2026", 
      status: "In Progress",
      description: "Create a consistent set of UI components using Tailwind CSS."
    },
    { 
      id: "T-1028", 
      title: "API Authentication Bug", 
      project: "DashChat",
      priority: "Urgent", 
      deadline: "Today", 
      status: "To Do",
      description: "Fix the JWT token expiration issue in the middleware."
    },
    { 
      id: "T-1030", 
      title: "User Profile Mobile View", 
      project: "TeamOrbit",
      priority: "Medium", 
      deadline: "Oct 30, 2026", 
      status: "Review",
      description: "Ensure the profile page is fully responsive on small screens."
    }
  ];

  const getPriorityStyle = (p: string) => {
    switch (p) {
      case 'Urgent': return 'bg-red-50 text-red-600 border-red-100';
      case 'High': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] p-4 md:p-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#003d9b] tracking-tight">My Tasks</h1>
          <p className="text-sm text-slate-500 font-medium">Manage and update your daily assignments.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="pl-9 pr-3 py-2 bg-white border border-blue-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#003d9b]/10 w-full md:w-56 transition-all"
            />
          </div>
          <button className="p-2 bg-white border border-blue-100 rounded-xl text-slate-600 hover:bg-blue-50 transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {['All', 'To Do', 'In Progress', 'Review', 'Completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all whitespace-nowrap ${
              filter === tab 
              ? 'bg-[#003d9b] text-white shadow-md shadow-blue-200' 
              : 'bg-white text-slate-500 border border-blue-50 hover:border-blue-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* tasks List */}
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="group bg-white p-5 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {/* status Icon */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`p-2.5 rounded-xl ${task.status === 'In Progress' ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400'}`}>
                  {task.status === 'In Progress' ? <Clock size={22} /> : <CheckCircle2 size={22} />}
                </div>
                <div className="w-px h-full bg-slate-50 mt-2"></div>
              </div>

              {/* task Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{task.project}</span>
                    <h3 className="text-lg font-black text-slate-800 group-hover:text-[#003d9b] transition-colors mt-0.5">
                      {task.title}
                    </h3>
                  </div>
                  <button className="text-slate-300 hover:text-slate-600 p-1">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-1">
                  {task.description}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md border text-[9px] font-black uppercase tracking-tighter ${getPriorityStyle(task.priority)}`}>
                    <AlertCircle size={10} />
                    {task.priority}
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold">
                    <Calendar size={12} className="text-blue-400" />
                    Due: {task.deadline}
                  </div>

                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-tight">Status:</span>
                    <select className="bg-slate-50 border-none text-[10px] font-bold text-[#003d9b] rounded-md px-2 py-0.5 focus:ring-0 cursor-pointer hover:bg-blue-50 transition-colors">
                      <option>To Do</option>
                      <option defaultChecked>In Progress</option>
                      <option>Review</option>
                      <option>Done</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* action button */}
              <div className="flex items-center justify-end border-t md:border-t-0 md:border-l border-slate-50 pt-4 md:pt-0 md:pl-5">
                <button className="flex items-center gap-1.5 bg-[#f1f3ff] text-[#003d9b] px-4 py-2 rounded-lg font-bold text-[10px] hover:bg-[#003d9b] hover:text-white transition-all group/btn">
                  Details
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;