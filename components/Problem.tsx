'use client';

import AnimatedCounter from './AnimatedCounter';
import { AlertCircle, TrendingUp, ArrowRight, Layers } from 'lucide-react';

export default function Problem() {
  return (
    <section id="product" className="py-24 bg-[#0B0D16] border-y border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            The Economics of a Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Your brand deal <br className="hidden sm:block" />
            <span className="text-gradient-brand">isn&apos;t your profit.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            A ₹65,000 deal fee isn&apos;t ₹65,000 in your bank account. Production crew, studio rentals, travel, and ad amplification reduce your take-home pay.
          </p>
        </div>

        {/* Visually Dominant Animated Calculation Card */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-mojo-border shadow-2xl relative overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
            
            {/* Total Commercial */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border text-left md:text-center">
              <div className="text-[11px] font-bold uppercase tracking-wider text-mojo-muted mb-1">Total Commercial</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                <AnimatedCounter end={65000} prefix="₹" />
              </div>
              <div className="text-[10px] text-mojo-dim mt-1">Agreed Deal Value</div>
            </div>

            {/* Minus Sign */}
            <div className="text-xl sm:text-2xl font-black text-rose-400 flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">−</span>
            </div>

            {/* Production Cost */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-rose-500/30 text-left md:text-center">
              <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1">Production Costs</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-rose-400">
                <AnimatedCounter end={18500} prefix="₹" />
              </div>
              <div className="text-[10px] text-mojo-dim mt-1">Crew, Studio, Travel & Ads</div>
            </div>

            {/* Equals Sign */}
            <div className="text-xl sm:text-2xl font-black text-emerald-400 flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">＝</span>
            </div>

            {/* Real Creator Profit */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/50 to-mojo-card border-2 border-emerald-500/70 shadow-glow-card text-left md:text-center">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1 md:justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
                Creator Profit
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-emerald-400">
                <AnimatedCounter end={46500} prefix="₹" />
              </div>
              <div className="text-[11px] text-emerald-300/80 font-medium mt-1">71.5% Net Margin</div>
            </div>

          </div>
        </div>

        {/* Transition callout */}
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-mojo-violet/10 border border-mojo-violet/30 text-mojo-violet-light font-heading font-semibold text-xs sm:text-sm shadow-sm">
            <Layers className="w-4 h-4 text-mojo-cyan" />
            <span>MOJO FLOW tracks the complete financial equation automatically.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
