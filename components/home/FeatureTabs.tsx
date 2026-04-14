"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    id: "ideate",
    label: "Ideate & Align",
    title: "A powerful ideation hub for any size team",
    description: "TeamOrbit enables you to capture ideas instantly and bring multiple teams into the same place for visual collaboration.",
    points: ["Dynamic Request Forms", "Visual Brainstorming", "AI-Powered Summaries"],
    image: "/ideation.png",
  },
  {
    id: "plan",
    label: "Plan & Resource",
    title: "Master your schedule and resources",
    description: "Prioritize tasks, manage team workloads, and set realistic deadlines with our integrated Gantt and Kanban views.",
    points: ["Interactive Gantt Charts", "Workload Management", "Smart Scheduling"],
    image: "/plan.png",
  },
  {
    id: "execute",
    label: "Execute & Collaborate",
    title: "Get work done, together",
    description: "Keep everyone on the same page with real-time updates, task dependencies, and seamless communication tools.",
    points: ["Real-time Task Updates", "Dependency Tracking", "Built-in Team Chat"],
    image: "/execute.png",
  },
  {
    id: "analyze",
    label: "Analyze & Report",
    title: "Data-driven insights for better results",
    description: "Track progress with automated reports and gain deep insights into your team's performance and project ROI.",
    points: ["Automated Dashboards", "Performance Analytics", "Customizable Reports"],
    image: "/analyze.png",
  }
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <section className="px-6 mt-20 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            One platform for your entire <span className='text-primary'>workflow</span> 
          </h2>
          <p className="text-slate-500  mx-auto text-lg">
            From the first idea to the final report, TeamOrbit keeps your projects moving forward.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-slate-300 mb-20 overflow-x-auto lg:overflow-visible">
          <div className="flex gap-4 md:gap-16 min-w-max px-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature)}
                className={`pb-5 text-sm font-bold uppercase tracking-widest transition-all relative ${
                  activeTab.id === feature.id ? "text-primary" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {feature.label}
                {activeTab.id === feature.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 text-black left-0 right-0 h-[3px] bg-indigo-600 shadow-[0_-2px_10px_rgba(79,70,229,0.4)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              {/* Left Side Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-md uppercase tracking-widest">
                  {activeTab.id} phase
                </div>
                <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                  {activeTab.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {activeTab.description}
                </p>
                <ul className="space-y-4 pt-4">
                  {activeTab.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-800 font-semibold group cursor-pointer">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side Image */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    width={1000}
                    height={700}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;