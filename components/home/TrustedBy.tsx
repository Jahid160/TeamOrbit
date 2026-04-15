"use client";

import React from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion';


const companies = [
  { name: "Google", logo: "/google.png" },
  { name: "Microsoft", logo: "/microsoft.png" },
  { name: "Slack", logo: "/slack.png" },
  { name: "Amazon", logo: "/amazon.png" },
  { name: "Adobe", logo: "/adobe.png" },
  { name: "Spotify", logo: "/spotify.png" },
  { name: "Netflix", logo: "/netflix.png" },
  { name: "Discord", logo: "/discord.png" },
];

const TrustedBySlider: React.FC = () => {
  
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="px-6 mt-10 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 mb-16 text-center"> {/* mb-12 থেকে বাড়িয়ে mb-16 করা হয়েছে */}
        <p className="text-xl mt-6 md:text-2xl font-bold text-black uppercase tracking-[0.2em]">
          Trusted by 10,000+ companies worldwide
        </p>
      </div>

      
      <div className="relative flex w-full">
      
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center" // গ্যাপ একটু অ্যাডজাস্ট করা হয়েছে বড় লোগোর জন্য
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            ease: "linear",
            duration: 50, 
            repeat: Infinity,
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-16 md:h-20" // উচ্চতা (h-12 -> h-16/20) এবং প্রস্থ বাড়ানো হয়েছে
            >
             
              <div className="relative w-full h-full opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-pointer"> {/* opacity 60 থেকে 80 করা হয়েছে */}
                <Image
                  src={company.logo} 
                  alt={`${company.name} Logo`}
                  fill 
                  priority 
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div> {/* শ্যাডোর প্রস্থ বাড়ানো হয়েছে (w-32 -> w-40) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TrustedBySlider;