"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Essential tools for individuals and small projects.",
      features: [
        "Up to 3 Active Projects",
        "Personal Task Boards",
        "Basic File Sharing (2GB)",
        "Mobile & Desktop Sync",
        "Community Support",
      ],
      cta: "Get Started",
      highlighted: false,
      isFree: true,
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "/month",
      description: "Powerful features for growing teams & productivity.",
      features: [
        "Everything in Starter",
        "Unlimited Projects",
        "Team Collaboration Tools",
        "Advanced Analytics",
        "Custom Workflow Builder",
        "Priority Support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      isFree: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full control and security for large scale organizations.",
      features: [
        "Everything in Professional",
        "Single Sign-On (SSO)",
        "Advanced Security Audits",
        "Custom API Access",
        "Dedicated Account Manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
      isFree: false,
    },
  ];

  return (
    
    <section className="relative overflow-visible mt-10 px-6 max-w-7xl mx-auto sm:px-10 bg-gray-200">
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
            Plans for <span className="text-blue-500">Everyone</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Simple, transparent pricing to help you manage tasks better.
          </p>
        </motion.div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 } 
              }}
              
              
              className={`relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 
                ${plan.highlighted 
                  ? "bg-gray-900 border-2 border-blue-600 shadow-[0_30px_70px_rgba(37,99,235,0.2)] md:scale-105 z-20" 
                  : "bg-gray-50 border border-gray-200 z-10"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8 mt-2">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-black"}`}>{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? "text-white" : "text-black"}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
                </div>
              </div>

              <div className="mb-10">
                <Link 
                  href="/register" 
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all 
                    ${plan.highlighted 
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg" 
                      : "bg-white hover:bg-gray-100 text-black border border-gray-200"}`}
                >
                  {plan.cta} <ArrowRight size={18} />
                </Link>
              </div>

            
              <div className="space-y-4 border-t border-gray-200/20 pt-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-blue-500' : 'bg-gray-200'}`}>
                      <Check className={`w-3 h-3 stroke-[4px] ${plan.highlighted ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className={`${plan.highlighted ? 'text-gray-300' : 'text-gray-500'} text-sm font-medium`}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;