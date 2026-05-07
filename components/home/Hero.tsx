"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Manage your teamwork more intelligently",
  subtitle = "Task management has never been easier. Track every stage of your projects with TeamOrbit and boost your team's productivity instantly.",
  primaryBtnText = "Get Started for Free",
  secondaryBtnText = "Watch Demo"
}) => {
  return (
    <section className="min-h-[85vh] flex items-center bg-[#fcfcfd] px-6 mt-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Manage your teamwork <br />
            <span className="text-indigo-600">more intelligently</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-indigo-200 shadow-lg active:scale-95">
              {primaryBtnText}
            </button>
            <button className="bg-white border border-slate-200 hover:border-indigo-600 px-8 py-4 rounded-xl font-semibold transition-all text-slate-700 active:scale-95">
              {secondaryBtnText}
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image/Task Board Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Background Decorative Element */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
          
          {/* Main Preview Image */}
          <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 bg-white">
            <Image 
              src="/task.png" // Ensure this image is in your /public folder
              alt="TeamOrbit Dashboard Preview"
              width={850}
              height={550}
              priority
              className="w-full h-auto transform hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Achievement Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4 z-20"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Task Completed!</p>
              <p className="text-xs text-slate-500">Project Milestone Reached</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;