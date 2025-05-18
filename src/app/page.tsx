"use client";

import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PricingUrgencyHeader from "@/components/PricingUrgencyHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B14] text-white">
      <Hero />

      <Features />
      <HowItWorks />
      <PricingUrgencyHeader />
      <Pricing />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
