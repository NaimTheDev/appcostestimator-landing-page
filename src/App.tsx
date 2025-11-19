import React, { useState } from 'react';
import { animated, useSpring, useTrail } from '@react-spring/web';
import { JOIN_BETA_ENDPOINT } from './lib/api';

const navLinks = [
  { label: 'Why Teams Switch', href: '#why-teams-switch' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

const featureCards = [
  {
    title: 'Quick & Accurate Estimates',
    description: 'Answer a few prompts and get an instant price range for your entire build.',
    badge: 'Accuracy',
    color: 'from-blue-500/15 to-blue-500/5',
    icon: '✔',
  },
  {
    title: 'Refine & Seal Proposals',
    description: 'Lock in estimates with scope details, payment terms, and branded proposals.',
    badge: 'Proposals',
    color: 'from-purple-500/15 to-purple-500/5',
    icon: '⚙',
  },
  {
    title: 'Detailed & Shareable Bundles',
    description: 'Package deliverables by sprint or milestone and share with teams or clients.',
    badge: 'Teams',
    color: 'from-indigo-500/15 to-indigo-500/5',
    icon: '📄',
  },
  {
    title: 'Professional Proposals',
    description: 'Brand-ready decks that translate your estimate into a clear project plan.',
    badge: 'Proposal',
    color: 'from-pink-500/15 to-pink-500/5',
    icon: '💼',
  },
];

const faqs = [
  {
    title: 'How accurate are estimates?',
    description: 'AppCostEstimator learns from hundreds of delivered projects to keep estimates grounded in reality.',
  },
  {
    title: 'Can I customize proposals?',
    description: 'Update scope, sprints, payment schedules, and sections for each client with just a few clicks.',
  },
  {
    title: 'Is it easy to share with my team?',
    description: 'Invite stakeholders or export branded PDFs to bring everyone onto the same page quickly.',
  },
  {
    title: 'Do you have a beta program?',
    description: 'Yes! Join the beta to access premium templates, AI prompts, and concierge onboarding.',
  },
  {
    title: 'Does it cover fixed + retainer work?',
    description: 'Create mixed billing models, up-front deposits, or flexible retainers without rewriting the scope.',
  },
  {
    title: 'Will I need training to use it?',
    description: 'Not at all. The guided wizard walks you through each choice and suggests best practices for every screen.',
  },
];

const processSteps = [
  { number: '01', title: 'Define project type', details: 'Mobile, web, or platform-specific builds' },
  { number: '02', title: 'Select features + timelines', details: 'Scope screens, integrations, and launch goals' },
  { number: '03', title: 'Generate polished proposal', details: 'Share, export, or collect approvals instantly' },
];

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [betaEmail, setBetaEmail] = useState("");
  const [betaMessage, setBetaMessage] = useState("");
  const [betaSuccess, setBetaSuccess] = useState<boolean | null>(null);
  const [isSubmittingBeta, setIsSubmittingBeta] = useState(false);
  const heroSpring = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 140, friction: 28 },
  });

  const heroImageSpring = useSpring({
    from: { opacity: 0, y: 50, rotateZ: -4 },
    to: { opacity: 1, y: 0, rotateZ: 0 },
    delay: 150,
    config: { tension: 130, friction: 20 },
  });

  const featureTrail = useTrail(featureCards.length, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 200,
  });

  const faqTrail = useTrail(faqs.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 400,
  });

  const ctaSpring = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    delay: 500,
  });

  const handleBetaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!betaEmail) return;
    setIsSubmittingBeta(true);
    setBetaMessage("");
    setBetaSuccess(null);

    try {
      const response = await fetch(JOIN_BETA_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: betaEmail }),
      });

      const data = await response.json();
      if (data.success) {
        setBetaSuccess(true);
        setBetaMessage("🎉 Welcome to the beta! Check your inbox for next steps.");
        setBetaEmail("");
      } else {
        setBetaSuccess(false);
        setBetaMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setBetaSuccess(false);
      setBetaMessage("Network error. Please try again in a moment.");
    } finally {
      setIsSubmittingBeta(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#eef2ff] text-[#0f1b3d] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#eef2ff] to-white pointer-events-none" />
      <div className="absolute -top-40 -left-24 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full pointer-events-none" />

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/appcostestimator_logo.png" alt="AppCostEstimator logo" className="w-12 h-12 rounded-2xl shadow-lg" />
            <div>
              <p className="text-sm text-slate-500">AppCostEstimator.com</p>
              <p className="text-sm text-slate-400">Plan accurate budgets</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-500">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
              ⟳
            </button>
          </nav>
          <button
            className="md:hidden w-11 h-11 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-1"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/70 bg-white/90 backdrop-blur px-6 py-4 space-y-3 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl border border-slate-200 px-4 py-3 bg-white hover:border-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://appcostestimator.com/"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl bg-blue-600 text-white text-center px-4 py-3 font-semibold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Your Free Estimate
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pb-24 space-y-20">
        <animated.section style={heroSpring} className="grid lg:grid-cols-2 gap-12 pt-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              Trusted app budget copilot
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-[#0b1537]">
              Estimate your app cost in <span className="text-blue-600">60 seconds</span> — before you
              <span className="text-blue-500 font-bold"> overshoot</span> your budget.
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl">
              Scope features, stack, and sprints. AppCostEstimator translates complexity into a confident budget you can
              share with stakeholders and clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://appcostestimator.com/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-transform"
              >
                Start Your Free Estimate
              </a>
              <a
                href="#faq"
                className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold bg-white/80 backdrop-blur"
              >
                View FAQs
              </a>
            </div>

            <div className="mt-10 bg-white/90 backdrop-blur rounded-3xl p-6 shadow-2xl border border-white/70 max-w-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Recent Estimate</p>
                  <h3 className="text-xl font-semibold mt-2">E-Commerce Mobile App v2</h3>
                  <p className="text-sm text-slate-500">I want to build a...</p>
                </div>
                <button className="text-blue-500 text-sm font-semibold">Create New</button>
              </div>
              <div className="mt-6 rounded-2xl bg-blue-50 p-4 border border-blue-100">
                <p className="text-xs uppercase text-blue-500 tracking-widest">Cost</p>
                <p className="text-3xl font-bold text-[#0d1d4a]">$150,000</p>
                <p className="text-xs text-slate-500 mt-1">Based on 12 core screens</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['User Authentication', 'Browse feed', 'Payment gateway'].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button className="text-slate-600 font-semibold">View All Estimates</button>
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">Create New</button>
              </div>
            </div>
          </div>

          <animated.div style={heroImageSpring} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-[48px] scale-95 -z-10" />
            <div className="bg-white rounded-[40px] shadow-[0_25px_80px_rgba(15,27,61,0.12)] border border-white/70 overflow-hidden">
              <img src="/hero_png.png" alt="Hero illustration with growth chart" className="w-full h-full object-cover" />
            </div>
          </animated.div>
        </animated.section>

        <section id="why-teams-switch" className="space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Why teams switch</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0b1537]">From feature selection to client proposal</h2>
            <p className="mt-3 text-slate-500 max-w-3xl mx-auto">
              AppCostEstimator removes the guesswork so freelancers, studios, and agencies can quote like pros.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureTrail.map((style, index) => {
              const feature = featureCards[index];
              return (
                <animated.div
                  key={feature.title}
                  style={style}
                  className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,27,61,0.06)] hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl`}>
                    {feature.icon}
                  </div>
                  <p className="mt-4 inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
                    {feature.badge}
                  </p>
                  <h3 className="mt-3 font-semibold text-lg text-[#0b1537]">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
                </animated.div>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="rounded-[40px] bg-white/90 border border-white/60 shadow-[0_25px_90px_rgba(15,27,61,0.1)] p-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">How it works</p>
              <h2 className="text-3xl font-semibold text-[#0b1537] mt-2">Choose our estimator workflow</h2>
            </div>
            <a
              href="https://appcostestimator.com/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-transform"
            >
              Get Started For Free
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-slate-100 p-6 bg-slate-50/60">
                <p className="text-sm font-semibold text-blue-500">{step.number}</p>
                <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                <p className="mt-2 text-slate-500 text-sm">{step.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Frequently Questions</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0b1537]">Everything you need to quote confidently</h2>
            <p className="mt-3 text-slate-500 max-w-3xl mx-auto">
              From accuracy to collaboration, these are the questions agencies ask before switching.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqTrail.map((style, index) => {
              const faq = faqs[index];
              return (
                <animated.div
                  key={faq.title}
                  style={style}
                  className="rounded-3xl bg-white/90 border border-white/70 shadow-[0_15px_50px_rgba(15,27,61,0.08)] p-6"
                >
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center font-semibold">
                    ?
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0b1537]">{faq.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{faq.description}</p>
                </animated.div>
              );
            })}
          </div>
        </section>

        <animated.section
          style={ctaSpring}
          className="rounded-[42px] bg-gradient-to-r from-white to-blue-50 border border-white/70 shadow-[0_30px_100px_rgba(15,27,61,0.15)] p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Beta invitation</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#0b1537]">
                Stop guessing. Start quoting like a <span className="text-blue-600">pro.</span>
              </h2>
              <p className="mt-4 text-slate-500">
                We don’t spam or haunt tools. Join the beta program for pro templates, AI prompts, and concierge onboarding.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Dashboard
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Features
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Pricing
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-inner p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl">A</div>
                <div>
                  <p className="font-semibold text-[#0b1537]">AppCostEstimator.com</p>
                  <p className="text-sm text-slate-500">Professional app cost estimation for freelancers and agencies.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-600">Product</p>
                  <ul className="mt-2 space-y-1 text-slate-500">
                    <li>Dashboard</li>
                    <li>Features</li>
                    <li>Estimates</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-600">Support</p>
                  <ul className="mt-2 space-y-1 text-slate-500">
                    <li>Terms</li>
                    <li>How it works</li>
                    <li>Pricing</li>
                  </ul>
                </div>
              </div>
              <form onSubmit={handleBetaSubmit} className="space-y-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-70"
                    value={betaEmail}
                    onChange={(event) => setBetaEmail(event.target.value)}
                    required
                    disabled={isSubmittingBeta}
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingBeta || !betaEmail}
                    className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmittingBeta ? "Joining..." : "Join Beta"}
                  </button>
                </div>
                {betaMessage && (
                  <div
                    className={`text-sm rounded-2xl px-4 py-3 ${
                      betaSuccess ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {betaMessage}
                  </div>
                )}
              </form>
              <div className="flex gap-3 text-slate-400 text-xl">
                <span>🐦</span>
                <span>📘</span>
                <span>💬</span>
              </div>
            </div>
          </div>
        </animated.section>
      </main>

      <footer className="bg-[#0a1128] text-white px-4 sm:px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-300">
          <p>© {new Date().getFullYear()} AppCostEstimator. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
