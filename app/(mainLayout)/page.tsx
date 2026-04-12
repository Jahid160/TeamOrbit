import CalltoAction from "@/components/home/CalltoAction";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

import React from "react";

const HomePage = () => {
  return (
    <div className="px-4 md:px-8">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CalltoAction />
    </div>
  );
};

export default HomePage;
