'use client';

import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Layers, DollarSign, CheckCircle2, Clock, Play } from 'lucide-react';

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
      {/* Ambient background lighting */}
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
              The Creator OS
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            The Operating System for <br className="hidden sm:block" />
            <span className="text-gradient-brand">Modern Creators</span>
          </h1>

          <p className="text-base sm:text-xl text-mojo-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Run your entire creator business in one system. Manage rate cards, campaign workflows, GST invoicing, and monthly commercial performance — without spreadsheet chaos.
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
              onClick={scrollToSection('showcase')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-base font-semibold text-mojo-text bg-mojo-surface-elevated/80 hover:bg-mojo-surface-elevated border border-mojo-border hover:border-mojo-border-bright transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 text-mojo-cyan fill-mojo-cyan/20" />
              <span>See How It Works</span>
            </button>
          </div>

          {/* Key Architectural Value Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs sm:text-sm text-mojo-muted font-medium pt-4 pb-6 border-y border-mojo-border/40">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mojo-emerald" />
              <span>Direct Commercial Deals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-mojo-violet-light" />
              <span>Unified Workspace</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-4 h-4 text-mojo-amber" />
              <span>Razorpay Billing History</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4 text-mojo-cyan" />
              <span>Business Insights</span>
            </div>
          </div>
        </div>

        {/* SaaS Product Dashboard Visual Hero */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Subtle Outer Ambient Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-mojo-violet/30 via-mojo-cyan/20 to-mojo-violet/30 opacity-70 blur-xl -z-10" />

          {/* Window Shell */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-mojo-border/80 shadow-2xl">
            {/* Header Browser Bar */}
            <div className="bg-[#0C0E17] px-4 py-3 border-b border-mojo-border/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-mojo-dim hidden sm:inline-block">
                  app.mojoflow.in/dashboard
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 rounded-md bg-mojo-surface-elevated text-[11px] font-medium text-mojo-violet-light border border-mojo-border">
                  PRO CREATOR OS
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-mojo-violet to-mojo-cyan flex items-center justify-center text-[10px] font-bold text-white">
                  AR
                </div>
              </div>
            </div>

            {/* Dashboard Workspace Mockup Content */}
            <div className="p-4 sm:p-6 bg-[#0B0D16] space-y-6 text-left">
              {/* Metric Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-mojo-card p-4 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-medium text-mojo-dim uppercase tracking-wider mb-1">Monthly Revenue</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">₹4,85,000</div>
                  <div className="text-[11px] text-mojo-emerald font-semibold flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +24% vs last month
                  </div>
                </div>

                <div className="bg-mojo-card p-4 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-medium text-mojo-dim uppercase tracking-wider mb-1">Active Campaigns</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">6 Live</div>
                  <div className="text-[11px] text-mojo-cyan font-medium mt-1">3 Pending Approval</div>
                </div>

                <div className="bg-mojo-card p-4 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-medium text-mojo-dim uppercase tracking-wider mb-1">Commercial Pipeline</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">₹8,50,000</div>
                  <div className="text-[11px] text-mojo-violet-light font-medium mt-1">4 Open Deals</div>
                </div>

                <div className="bg-mojo-card p-4 rounded-xl border border-mojo-border/80">
                  <div className="text-xs font-medium text-mojo-dim uppercase tracking-wider mb-1">Cleared Payouts</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-mojo-emerald">₹3,20,000</div>
                  <div className="text-[11px] text-mojo-dim mt-1">Razorpay Verified</div>
                </div>
              </div>

              {/* Main Workspace split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Active Collaborations List */}
                <div className="lg:col-span-2 bg-mojo-card p-4 sm:p-5 rounded-xl border border-mojo-border/80 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-mojo-border/60">
                    <h3 className="font-heading font-semibold text-sm text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-mojo-violet" />
                      Active Brand Collaborations
                    </h3>
                    <span className="text-xs text-mojo-muted font-mono">Deliverable Pipeline</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs border border-indigo-500/30">
                          NK
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">Nike Tech Campaign — Reels & Story</div>
                          <div className="text-[11px] text-mojo-dim">Commercial: ₹2,20,000 • Due 22 Aug</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Ready to Post
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
                          SP
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">Spotify India — Podcast Integration</div>
                          <div className="text-[11px] text-mojo-dim">Commercial: ₹1,80,000 • Script Review</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[11px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> In Review
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs border border-purple-500/30">
                          AS
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">ASUS ROG — Setup Showcase</div>
                          <div className="text-[11px] text-mojo-dim">Commercial: ₹3,50,000 • Contract Signed</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[11px] font-medium">
                        Production
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rate Card Summary */}
                <div className="bg-mojo-card p-4 sm:p-5 rounded-xl border border-mojo-border/80 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-mojo-border/60 mb-3">
                      <h3 className="font-heading font-semibold text-sm text-white">Commercial Profile</h3>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-mojo-emerald bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        Live Link
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-mojo-border/40">
                        <span className="text-mojo-muted">Instagram Reel (60s)</span>
                        <span className="font-semibold text-white">₹1,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-mojo-border/40">
                        <span className="text-mojo-muted">YouTube Dedicated</span>
                        <span className="font-semibold text-white">₹3,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-mojo-border/40">
                        <span className="text-mojo-muted">Story Series (3x)</span>
                        <span className="font-semibold text-white">₹75,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-mojo-muted">Brand Ambassadorship</span>
                        <span className="font-semibold text-mojo-cyan">Custom Package</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-mojo-border/60">
                    <div className="text-[11px] text-mojo-dim mb-2">Automated GST Invoicing & Razorpay Billing</div>
                    <div className="w-full py-2 rounded-lg bg-mojo-surface-elevated text-xs font-semibold text-center text-mojo-violet-light border border-mojo-border">
                      mojoflow.in/c/alex-rivers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
