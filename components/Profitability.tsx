'use client';

import { TrendingUp, Award } from 'lucide-react';

export default function Profitability() {
  return (
    <section id="profitability" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      {/* Glow orb */}
      <div className="glow-orb-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Core Product USP
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Revenue is not profit.
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            MOJO FLOW shows you what every collaboration actually makes you.
          </p>
        </div>

        {/* Visual Formula Block */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border-2 border-emerald-500/50 shadow-glow-card relative overflow-hidden">
          <div className="text-center space-y-8">
            
            <div className="inline-block text-xs font-mono text-mojo-dim uppercase tracking-widest border-b border-mojo-border/60 pb-2">
              REAL COLLABORATION ECONOMICS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                <div className="text-xs text-mojo-dim uppercase font-semibold mb-1">TOTAL COMMERCIALS</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">₹1,00,000</div>
              </div>

              <div className="text-2xl font-bold text-rose-400">
                − ₹35,000 <span className="text-xs text-mojo-dim block font-sans">PRODUCTION COST</span>
              </div>

              {/* VISUALLY DOMINANT NUMBER */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-mojo-card to-emerald-900/30 border-2 border-emerald-500 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-1 flex items-center justify-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  CREATOR PROFIT
                </div>
                <div className="text-4xl sm:text-5xl font-black font-heading text-emerald-400 tracking-tight">₹65,000</div>
                <div className="text-xs text-emerald-300/80 font-bold mt-2">65% Net Margin</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-mojo-muted max-w-xl mx-auto pt-4 border-t border-mojo-border/60">
              MOJO FLOW automatically keeps your collaboration economics updated as you add expenses so you always know your true bottom line.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
