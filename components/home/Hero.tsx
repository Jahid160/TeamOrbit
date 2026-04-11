"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, LogIn } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Manage Your Team Smarter",
    desc: "TeamOrbit brings all your tasks, teammates, and tools together in one powerful, unified workspace.",
    image: "/thero1.png",
  },
  {
    id: 2,
    title: "Track Progress in Real-Time",
    desc: "Visualize success with intuitive boards and real-time status updates for every project phase.",
    image: "/thero2.png",
  },
  {
    id: 3,
    title: "Stay Organized & Fast",
    desc: "Experience the fastest way to manage complex projects and hit your deadlines without the stress.",
    image: "/thero4.png",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Slider Auto-play logic
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  return (
    
    <section className="bg-gray-100 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl mt-10">
      
      {/*  */}
      <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-gray-950">
        
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
           
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* image dark gradient*/}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

            {/* lift side text */}
            <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 z-20">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl space-y-6"
              >
                
                <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/50 text-blue-400 rounded-full text-xs md:text-sm font-semibold mb-2 backdrop-blur-md uppercase tracking-wider">
                  Task Management Platform
                </span>

                <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] drop-shadow-xl">
                  {slides[current].title}
                </h1>
                  <p className="text-base md:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed">
                  {slides[current].desc}
                </p>

                {/* action button */}
                <div className="hero-cta mt-8 flex flex-wrap items-center justify-start gap-4">
                  <Link
                    href="/auth/register"
                    className="btn btn-primary rounded-2xl px-8 h-12 text-white shadow-xl shadow-primary/30 border-0 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    Get Started <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/auth/login"
                    className="btn bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl h-12 px-8 text-white border border-white/20 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <LogIn size={20} /> Log In
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* navigtion arro button */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-40 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all pointer-events-auto group"
          >
            <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all pointer-events-auto group"
          >
            <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* slider dot */}
        <div className="absolute bottom-12 left-6 md:left-16 flex gap-4 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 h-2.5 rounded-full ${
                index === current
                  ? "w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;