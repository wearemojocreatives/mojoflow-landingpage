'use client';

import { useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import {
  Kanban,
  CheckCircle2,
  Clock,
  PlusCircle,
  Receipt,
  TrendingUp,
  Bell,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  DollarSign,
  FileText,
} from 'lucide-react';

export default function InteractiveCollaboration() {
  const [activeTab, setActiveTab] = useState<'overview' | 'production' | 'expenses' | 'invoice' | 'payment' | 'profit'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'production', label: 'Production' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'invoice', label: 'Invoice' },
    { id: 'payment', label: 'Payment' },
    { id: 'profit', label: 'Profit' },
  ] as const;

  const expensesList = [
    { item: 'Photographer', cost: 4500 },
    { item: 'Videographer', cost: 6000 },
    { item: 'Studio Rental', cost: 3000 },
    { item: 'Travel & Transport', cost: 1500 },
    { item: 'Instagram Ads Amplification', cost: 2000 },
    { item: 'Audience Giveaways', cost: 1500 },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb-violet top-20 left-10 opacity-30 pointer-events-none" />
      <div className="glow-orb-cyan bottom-20 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/15 border border-mojo-violet/30 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Kanban className="w-3.5 h-3.5 text-mojo-cyan" />
            Simulated Creator Workspace
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            One collaboration. <br />
            <span className="text-gradient-brand">Everything connected.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            Click through the workspace tabs to see how MOJO FLOW manages a brand deal from brief entry to invoice, payment tracking, and creator profit.
          </p>
        </div>

        {/* Interactive Workspace Showcase Stage */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl border border-mojo-border shadow-2xl overflow-hidden min-h-[480px]">
          
          {/* Top Window Chrome Header */}
          <div className="bg-[#0C0E17] px-4 py-3.5 border-b border-mojo-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-mojo-dim">
                app.mojoflow.in/collaborations/northstar#tab={activeTab}
              </span>
            </div>

            {/* Interactive Tab Selector Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-mojo-violet text-white shadow-glow-violet'
                      : 'text-mojo-muted hover:text-white hover:bg-mojo-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-cyan bg-cyan-500/10 px-2 py-0.5 rounded">
                    Collaboration Workspace
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-white mt-1">Northstar</h3>
                  <p className="text-xs text-mojo-muted">Summer Collection Campaign</p>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Status: In Production
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border space-y-2">
                  <div className="text-[11px] text-mojo-dim font-bold uppercase">Deliverables Scope</div>
                  <div className="text-lg font-bold text-white">2 Reels + 3 Stories</div>
                  <div className="text-[11px] text-mojo-muted">Instagram Campaign Format</div>
                </div>

                <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border space-y-2">
                  <div className="text-[11px] text-mojo-dim font-bold uppercase">Agreed Commercial</div>
                  <div className="text-2xl font-extrabold text-white">
                    <AnimatedCounter end={65000} prefix="₹" />
                  </div>
                  <div className="text-[11px] text-mojo-emerald font-semibold">Net 60 Terms Agreed</div>
                </div>

                <div className="p-5 rounded-2xl bg-mojo-surface border border-mojo-border flex flex-col justify-between space-y-3">
                  <div className="text-[11px] text-mojo-dim font-bold uppercase">Workflow Actions</div>
                  <button
                    onClick={() => setActiveTab('production')}
                    className="w-full py-2.5 rounded-xl bg-mojo-violet text-white text-xs font-bold hover:bg-mojo-violet-light transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Production Status</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTION */}
          {activeTab === 'production' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-violet-light bg-violet-500/10 px-2 py-0.5 rounded">
                    Production Timeline
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Northstar — Summer Collection</h3>
                </div>
                <span className="text-xs text-mojo-cyan font-mono">Active Workflow</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-emerald-500/30">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Brief Received</div>
                    <div className="text-[10px] text-mojo-dim">Confirmed 12 Sep 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-emerald-500/30">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Production Scheduled</div>
                    <div className="text-[10px] text-mojo-dim">Confirmed 14 Sep 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-amber-500/40 shadow-glow-violet">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                  <div>
                    <div className="text-xs font-bold text-amber-400">Content In Production</div>
                    <div className="text-[10px] text-mojo-muted">Shoot & Edit Active</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-mojo-border/50 opacity-60">
                  <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                  <div>
                    <div className="text-xs font-semibold text-mojo-muted">Draft Submitted</div>
                    <div className="text-[10px] text-mojo-dim">Pending Review</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-mojo-border/50 opacity-60">
                  <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                  <div>
                    <div className="text-xs font-semibold text-mojo-muted">Brand Approval</div>
                    <div className="text-[10px] text-mojo-dim">Awaiting Sign-off</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-mojo-surface border border-mojo-border/50 opacity-60">
                  <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                  <div>
                    <div className="text-xs font-semibold text-mojo-muted">Published</div>
                    <div className="text-[10px] text-mojo-dim">Target Post Date: 15 Sep</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXPENSES */}
          {activeTab === 'expenses' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                    Production Expenses Ledger
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Campaign Costs</h3>
                </div>
                <span className="text-xs font-bold text-rose-400">Total: ₹18,500</span>
              </div>

              <div className="p-4 rounded-2xl bg-mojo-card border border-mojo-border space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {expensesList.map((exp, idx) => (
                    <div key={idx} className="flex justify-between p-2.5 rounded-xl bg-mojo-surface border border-mojo-border/40">
                      <span className="text-mojo-muted font-medium">{exp.item}</span>
                      <span className="font-mono font-bold text-white">₹{exp.cost.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-mojo-border/60 flex justify-between items-center px-2">
                  <span className="text-xs font-bold text-white uppercase">Total Expenses</span>
                  <span className="text-xl font-extrabold font-heading text-rose-400">₹18,500</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INVOICE */}
          {activeTab === 'invoice' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Creator Invoicing System
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Invoice #MF-2026-014</h3>
                </div>
                <span className="text-xs font-mono text-mojo-cyan border border-mojo-cyan/30 px-3 py-1 rounded-lg bg-cyan-500/10">
                  MOJO FLOW Creator Invoice
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-mojo-card border border-mojo-border space-y-3 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">CLIENT BRAND</span>
                  <span className="font-bold text-white">Northstar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">INVOICE AMOUNT</span>
                  <span className="font-bold text-mojo-emerald text-sm">₹65,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">PAYMENT TERMS</span>
                  <span className="text-amber-400 font-bold">NET 60</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-mojo-muted">PAYMENT DUE DATE</span>
                  <span className="text-mojo-cyan font-bold">14 November 2026</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PAYMENT */}
          {activeTab === 'payment' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    Payment Timeline & Due-Date Reminders
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">NET 60 Due Date Tracking</h3>
                </div>
                <span className="text-xs font-mono text-mojo-cyan">Target: 14 Nov 2026</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Bell className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white">7 DAYS BEFORE</span>
                  </div>
                  <span className="font-mono font-semibold text-amber-300">Northstar payment due in 7 days</span>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-mojo-cyan" />
                    <span className="font-bold text-white">DUE TODAY</span>
                  </div>
                  <span className="font-mono font-bold text-mojo-cyan">₹65,000 payment from Northstar is due today</span>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span className="font-bold text-white">OVERDUE</span>
                  </div>
                  <span className="font-mono font-bold text-rose-400">₹65,000 payment overdue (Send Reminder)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PROFIT */}
          {activeTab === 'profit' && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Actual Collaboration Economics
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Creator Take-Home Profit</h3>
                </div>
                <span className="text-xs font-bold text-emerald-400">71.5% Net Margin</span>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-mojo-card to-emerald-900/20 border-2 border-emerald-500/60 shadow-glow-card space-y-4">
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3 text-xs">
                  <span className="text-mojo-muted font-medium">Gross Commercial</span>
                  <span className="text-lg font-bold text-white">₹65,000</span>
                </div>

                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3 text-xs">
                  <span className="text-rose-400 font-medium">Production Expenses</span>
                  <span className="text-lg font-bold text-rose-400">− ₹18,500</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Creator Profit
                  </span>
                  <span className="text-3xl sm:text-4xl font-black font-heading text-emerald-400">₹46,500</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
