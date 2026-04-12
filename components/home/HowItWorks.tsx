"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { UserPlus, PencilLine, Users2, Rocket } from 'lucide-react';

// Counter Component for Stats
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
    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toLocaleString());
    });
  }, [rounded]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-black text-black">
      {displayValue}{suffix}
    </span>
  );
};

const steps = [
  {
    title: "Create Workspace",
    desc: "Sign up in seconds and set up your personal or team workspace.",
    icon: <UserPlus className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Organize Tasks",
    desc: "Create boards, add tasks, and use drag-and-drop to prioritize.",
    icon: <PencilLine className="w-8 h-8 text-purple-500" />,
  },
  {
   title: "Invite Your Team",
    desc: "Add team members to collaborate and assign roles in real-time.",
    icon: <Users2 className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Achieve Goals",
    desc: "Track progress and finish your projects before the deadline hits.",
    icon: <Rocket className="w-8 h-8 text-emerald-500" />,
  },
];

const stats = [
  { label: "Active Users", value: 10000, suffix: "+" },
  { label: "Projects Done", value: 45000, suffix: "+" },
  { label: "Team Members", value: 150, suffix: "+" },
  { label: "Success Rate", value: 99, suffix: "%" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-200 px-6 max-w-7xl mx-auto">
      {/* 1. How It Works Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          How It <span className='text-primary font-black'>Works</span> 
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gray-100 border border-gray-800 hover:border-blue-500/50 backdrop-blur-sm transition-all group relative"
          >
            
            <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-400 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 2. Stats Section (Inside the same file) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-b border-gray-200">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6"
          >
            <div className="mb-1">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;