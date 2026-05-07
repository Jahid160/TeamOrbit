"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react';

const industryData = [
  {
    id: "public-sector",
    label: "Public sector & government",
    title: "Agile management for public infrastructure",
    description: "Modernize city operations with secure, transparent, and scalable task management built for complex government workflows.",
    points: [
      "GDPR & ISO compliant data residency",
      "Multi-departmental task synchronization",
      "Custom permission levels for internal control"
    ],
    image: "/government.png" 
  },
  {
    id: "banking",
    label: "Banking & financial services",
    title: "Secure project delivery for finance",
    description: "Manage high-stakes financial projects with bank-grade security and automated audit trails.",
    points: [
      "End-to-end encryption for all workflows",
      "Real-time risk assessment tracking",
      "Automated compliance reporting"
    ],
    image: "/banking.png"
  },
  {
    id: "manufacturing",
    label: "Manufacturing & industries",
    title: "Smart supply chain & production control",
    description: "Keep your production floor and back-office in sync with real-time dependency tracking.",
    points: [
      "Visual resource allocation management",
      "Production timeline monitoring (Gantt)",
      "Zero-latency team communication"
    ],
    image: "/manufacturing.png"
  },
  {
    id: "insurance",
    label: "Insurance",
    title: "Accelerate claim life cycles through tech",
    description: "Streamline claim handling and agent coordination with our automated task distribution system.",
    points: [
      "Automated document review workflows",
      "SLA tracking and performance metrics",
      "Client data privacy protection"
    ],
    image: "/insurance.png"
  },
  {
    id: "healthcare",
    label: "Healthcare & clinics",
    title: "Patient care coordination & HIPAA safety",
    description: "A centralized platform for clinical teams to manage patient care without compromising data privacy.",
    points: [
      "HIPAA compliant workspace",
      "Unified medical staff scheduling",
      "Integrated emergency task alerts"
    ],
    image: "/healthcare.png"
  }
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState(industryData[0]);

  return (
    <section className="px-6 mt-10 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <div className="mb-16 text-left border-l-4 border-indigo-600 pl-6">
          <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
            <LayoutGrid size={16} />
            Enterprise Solutions
          </div>
          <h2 className="text-4xl  md:text-5xl font-black text-slate-900 leading-[1.1]">
            One system for industries <br /> 
            <span className=" text-primary font-medium">that move the world.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {industryData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-6 py-6 text-lg font-bold transition-all duration-300 rounded-2xl border-2 ${
                  activeTab.id === item.id 
                    ? "text-indigo-600 bg-white border-indigo-100 shadow-xl shadow-indigo-100/40 translate-x-2" 
                    : "text-slate-400 bg-transparent border-transparent hover:text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Dashboard-like Content Area */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
              >
                {/* Information */}
                <div className="space-y-8 order-2 xl:order-1">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                      {activeTab.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {activeTab.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {activeTab.points.map((point, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <CheckCircle2 size={20} className="text-indigo-500 mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-semibold">{point}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full xl:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors group">
                    View Sector Roadmap
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Industrial  Image */}
                <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-2xl order-1 xl:order-2 bg-indigo-50">
                   <Image
                      src={activeTab.image}
                      alt={activeTab.label}
                      fill
                      className="object-cover"
                      priority
                   />
                   {/* Overlay effect  */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;