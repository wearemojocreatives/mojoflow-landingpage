'use client';

import AnimatedCounter from './AnimatedCounter';
import { ArrowRight, Sparkles, TrendingUp, Calendar, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Orbs */}
      <div className="glow-orb-violet top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
      <div className="glow-orb-cyan top-1/3 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mojo-violet/15 border border-mojo-violet/30 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider shadow-sm animate-fadeIn">
            <Sparkles className="w-4 h-4 text-mojo-cyan" />
            <span>MOJO FLOW — The Creator Business OS</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
            From Brand Deal <br className="hidden sm:block" />
            <span className="text-gradient-brand">to Bottom Line.</span>
          </h1>

          {/* Shortened Supporting Copy */}
          <p className="text-base sm:text-xl text-mojo-muted max-w-2xl mx-auto leading-relaxed font-normal">
            Manage collaborations, invoices, expenses and real creator profit — in one place.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#waitlist"
              onClick={(e) => scrollToSection(e, '#waitlist')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-base font-bold text-white bg-gradient-to-r from-mojo-violet via-mojo-violet-dark to-mojo-cyan hover:from-mojo-violet-light hover:to-mojo-violet shadow-glow-violet hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get on the Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, '#how-it-works')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading text-base font-semibold text-mojo-muted hover:text-white bg-mojo-surface hover:bg-mojo-surface-elevated border border-mojo-border hover:border-mojo-violet/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
            </a>
          </div>

          {/* Trust indicator */}
          <div className="flex items-center justify-center gap-2 text-xs text-mojo-dim pt-2">
            <ShieldCheck className="w-4 h-4 text-mojo-emerald" />
            <span>Private creator-side workspace • Zero public data sharing</span>
          </div>

        </div>

        {/* HERO PRODUCT VISUAL — Animated Collaboration Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-mojo-violet/40 shadow-glow-card relative overflow-hidden">
            
            {/* Window Bar Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-mojo-border/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-mojo-dim">
                  app.mojoflow.in/collaborations/northstar-summer
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active Collaboration</span>
              </div>
            </div>

            {/* Brand Title Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 font-extrabold text-white text-lg flex items-center justify-center border border-purple-400/30 shadow-md">
                  NS
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">NORTHSTAR</h3>
                  <p className="text-xs text-mojo-muted font-medium">Summer Collection Campaign</p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-mojo-card border border-mojo-border text-amber-400 font-semibold">
                  NET 60
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-mojo-card border border-mojo-border text-mojo-cyan font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Due 14 Nov 2026
                </span>
              </div>
            </div>

            {/* Animated Calculation Grid — 3 Responsive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center">
              
              {/* Gross Commercial */}
              <div className="md:col-span-2 p-4 sm:p-5 rounded-2xl bg-mojo-card border border-mojo-border/80 text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-mojo-dim mb-1">
                  Agreed Commercial
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  <AnimatedCounter end={65000} prefix="₹" />
                </div>
                <div className="text-[10px] text-mojo-muted mt-1">Gross Brand Fee</div>
              </div>

              {/* Minus Operator */}
              <div className="md:col-span-1 text-rose-400 font-black text-xl sm:text-2xl flex items-center justify-center my-1 md:my-0">
                <span className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">−</span>
              </div>

              {/* Production Costs */}
              <div className="md:col-span-2 p-4 sm:p-5 rounded-2xl bg-mojo-card border border-rose-500/30 text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1">
                  Production Expenses
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-rose-400 tracking-tight">
                  <AnimatedCounter end={18500} prefix="₹" />
                </div>
                <div className="text-[10px] text-mojo-muted mt-1">Crew, Studio, Travel & Ads</div>
              </div>

            </div>

            {/* Equals Equals Net Creator Profit Banner */}
            <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-mojo-card to-emerald-900/30 border-2 border-emerald-500/70 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center justify-center sm:justify-start gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Real Creator Net Profit
                </div>
                <div className="text-[11px] text-emerald-300/80 font-medium mt-0.5">
                  Commercial (₹65,000) − Expenses (₹18,500)
                </div>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-emerald-400 tracking-tight">
                <AnimatedCounter end={46500} prefix="₹" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
