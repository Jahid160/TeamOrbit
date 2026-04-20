"use client";

import React from "react";
import {
  ArrowLeft,
  Sparkles,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  FileText,
  Image as ImageIcon,
  Trash2,
  UploadCloud,
  ChevronDown,
  Calendar,
  Bell,
  Clock,
  ArrowRightLeft,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";

const TaskDetails = () => {
  return (
    <div className="flex flex-col w-full pb-10">
      {/* ======================================= */}
      {/* Top Page Header */}
      {/* ======================================= */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-4 mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#003d9b] transition-all flex items-center justify-center shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <div>
            <span className="text-xs tracking-wider uppercase text-slate-500 font-bold">
              Project: Sky-Rise Phase 1
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Edit Task
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all rounded-xl">
            Discard
          </button>
          <button className="px-6 py-2.5 text-sm font-bold text-white bg-[#003d9b] hover:bg-blue-800 rounded-xl shadow-md shadow-blue-200 transition-all flex items-center gap-2">
            Save Changes
          </button>
        </div>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* ======================================= */}
        {/* Main Form Canvas (Left Side) */}
        {/* ======================================= */}
        <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
          {/* Core Identity Card */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                  Task Title
                </label>
                <input
                  className="w-full text-xl md:text-2xl font-bold border-none focus:ring-0 p-0 text-slate-800 placeholder:text-slate-300 bg-transparent outline-none"
                  placeholder="Enter task title..."
                  type="text"
                  defaultValue="Architectural Review: Structural Integrity"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs tracking-widest uppercase font-bold text-slate-400">
                    Description
                  </label>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#003d9b] rounded-full text-xs font-bold hover:bg-blue-100 transition-colors">
                    <Sparkles size={14} />
                    AI Summarize Brief
                  </button>
                </div>

                {/* Rich Text Editor Mockup */}
                <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#003d9b]/50 focus-within:ring-4 focus-within:ring-[#003d9b]/10 transition-all">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex gap-4">
                    <button className="text-slate-400 hover:text-[#003d9b] transition-colors p-1">
                      <Bold size={16} />
                    </button>
                    <button className="text-slate-400 hover:text-[#003d9b] transition-colors p-1">
                      <Italic size={16} />
                    </button>
                    <button className="text-slate-400 hover:text-[#003d9b] transition-colors p-1">
                      <List size={16} />
                    </button>
                    <button className="text-slate-400 hover:text-[#003d9b] transition-colors p-1">
                      <LinkIcon size={16} />
                    </button>
                  </div>
                  <textarea
                    className="w-full border-none outline-none focus:ring-0 text-slate-600 leading-relaxed p-4 bg-white resize-none"
                    rows={8}
                    defaultValue={`Complete a comprehensive review of the load-bearing calculations for the central atrium. Ensure all feedback from the environmental impact study is incorporated into the final structural report.\n\nKey areas of focus include:\n- Seismic resilience ratings\n- Load distribution on the secondary arches\n- Material fatigue projections for the steel framing`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* File Management System */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400 mb-4">
              Supporting Documents
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* PDF File Card */}
              <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-slate-200">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-rose-500 shadow-sm">
                  <FileText size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-slate-800">
                    structure_v2.pdf
                  </p>
                  <p className="text-xs text-slate-500">
                    4.2 MB • Added 2h ago
                  </p>
                </div>
                <button className="text-slate-400 opacity-0 group-hover:opacity-100 hover:text-rose-500 transition-all p-2">
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Image File Card */}
              <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-slate-200">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm">
                  <ImageIcon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-slate-800">
                    atrium_render.png
                  </p>
                  <p className="text-xs text-slate-500">
                    12.8 MB • Added 2h ago
                  </p>
                </div>
                <button className="text-slate-400 opacity-0 group-hover:opacity-100 hover:text-rose-500 transition-all p-2">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-[#f1f3ff] hover:border-[#003d9b]/50 transition-all cursor-pointer group bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#003d9b] group-hover:scale-110 transition-transform">
                <UploadCloud size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-800">
                  Click or drag to upload
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  PDF, JPEG, or PNG (Max 50MB)
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ======================================= */}
        {/* Contextual Sidebar Controls (Right Side) */}
        {/* ======================================= */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Status & Priority Panel */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400">
              Task Logistics
            </h3>

            <div className="space-y-5">
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Current Status
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20"
                    defaultValue="In Progress"
                  >
                    <option value="Draft">Draft</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Awaiting Review">Awaiting Review</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-3.5 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Priority Level
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-xs font-bold rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all border border-slate-200">
                    Low
                  </button>
                  <button className="flex-1 py-2 text-xs font-bold rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all border border-slate-200">
                    Medium
                  </button>
                  <button className="flex-1 py-2 text-xs font-bold rounded-xl bg-rose-50 text-rose-600 border border-rose-200 ring-2 ring-rose-100">
                    High
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Deadline
                </label>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl focus-within:ring-2 focus-within:ring-[#003d9b]/20">
                  <Calendar size={18} className="text-slate-400" />
                  <input
                    className="w-full border-none bg-transparent outline-none p-0 text-sm font-semibold text-slate-700"
                    type="date"
                    defaultValue="2024-11-24"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Smart Reminders */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400">
                Smart Reminders
              </h3>
              <Bell size={16} className="text-[#003d9b]" />
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    Initial Alert
                  </span>
                  {/* Toggle Switch */}
                  <div className="w-8 h-4 bg-[#003d9b] rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="flex-1 text-xs border border-slate-200 bg-white rounded-lg p-2 focus:outline-none focus:border-[#003d9b]/50 text-slate-600">
                    <option>1 Day Before</option>
                    <option>2 Hours Before</option>
                    <option>At Deadline</option>
                  </select>
                  <input
                    className="text-xs border border-slate-200 bg-white rounded-lg p-2 focus:outline-none focus:border-[#003d9b]/50 text-slate-600"
                    type="time"
                    defaultValue="09:00"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#f1f3ff] rounded-xl border border-blue-100 text-[#003d9b]">
                <Clock size={16} />
                <span className="text-xs font-semibold">
                  Snooze: 15m, 1h, Tomorrow
                </span>
              </div>
            </div>
          </section>

          {/* Assignee Widget */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400 mb-4">
              Assignee
            </h3>
            <div className="flex items-center gap-4">
              <img
                alt="Marcus V."
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-[#003d9b]/20"
                src="https://avatar.iran.liara.run/public/boy"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800 leading-tight">
                  Marcus Villanueva
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Lead Structural Engineer
                </p>
              </div>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-[#003d9b] transition-all">
                <ArrowRightLeft size={16} />
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* ======================================= */}
      {/* Collaborative Activity / Comments */}
      {/* ======================================= */}
      <div className="w-full mt-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400 mb-6">
            Task Activity & Comments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comment Thread */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#003d9b] font-bold text-xs shrink-0">
                  SL
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800 mb-1">
                    Sarah L.{" "}
                    <span className="font-normal text-slate-400 ml-2">
                      10m ago
                    </span>
                  </p>
                  <p className="text-sm text-slate-600">
                    I've uploaded the new seismic charts. Please verify against
                    the 2024 building codes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-transparent">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs shrink-0">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800 mb-1">
                    James D.{" "}
                    <span className="font-normal text-slate-400 ml-2">
                      1h ago
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    Changed priority to High
                  </p>
                </div>
              </div>
            </div>

            {/* Message Input Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-4">
              <textarea
                className="flex-1 w-full border-none outline-none focus:ring-0 text-sm text-slate-700 bg-transparent p-2 resize-none placeholder:text-slate-400"
                placeholder="Type a message or use @ to mention someone..."
                rows={3}
              ></textarea>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200/60">
                <div className="flex gap-1">
                  <button className="p-2 text-slate-400 hover:text-[#003d9b] hover:bg-white rounded-lg transition-all">
                    <Paperclip size={18} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-[#003d9b] hover:bg-white rounded-lg transition-all">
                    <Smile size={18} />
                  </button>
                </div>
                <button className="bg-[#003d9b] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md shadow-blue-200 hover:bg-blue-800 transition-all flex items-center gap-2">
                  <span>Send</span>
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
