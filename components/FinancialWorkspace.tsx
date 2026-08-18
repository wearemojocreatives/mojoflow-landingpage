'use client';

import AnimatedCounter from './AnimatedCounter';
import { DollarSign, Receipt, FileSpreadsheet, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

export default function FinancialWorkspace() {
  return (
    <section className="py-24 bg-[#0B0D16] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            Financial Intelligence System
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            See the money behind <br />
            <span className="text-gradient-brand">every collaboration.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            Commercial value, campaign costs, invoices, due dates and actual net profit connected into one real-time workspace.
          </p>
        </div>

        {/* Financial Flow Board */}
        <div className="max-w-5xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-mojo-border shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            {/* Commercial */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border space-y-2">
              <div className="flex items-center justify-between text-mojo-dim text-xs font-bold uppercase">
                <span>COMMERCIAL</span>
                <DollarSign className="w-4 h-4 text-mojo-cyan" />
              </div>
              <div className="text-2xl font-extrabold text-white font-heading">
                <AnimatedCounter end={65000} prefix="₹" />
              </div>
              <div className="text-[10px] text-mojo-muted">Agreed Brand Fee</div>
            </div>

            {/* Expenses */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between text-rose-400 text-xs font-bold uppercase">
                <span>EXPENSES</span>
                <FileSpreadsheet className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl font-extrabold text-rose-400 font-heading">
                <AnimatedCounter end={18500} prefix="₹" />
              </div>
              <div className="text-[10px] text-mojo-muted">Production Costs</div>
            </div>

            {/* Invoice */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border space-y-2">
              <div className="flex items-center justify-between text-mojo-dim text-xs font-bold uppercase">
                <span>INVOICE</span>
                <Receipt className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-white font-heading">
                <AnimatedCounter end={65000} prefix="₹" />
              </div>
              <div className="text-[10px] text-amber-400 font-mono font-semibold">#MF-2026-014 (Net 60)</div>
            </div>

            {/* Payment Due */}
            <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-cyan/40 space-y-2">
              <div className="flex items-center justify-between text-mojo-cyan text-xs font-bold uppercase">
                <span>PAYMENT DUE</span>
                <Calendar className="w-4 h-4 text-mojo-cyan" />
              </div>
              <div className="text-xl font-extrabold text-mojo-cyan font-heading">
                14 NOV 2026
              </div>
              <div className="text-[10px] text-mojo-muted">NET 60 Due Date</div>
            </div>

          </div>

          {/* Connected Creator Profit Highlight Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-mojo-card to-emerald-900/30 border-2 border-emerald-500/70 shadow-glow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center justify-center sm:justify-start gap-1.5">
                <TrendingUp className="w-4 h-4" />
                NET CREATOR PROFIT
              </div>
              <p className="text-xs text-mojo-muted mt-1">
                Commercial (₹65,000) − Production Expenses (₹18,500)
              </p>
            </div>

            <div className="text-4xl sm:text-5xl font-black font-heading text-emerald-400 tracking-tight">
              <AnimatedCounter end={46500} prefix="₹" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
