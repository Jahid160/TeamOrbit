"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Users, 
  Zap, 
  Bell, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    title: "Intuitive Task Boards",
    desc: "Organize tasks with a simple drag-and-drop interface. Move from 'To Do' to 'Done' effortlessly.",
    icon: <Layout className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Team Collaboration",
    desc: "Invite your teammates, assign roles, and work together in real-time on any project.",
    icon: <Users className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Lightning Fast Speed",
    desc: "Built with the latest tech stack (MERN) to ensure your workflow is never interrupted by lag.",
    icon: <Zap className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Smart Notifications",
    desc: "Stay updated with real-time alerts about deadlines, mentions, and project updates.",
    icon: <Bell className="w-8 h-8 text-rose-500" />,
  },
  {
    title: "Advanced Analytics",
    desc: "Track team productivity and project progress with beautiful, easy-to-read charts.",
    icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Enterprise Security",
    desc: "Your data is encrypted and safe with us. We prioritize your privacy above all else.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-200 px-6 max-w-7xl mt-2 mx-auto">
     
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          Powerful <span className='text-primary'>Features </span> 
        </motion.h2>
        
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gray-100 border border-gray-800 hover:border-blue-500/50 backdrop-blur-sm transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-balck mb-3 group-hover:text-blue-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;