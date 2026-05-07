"use client";

import React from "react";
import { Camera, ShieldCheck, Calendar, ArrowRight } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex flex-col w-full pb-10">
      {/* ======================================= */}
      {/* Page Header */}
      {/* ======================================= */}
      <header className="mb-8">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">
          User Profile
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage your personal information and security settings.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* ======================================= */}
        {/* Left Column: Profile & Security */}
        {/* ======================================= */}
        <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
          {/* Profile Details Section */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="relative group shrink-0">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-md">
                  <img
                    className="w-full h-full object-cover"
                    alt="User profile"
                    src="https://avatar.iran.liara.run/public/boy?username=Alexander"
                  />
                </div>
                <button className="absolute bottom-1 right-1 bg-[#003d9b] text-white p-2.5 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
                  <Camera size={16} />
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 focus:border-[#003d9b]/50 transition-all"
                    type="text"
                    defaultValue="Alexander Wright"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                    Job Title
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 focus:border-[#003d9b]/50 transition-all"
                    type="text"
                    defaultValue="Senior Technical Architect"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 focus:border-[#003d9b]/50 transition-all"
                    type="email"
                    defaultValue="alexander.wright@architect.pro"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-[#003d9b] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md shadow-blue-200 hover:bg-blue-800 transition-all">
                Update Profile
              </button>
            </div>
          </section>

          {/* Bottom Grid for Extra Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Password Security Card */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#003d9b]">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Account Security
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                    New Password
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 focus:border-[#003d9b]/50"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 focus:border-[#003d9b]/50"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <button className="w-full mt-2 py-2.5 bg-slate-50 text-slate-600 border border-slate-200 font-bold rounded-xl hover:bg-slate-100 hover:text-[#003d9b] transition-all text-sm">
                  Change Password
                </button>
              </div>
            </section>

            {/* Activity/Stats Glass Card */}
            <section className="bg-[#f8faff] rounded-2xl p-6 border border-blue-100 relative overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#003d9b]/10 rounded-full blur-3xl"></div>

              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">
                Workspace Presence
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-slate-800">
                      Global Ranking
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Top 2% of contributors
                    </div>
                  </div>
                  <div className="text-2xl font-black text-[#003d9b]">#12</div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#003d9b] h-full w-[88%] rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-xl border border-blue-50 shadow-sm">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Logins
                    </div>
                    <div className="text-lg font-bold text-slate-800">142</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-50 shadow-sm">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Team Collabs
                    </div>
                    <div className="text-lg font-bold text-slate-800">28</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ======================================= */}
        {/* Right Column: Tasks & Status */}
        {/* ======================================= */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Profile Completeness Card */}
          <section className="bg-[#003d9b] rounded-2xl p-6 text-white shadow-md shadow-blue-200">
            <h3 className="font-bold text-lg mb-1">Profile Strength</h3>
            <p className="text-xs text-blue-200 mb-5">
              Complete your bio to unlock expert badges.
            </p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 uppercase rounded-lg bg-white/20">
                  85% Complete
                </span>
              </div>
              <div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-white/20">
                <div
                  className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-white rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </section>

          {/* My Tasks Summary */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                My Tasks
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-[#003d9b] rounded-lg">
                4 Active
              </span>
            </div>

            <div className="space-y-3">
              {/* Task Item 1 */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                    ARCH-102
                  </span>
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                </div>
                <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#003d9b] transition-colors">
                  Design System Audit
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-500">
                    Due Tomorrow
                  </span>
                </div>
              </div>

              {/* Task Item 2 */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                    ARCH-108
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#003d9b] transition-colors">
                  Sprint Planning
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-500">
                    Friday, Oct 24
                  </span>
                </div>
              </div>

              {/* Task Item 3 */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                    ARCH-214
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#003d9b] transition-colors">
                  User Interview Sync
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-500">
                    Oct 28
                  </span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-bold text-slate-500 hover:text-[#003d9b] hover:bg-blue-50 rounded-xl transition-all">
                <span>View All Tasks</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
