"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { UserPlus, PencilLine, Users2, Rocket, CheckCircle2 } from 'lucide-react';

// Counter Component (Same as before but with better styling)
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest.toLocaleString()));
  }, [rounded]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-black text-white">
      {displayValue}{suffix}
    </span>
  );
};

const workFlow = [
  {
    id: "01",
    title: "Onboard Team",
    desc: "Deploy your dedicated workspace and set up high-security protocols.",
    icon: <UserPlus className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "Visual Planning",
    desc: "Map out tasks on intelligent boards with automated dependency tracking.",
    icon: <PencilLine className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    id: "03",
    title: "Sync Workflows",
    desc: "Connect your team with real-time collaboration and role-based access.",
    icon: <Users2 className="w-6 h-6" />,
    color: "bg-purple-500",
  },
  {
    id: "04",
    title: "Launch & Ship",
    desc: "Optimize delivery speed and hit your milestones with data-driven insights.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
];

const stats = [
  { label: "Data Points", value: 10000, suffix: "+" },
  { label: "Sprints Closed", value: 45000, suffix: "+" },
  { label: "Agile Teams", value: 150, suffix: "+" },
  { label: "Uptime", value: 99, suffix: "%" },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(workFlow[0]);

  return (
    <section className="px-6 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
            System  <span className="text-primary">Architecture.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">How we power your management cycle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          
          {/* Left Side: Interactive Step List */}
          <div className="lg:col-span-5 space-y-4">
            {workFlow.map((step) => (
              <div 
                key={step.id}
                onMouseEnter={() => setActiveStep(step)}
                className={`group cursor-pointer p-6 rounded-3xl transition-all duration-500 flex items-start gap-6 ${
                  activeStep.id === step.id ? "bg-slate-900 shadow-2xl scale-[1.02]" : "hover:bg-slate-50"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  activeStep.id === step.id ? "bg-white text-slate-900" : "bg-slate-100 text-slate-400"
                }`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${
                    activeStep.id === step.id ? "text-white" : "text-slate-800"
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    activeStep.id === step.id ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Visual Preview / Dashboard Look */}
          <div className="lg:col-span-7 bg-slate-100 rounded-[3rem] p-4 relative overflow-hidden h-[450px] shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl p-8 flex flex-col justify-center items-center text-center relative"
              >
                {/* Visual elements to simulate software */}
                <div className="absolute top-6 left-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                
                <div className={`w-24 h-24 ${activeStep.color} rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-indigo-200`}>
                   {React.cloneElement(activeStep.icon as React.ReactElement, { size: 48 })}
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-4">{activeStep.title}</h4>
                <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-400">
                       <CheckCircle2 size={14} className="text-emerald-500" /> Feature Module 0{i}
                     </div>
                   ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Stats Section - Keep it sleek and simple */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-12 bg-slate-900 rounded-[3.5rem] shadow-2xl shadow-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;