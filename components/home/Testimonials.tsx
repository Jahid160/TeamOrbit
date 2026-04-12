"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rahat Khan",
    role: "Project Manager, TechBD",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "TeamOrbit transformed our workflow. Managing complex tasks is now simple, fast and very efficient for our team.",
    stars: 5,
  },
  {
    name: "Sadia Rahman",
    role: "Lead Designer, CreativeHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The interface is incredibly smooth. Our entire design team adopted it instantly without any technical issues.",
    stars: 5,
  },
  {
    name: "Anisur Rahman",
    role: "CEO, Innovate Solutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "The analytics dashboard is a game-changer. I can track team productivity and progress in real-time instantly.",
    stars: 5,
  },
  {
    name: "Tanvir Ahmed",
    role: "Full-Stack Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "Solid MERN stack implementation. Real-time Socket.io integration makes our collaboration feel truly instant.",
    stars: 5,
  },
  {
    name: "Mehzabin Mim",
    role: "Marketing Head, Growth Co",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "Managing multiple campaigns is now effortless. TeamOrbit keeps my whole department perfectly synced daily.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className=" px-6 max-w-7xl mx-auto bg-gray-200 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-black mb-6"
        >
          What Our <span className="text-blue-500">Users Say</span>
        </motion.h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={false}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 pt-10"
        >
          {testimonials.map((test, index) => (
            <SwiperSlide key={index} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              
                className="p-8 h-full rounded-[2.5rem] bg-gray-900/40 border border-gray-800 hover:border-blue-500/30 shadow-xl transition-all duration-500 group relative flex flex-col justify-between"
              >
                <Quote className="w-12 h-12 absolute top-8 right-8 text-gray-800 group-hover:text-blue-500/20 transition-colors" />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="leading-relaxed font-medium mb-8 text-gray-300 min-h-[80px] line-clamp-3">
  {test.quote}
</p>
                </div>

                <div className="flex items-center gap-4 border-t border-gray-800 pt-6 mt-auto">
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full border-2 border-blue-500/50" />
                  <div>
                    <h4 className="text-md font-bold text-white">{test.name}</h4>
                    <p className="text-gray-500 text-xs">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination-custom flex justify-center mt-5 gap-3"></div>
      </div>
    </section>
  );
};

export default Testimonials;