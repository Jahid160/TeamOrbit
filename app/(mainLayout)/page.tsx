import CalltoAction from "@/components/home/CalltoAction";
import FeatureTabs from "@/components/home/FeatureTabs";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Industries from "@/components/home/industries";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

import React from "react";

const HomePage = () => {
  return (
    <div className="px-4 md:px-8">
      <Hero />
       <TrustedBy/>
      <FeatureTabs />
          <Industries/>
      <HowItWorks />
      <Testimonials />
      <CalltoAction />
    
    </div>
  );
};

export default HomePage;
