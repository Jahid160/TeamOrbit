"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import Link from 'next/link';

const CalltoAction = () => {
  return (
    <section className="py-24 mt-16 px-6 bg-[#0a0a0b] rounded-2xl overflow-hidden relative">
      {/* Background  */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles size={14} /> 
              <span>Ready for the next orbit</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight"
            >
              Master your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400 font-extrabold">
                productivity cycle.
              </span>
            </motion.h2>
            
            <p className="text-slate-400 text-xl mb-12 max-w-lg leading-relaxed font-medium">
              Dont just manage tasks. Lead your team with a system engineered for high-velocity execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/register" 
                className="px-10 py-5 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Join TeamOrbit <ArrowRight size={20} />
              </Link>
              <Link 
                href="/demo" 
                className="px-10 py-5 bg-transparent text-white border border-white/10 hover:bg-white/5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center active:scale-95"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/15 to-transparent p-[1.5px] rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="bg-[#111113] p-8 md:p-12 rounded-[2.5rem] relative">
                
                
                <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">
                    V3.4 Stable
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-5">
                  {[
                    "Mission-critical workspaces",
                    "Automated sprint dependency",
                    "Global team synchronization"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="text-white/80 font-bold text-sm tracking-wide">{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Growth Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-[2rem] shadow-2xl shadow-indigo-600/50 border border-white/20"
                >
                  <p className="text-[10px] text-indigo-100 font-bold uppercase tracking-wider mb-1">Performance</p>
                  <p className="text-3xl font-black text-white">+142%</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CalltoAction;