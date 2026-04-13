import React from "react";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
  BrainCircuit,
  ArrowUpRight,
  MessageSquare,
  Calendar,
  MoreHorizontal,
  CheckCheck,
  Plus,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className=" mt-10 p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* 1. Hero Stats: Bento Grid Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Tasks */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-blue-50 text-[#003d9b]">
              <BarChart3 size={24} />
            </div>
            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">
              Overview
            </span>
          </div>
          <p className="text-4xl font-black text-slate-800 tracking-tight">
            142
          </p>
          <p className="text-sm text-slate-500 font-bold mt-1 tracking-wide">
            Total Tasks
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-green-500/5 transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-green-50 text-green-600">
              <CheckCircle2 size={24} />
            </div>
            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">
              Progress
            </span>
          </div>
          <p className="text-4xl font-black text-slate-800 tracking-tight">
            98
          </p>
          <p className="text-sm text-slate-500 font-bold mt-1 tracking-wide">
            Completed
          </p>
        </div>

        {/* Active */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-amber-500/5 transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
              <Clock size={24} />
            </div>
            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">
              Active
            </span>
          </div>
          <p className="text-4xl font-black text-slate-800 tracking-tight">
            32
          </p>
          <p className="text-sm text-slate-500 font-bold mt-1 tracking-wide">
            Pending
          </p>
        </div>

        {/* Urgent */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-red-500/5 transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-red-50 text-red-600">
              <AlertCircle size={24} />
            </div>
            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">
              Urgent
            </span>
          </div>
          <p className="text-4xl font-black text-slate-800 tracking-tight">
            12
          </p>
          <p className="text-sm text-slate-500 font-bold mt-1 tracking-wide">
            Overdue
          </p>
        </div>
      </section>

      {/* 2. AI Insights & Updates */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* AI Insights */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles
              className="text-[#003d9b]"
              size={20}
              fill="currentColor"
            />
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
              AI Precision Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-[#f8faff] p-8 rounded-[2rem] border border-blue-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="text-[#003d9b]" size={22} />
                <h3 className="font-black text-slate-800 text-sm uppercase">
                  Auto Suggestion
                </h3>
              </div>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">
                Based on your recent patterns, you might need to initiate the
                "Final Render Review" for the Riverside Project.
              </p>
              <button className="text-[10px] font-black text-[#003d9b] hover:tracking-widest transition-all flex items-center gap-2 uppercase">
                Create Task <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-white to-[#f8faff] p-8 rounded-[2rem] border border-blue-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#003d9b]">
                <Clock size={22} />
                <h3 className="font-black text-slate-800 text-sm uppercase">
                  Deadline Prediction
                </h3>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      className="text-blue-50"
                      cx="28"
                      cy="28"
                      r="24"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    <circle
                      className="text-[#003d9b]"
                      cx="28"
                      cy="28"
                      r="24"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeDasharray="150"
                      strokeDashoffset="45"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-black">85%</span>
                </div>
                <p className="text-[11px] text-slate-500 font-bold leading-tight uppercase">
                  Probability of hitting "Structural Phase" deadline is high.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates Feed */}
        <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
              Recent Updates
            </h2>
            <span className="text-[10px] font-black text-[#003d9b] cursor-pointer hover:underline uppercase">
              View All
            </span>
          </div>
          <div className="space-y-8">
            {[
              {
                color: "bg-[#003d9b]",
                user: "Sarah Jenkins",
                action: "updated Wireframes V2",
                time: "2 MIN AGO",
              },
              {
                color: "bg-green-500",
                user: "Project Phase",
                action: "marked as Completed",
                time: "1 HOUR AGO",
              },
              {
                color: "bg-amber-500",
                user: "New Comment",
                action: "on Architecture Audit",
                time: "3 HOURS AGO",
              },
            ].map((update, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className={`w-2 h-2 rounded-full ${update.color} mt-1.5 flex-shrink-0 shadow-lg shadow-blue-200`}
                />
                <div>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    {update.user}{" "}
                    <span className="font-medium text-slate-400">
                      {update.action}
                    </span>
                  </p>
                  <p className="text-[9px] text-slate-300 font-black mt-1 uppercase tracking-tighter">
                    {update.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Task Board Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">
              Active Tasks
            </h2>
            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">
              Precision tracking
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200/50">
              <button className="px-5 py-1.5 rounded-full text-[10px] font-black bg-white shadow-sm uppercase tracking-widest text-[#003d9b]">
                Board
              </button>
              <button className="px-5 py-1.5 rounded-full text-[10px] font-black text-slate-400 hover:text-slate-600 transition-all uppercase tracking-widest">
                List
              </button>
            </div>
          </div>
        </div>

        {/* Board Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column: To Do */}
          <div className="space-y-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">
                  To Do
                </span>
                <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] font-black">
                  04
                </span>
              </div>
              <MoreHorizontal size={16} className="text-slate-300" />
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-[#003d9b] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Design
                </span>
                <span className="text-[9px] font-black text-slate-200">
                  ARC-402
                </span>
              </div>
              <h4 className="font-bold text-slate-800 mb-6 group-hover:text-[#003d9b] transition-colors leading-tight">
                Client Onboarding Flow
              </h4>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-black text-[#003d9b]">
                    SJ
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-red-500 uppercase">
                  <Calendar size={12} /> Sep 12
                </div>
              </div>
            </div>
          </div>

          {/* Column: In Progress */}
          <div className="space-y-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#003d9b]">
                  In Progress
                </span>
                <span className="bg-[#003d9b]/10 text-[#003d9b] px-2 py-0.5 rounded text-[10px] font-black">
                  02
                </span>
              </div>
              <MoreHorizontal size={16} className="text-slate-300" />
            </div>

            <div className="bg-white p-6 rounded-[2rem] border-l-4 border-l-[#003d9b] border-y border-r border-slate-100 shadow-lg shadow-blue-500/5 hover:translate-y-[-4px] transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#003d9b] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Development
                </span>
                <span className="text-[9px] font-black text-slate-200">
                  ARC-410
                </span>
              </div>
              <h4 className="font-bold text-slate-800 mb-4 group-hover:text-[#003d9b] transition-colors leading-tight">
                Integration of API Services
              </h4>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mb-6">
                <div className="bg-[#003d9b] w-2/3 h-full rounded-full" />
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-[10px] font-black text-white">
                    ZH
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase">
                  <MessageSquare size={12} /> 08
                </div>
              </div>
            </div>
          </div>

          {/* Column: Done */}
          <div className="space-y-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-green-600">
                  Done
                </span>
                <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-black">
                  18
                </span>
              </div>
              <MoreHorizontal size={16} className="text-slate-300" />
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 opacity-60 hover:opacity-100 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-100 text-slate-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Research
                </span>
                <span className="text-[9px] font-black text-slate-200">
                  ARC-398
                </span>
              </div>
              <h4 className="font-bold text-slate-800 mb-6 line-through decoration-slate-300">
                User Persona Audit
              </h4>
              <div className="flex justify-end pt-4 border-t border-slate-50">
                <div className="p-1.5 rounded-full bg-green-50 text-green-600">
                  <CheckCheck size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10 z-[60]">
        <button className="flex items-center gap-3 px-8 py-5 bg-[#003d9b] text-white rounded-full font-black text-sm shadow-2xl shadow-blue-500/40 hover:translate-y-[-4px] active:scale-95 transition-all uppercase tracking-widest">
          <Plus size={20} strokeWidth={3} />
          Create Task
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
