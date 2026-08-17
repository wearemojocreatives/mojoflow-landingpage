'use client';

import { useState } from 'react';
import { Calendar, Bell, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

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
            Payment Due-Date Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Stop guessing when <br />
            <span className="text-gradient-brand">you&apos;re getting paid.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Select your brand payment terms — Net 30, Net 45, Net 60, or Net 90. MOJO FLOW calculates the exact due date and triggers automated reminder states.
          </p>
        </div>

        {/* Interactive Net Terms & Calculator Box */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-mojo-border shadow-2xl space-y-8">
          
          {/* Net Terms Selector Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-mojo-border/60">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Select Payment Terms</span>
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
                  Net {days}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Invoice & Due Date Calculation Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs text-left">
            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
              <div className="text-mojo-dim uppercase text-[10px] mb-1">INVOICE DATE</div>
              <div className="text-base font-bold text-white">15 September 2026</div>
              <div className="text-[11px] text-mojo-dim mt-1">Invoice #MF-2026-014</div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
              <div className="text-mojo-dim uppercase text-[10px] mb-1">PAYMENT TERMS</div>
              <div className="text-base font-bold text-amber-400">Net {netTerms} Days</div>
              <div className="text-[11px] text-mojo-dim mt-1">Agreed Commercial Terms</div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-cyan/40 shadow-glow-card">
              <div className="text-mojo-cyan uppercase text-[10px] font-bold mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                AUTOMATED DUE DATE
              </div>
              <div className="text-lg font-extrabold text-mojo-cyan">{getDueDateText(netTerms)}</div>
              <div className="text-[11px] text-mojo-muted mt-1">Commercial: ₹1,00,000</div>
            </div>
          </div>

          {/* 3 Visual Reminder Alerts */}
          <div className="space-y-3 pt-4 border-t border-mojo-border/60 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Automated Payment Due Reminder States</h4>

            {/* State 1: 7 Days Before */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-amber-300">7 Days Before Due Date</span>
                  <p className="text-[11px] text-mojo-dim">Scheduled reminder notification</p>
                </div>
              </div>
              <span className="font-mono font-semibold text-amber-300">Northstar payment due in 7 days.</span>
            </div>

            {/* State 2: Due Date */}
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-mojo-cyan shrink-0" />
                <div>
                  <span className="font-bold text-mojo-cyan">Payment Due Today</span>
                  <p className="text-[11px] text-mojo-dim">Target collection date reached</p>
                </div>
              </div>
              <span className="font-mono font-bold text-mojo-cyan">₹1,00,000 payment from Northstar is due today.</span>
            </div>

            {/* State 3: After Due Date */}
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <span className="font-bold text-rose-400">Overdue Tracking</span>
                  <p className="text-[11px] text-mojo-dim">Payment past Net terms</p>
                </div>
              </div>
              <span className="font-mono font-bold text-rose-400">₹1,00,000 payment overdue.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
