'use client';

import { ArrowRight, Sparkles, TrendingUp, Calendar, Clock, Play, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient light */}
      <div className="glow-orb-violet top-10 left-1/2 -translate-x-1/2 -z-10 opacity-70 animate-pulse-glow pointer-events-none" />
      <div className="glow-orb-cyan top-40 right-10 -z-10 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Product Category Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-mojo-violet/30 text-xs sm:text-sm font-semibold text-mojo-muted shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mojo-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mojo-violet"></span>
            </span>
            <span className="text-white font-bold tracking-wide">MOJO FLOW</span>
            <span className="text-mojo-dim">•</span>
            <span className="text-mojo-violet-light font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
              The Creator Business OS
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            From Brand Deal <br className="hidden sm:block" />
            <span className="text-gradient-brand">to Bottom Line.</span>
          </h1>

          <p className="text-base sm:text-xl text-mojo-muted max-w-3xl mx-auto leading-relaxed mb-8">
            MOJO FLOW is the Creator Business OS that helps creators manage collaborations, track production costs, create invoices, calculate real profit and never lose track of when they&apos;re due to be paid.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={scrollToWaitlist}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-base font-bold text-white bg-gradient-to-r from-mojo-violet via-mojo-violet-dark to-mojo-cyan hover:from-mojo-violet-light hover:to-mojo-violet shadow-glow-violet hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
            >
              <span>Get on the Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToSection('workflow')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-base font-semibold text-mojo-text bg-mojo-surface-elevated/80 hover:bg-mojo-surface-elevated border border-mojo-border hover:border-mojo-border-bright transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 text-mojo-cyan fill-mojo-cyan/20" />
              <span>See How It Works</span>
            </button>
          </div>
        </div>

        {/* HERO PRODUCT VISUAL — COLLABORATION PROFITABILITY INTERFACE */}
        <div className="mt-8 relative max-w-4xl mx-auto">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-mojo-violet/30 via-mojo-cyan/20 to-mojo-violet/30 opacity-70 blur-xl -z-10" />

          {/* SaaS Interface Window */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-mojo-border/80 shadow-2xl">
            {/* Header Bar */}
            <div className="bg-[#0C0E17] px-4 py-3 border-b border-mojo-border/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-mojo-dim hidden sm:inline-block">
                  app.mojoflow.in/collaborations/northstar-summer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-mojo-violet/20 text-mojo-violet-light border border-mojo-violet/40">
                  Active Collaboration Record
                </span>
              </div>
            </div>

            {/* Main Profitability Economics Interface */}
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left">
              {/* Brand & Campaign Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-mojo-border/60">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 font-extrabold text-white text-lg flex items-center justify-center border border-purple-400/30 shrink-0">
                    NS
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-mojo-dim">Brand Collaboration</div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">Northstar</h3>
                    <p className="text-xs text-mojo-muted">Summer Collection • 2 Reels + 3 Stories</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Invoice #MF-2026-014 Raised
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Net 60 (Due 14 Nov 2026)
                  </span>
                </div>
              </div>

              {/* Economic Financial Equation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Total Commercial */}
                <div className="bg-mojo-card p-5 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-semibold text-mojo-dim uppercase tracking-wider mb-1">Total Commercial</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">₹1,00,000</div>
                  <div className="text-[11px] text-mojo-muted mt-1">Agreed Brand Contract Value</div>
                </div>

                {/* 2. Production Cost */}
                <div className="bg-mojo-card p-5 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">Production Expenses</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-rose-400">− ₹35,000</div>
                  <div className="text-[11px] text-mojo-dim mt-1">6 Campaign Expense Items</div>
                </div>

                {/* 3. VISUALLY DOMINANT CREATOR PROFIT */}
                <div className="bg-gradient-to-br from-emerald-950/40 via-mojo-card to-emerald-900/20 p-5 rounded-xl border-2 border-emerald-500/60 shadow-glow-card relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-0.5 bg-emerald-500 text-black text-[9px] font-extrabold uppercase tracking-wider rounded-bl-md">
                    REAL PROFIT
                  </div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Creator Profit
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400">₹65,000</div>
                  <div className="text-[11px] text-emerald-300/80 font-medium mt-1">65% Net Profit Margin</div>
                </div>
              </div>

              {/* Payment Due Date Intelligence Bar */}
              <div className="p-4 rounded-xl bg-mojo-surface border border-mojo-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Payment Terms: Net 60</span>
                    <span className="text-mojo-dim mx-2">•</span>
                    <span className="text-mojo-muted">Invoice Date: 15 Sep 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-white bg-mojo-surface-elevated px-3 py-1.5 rounded-lg border border-mojo-border">
                  <Calendar className="w-3.5 h-3.5 text-mojo-cyan" />
                  Payment Due: <span className="text-mojo-cyan font-bold">14 Nov 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
