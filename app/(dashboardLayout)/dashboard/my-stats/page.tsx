"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Trophy, 
  Zap, 
  Target, 
  Calendar,
  ArrowUpRight,
  Award
} from 'lucide-react';

const MyStatus = () => {
  const barData = [
    { name: 'Mon', completed: 4 },
    { name: 'Tue', completed: 7 },
    { name: 'Wed', completed: 5 },
    { name: 'Thu', completed: 8 },
    { name: 'Fri', completed: 6 },
  ];

  const pieData = [
    { name: 'On Time', value: 85 },
    { name: 'Delayed', value: 15 },
  ];

  const COLORS = ['#003d9b', '#fbbf24'];

  return (
    <div className="min-h-screen bg-[#f8faff] p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#003d9b] tracking-tight">My Performance</h1>
        <p className="text-sm text-slate-500 font-medium">Tracking your growth and task efficiency.</p>
      </div>

      {/* top cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-[#003d9b] p-5 rounded-[2rem] text-white flex items-center justify-between shadow-xl shadow-blue-200">
          <div>
            <p className="text-[10px] font-black uppercase opacity-70 tracking-widest">Global Rank</p>
            <h2 className="text-2xl font-black mt-0.5">#12</h2>
          </div>
          <div className="bg-white/20 p-3 rounded-xl">
            <Trophy size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-[2rem] border border-blue-100 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Efficiency Score</p>
            <h2 className="text-2xl font-black text-slate-800 mt-0.5">94%</h2>
          </div>
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
            <Zap size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-[2rem] border border-blue-100 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Streak</p>
            <h2 className="text-2xl font-black text-slate-800 mt-0.5">5 Days</h2>
          </div>
          <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
            <Award size={24} />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-blue-50 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-slate-800">Weekly Activity</h3>
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
              <Calendar size={12} /> Last 5 Days
            </span>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f3ff" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} dy={10} />
                <Tooltip cursor={{fill: '#f8faff'}} contentStyle={{borderRadius: '12px', border: 'none', fontSize: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="completed" fill="#003d9b" radius={[6, 6, 6, 6]} barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-blue-50 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-black text-slate-800 w-full mb-2 text-left">Deadline Adherence</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <span className="text-2xl font-black text-[#003d9b]">85%</span>
               <span className="text-[9px] font-black text-slate-400 uppercase">On Time</span>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#003d9b]"></div>
                <span className="text-[11px] font-bold text-slate-600">On Time</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <span className="text-[11px] font-bold text-slate-600">Delayed</span>
             </div>
          </div>
        </div>

      </div>

      {/* achievement section */}
      <div className="mt-6 bg-white p-6 rounded-[2rem] border border-blue-50 shadow-sm">
        <h3 className="text-lg font-black text-slate-800 mb-4">Recent Achievements</h3>
        <div className="flex flex-wrap gap-3">
          {['Fastest Resolver', 'Team Player', 'Sprint King'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#f1f3ff] px-4 py-2 rounded-xl border border-blue-100">
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <Target size={16} className="text-[#003d9b]" />
              </div>
              <span className="text-[11px] font-black text-[#003d9b] uppercase tracking-tight">{badge}</span>
              <ArrowUpRight size={14} className="text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStatus;