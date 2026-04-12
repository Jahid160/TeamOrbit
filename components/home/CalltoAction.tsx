"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight,  } from 'lucide-react';
import Link from 'next/link';

const CalltoAction = () => {
    return (
        
        <section className="relative px-6 sm:px-10 overflow-hidden mt-16 bg-gray-200">
            
            <div className="relative mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    
                    className="relative overflow-hidden bg-gray-600 rounded-[2.5rem] p-10 md:p-20 text-center shadow-2xl border border-gray-800"
                >
                   
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />

                    <div className="relative z-10">
                        
                        <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                            Ready to Orbit Your <br /> 
                            <span className="text-blue-500">Next Big Project?</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join hundreds of teams scaling their productivity with TeamOrbit. 
                            Simple tools, powerful results.
                        </p>

                       
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/register" 
                                className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                            >
                                Get Started Now <ArrowRight size={18} />
                            </Link>

                            <Link 
                                href="/contact" 
                                className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white rounded-2xl font-bold border border-gray-700 transition-all flex items-center justify-center"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CalltoAction;