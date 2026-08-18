'use client';

import { useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Clock, Calendar, Bell, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PaymentIntelligence() {
  const [netTerms, setNetTerms] = useState<number>(60);

  const getDueDateText = (days: number) => {
    if (days === 30) return '15 October 2026';
    if (days === 45) return '30 October 2026';
    if (days === 60) return '14 November 2026';
    if (days === 90) return '14 December 2026';
    return '14 November 2026';
  };

  return (
    <section id="payments" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Due-Date Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Know exactly when <br />
            <span className="text-gradient-brand">you&apos;re due to be paid.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            Select your brand payment terms. MOJO FLOW calculates the exact target payment due date and triggers automated reminder alerts.
          </p>
        </div>

        {/* Interactive Net Terms Box */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-mojo-border shadow-2xl space-y-8 text-left">
          
          {/* Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-mojo-border/60">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Select Brand Payment Terms</span>
            <div className="flex flex-wrap items-center gap-2">
              {[30, 45, 60, 90].map((days) => (
                <button
                  key={days}
                  onClick={() => setNetTerms(days)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                    netTerms === days
                      ? 'bg-amber-500 text-black shadow-glow-violet'
                      : 'bg-mojo-surface-elevated text-mojo-muted hover:text-white border border-mojo-border'
                  }`}
                >
                  NET {days}
                </button>
              ))}
              <span className="px-3 py-2 rounded-xl text-xs font-heading font-bold bg-mojo-card border border-mojo-border/60 text-mojo-dim">
                CUSTOM
              </span>
            </div>
          </div>

          {/* Dynamic Net Calculation Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
              <div className="text-mojo-dim uppercase text-[10px] mb-1">INVOICE DATE</div>
              <div className="text-base font-bold text-white">15 September 2026</div>
              <div className="text-[10px] text-mojo-dim mt-1">Invoice #MF-2026-014</div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
              <div className="text-mojo-dim uppercase text-[10px] mb-1">PAYMENT TERMS</div>
              <div className="text-base font-bold text-amber-400">NET {netTerms} DAYS</div>
              <div className="text-[10px] text-mojo-dim mt-1">Agreed Contract Term</div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-cyan/40 shadow-glow-card">
              <div className="text-mojo-cyan uppercase text-[10px] font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                AUTOMATED DUE DATE
              </div>
              <div className="text-lg font-extrabold text-mojo-cyan">{getDueDateText(netTerms)}</div>
              <div className="text-[10px] text-mojo-muted mt-1">Amount: ₹65,000</div>
            </div>
          </div>

          {/* 3 Visual Reminder Alert States */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Automated Payment Due Reminder States</div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold text-amber-300">7 DAYS BEFORE DUE DATE</span>
              </div>
              <span className="font-mono font-semibold text-white">Northstar payment due: ₹65,000</span>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-mojo-cyan shrink-0" />
                <span className="font-bold text-mojo-cyan">DUE TODAY</span>
              </div>
              <span className="font-mono font-bold text-mojo-cyan">Northstar payment due today: ₹65,000</span>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="font-bold text-rose-400">OVERDUE</span>
              </div>
              <span className="font-mono font-bold text-rose-400">Northstar payment overdue: ₹65,000</span>
            </div>
          </div>

          {/* CRITICAL ACCURACY DISCLAIMER */}
          <div className="p-4 rounded-xl bg-mojo-surface border border-mojo-border/80 text-[11px] text-mojo-muted leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-mojo-emerald shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Direct Brand Payments:</strong> MOJO FLOW does not receive money or process brand payouts. Brands pay creators directly via their standard bank transfers or corporate payouts. MOJO FLOW manages and tracks your invoices, payment terms, due dates, reminder notifications, and payment status.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
