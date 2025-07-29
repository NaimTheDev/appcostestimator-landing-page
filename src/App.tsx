import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisualShowcase } from './components/VisualShowcase';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { CallToAction } from './components/CallToAction';
import { MobileCtaBar } from './components/MobileCtaBar';
export function App() {
  return <div className="bg-[#f8f9fa] min-h-screen text-[#1f2937]">
      <Navbar />
      <main>
        <Hero />
        <VisualShowcase />
        <ProblemSolution />
        <HowItWorks />
        <SocialProof />
        <CallToAction />
      </main>
      <MobileCtaBar />
    </div>;
}