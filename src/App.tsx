import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { VisualShowcase } from './components/VisualShowcase';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
// import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { MobileCtaBar } from './components/MobileCtaBar';
export function App() {
  return <div className="bg-white min-h-screen text-[#1f2937]">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <VisualShowcase />
        <ProblemSolution />
        <HowItWorks />
        <SocialProof />
        <FAQ />
        {/* <Pricing /> */}
        <CallToAction />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>;
}