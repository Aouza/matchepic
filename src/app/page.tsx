'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Results from '../components/Results';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B14]">
      <Hero />
      <Features />
      <Results />
      <Pricing />
      <HowItWorks />
      <CTA />
    </main>
  );
} 