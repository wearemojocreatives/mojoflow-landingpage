'use client';

import { useState } from 'react';
import { PlusCircle, Kanban, Receipt, FileText, TrendingUp, Clock, CheckCircle2, ArrowRight, AlertTriangle, Bell, DollarSign } from 'lucide-react';

export default function FlagshipStory() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { num: 1, title: 'Add Collaboration', badge: 'Step 01' },
    { num: 2, title: 'Manage Work', badge: 'Step 02' },
    { num: 3, title: 'Track Expenses', badge: 'Step 03' },
    { num: 4, title: 'Create Invoice', badge: 'Step 04' },
    { num: 5, title: 'Know Your Profit', badge: 'Step 05' },
    { num: 6, title: 'Track Payment', badge: 'Step 06' },
  ];

  return (
    <section id="workflow" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-violet top-20 left-10 opacity-30 pointer-events-none" />
      <div className="glow-orb-cyan bottom-20 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/15 border border-mojo-violet/30 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Kanban className="w-3.5 h-3.5 text-mojo-cyan" />
            Flagship Product Story
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            One collaboration. <br />
            <span className="text-gradient-brand">The entire business, tracked.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Follow a single brand collaboration through the complete MOJO FLOW operational lifecycle — from initial deal entry to real creator profit and payment due date tracking.
          </p>
        </div>

        {/* 6 Step Stepper Bar */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex justify-between items-center min-w-[700px] border-b border-mojo-border/60 pb-4">
            {steps.map((s) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
                  activeStep === s.num
                    ? 'bg-mojo-violet/20 border border-mojo-violet/50 text-white shadow-glow-violet'
                    : 'text-mojo-muted hover:text-white hover:bg-mojo-surface'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${activeStep === s.num ? 'text-mojo-cyan' : 'text-mojo-dim'}`}>
                  {s.badge}
                </span>
                <span className="text-xs font-bold font-heading">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step Visual Showcase Stage */}
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl border border-mojo-border shadow-2xl overflow-hidden min-h-[460px]">
          
          {/* Header Bar */}
          <div className="bg-[#0C0E17] px-4 py-3 border-b border-mojo-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-mojo-dim">
                app.mojoflow.in/collaborations/northstar-summer#step-0{activeStep}
              </span>
            </div>
            <div className="text-xs font-semibold text-mojo-violet-light flex items-center gap-1">
              Step 0{activeStep} of 06
            </div>
          </div>

          {/* STEP 01 — ADD THE COLLABORATION */}
          {activeStep === 1 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-cyan bg-cyan-500/10 px-2 py-0.5 rounded">
                    Step 01 — Initial Entry
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Add the Collaboration</h3>
                  <p className="text-xs text-mojo-muted">Record the brand, campaign details, commercial value, and deliverables.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-mojo-violet/10 border border-mojo-violet/30 text-mojo-violet-light text-xs font-semibold flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-mojo-cyan" />
                  New Deal Entry
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border space-y-3">
                  <div className="flex justify-between py-1.5 border-b border-mojo-border/40">
                    <span className="text-xs text-mojo-muted font-medium">Brand</span>
                    <span className="text-sm font-bold text-white">Northstar</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-mojo-border/40">
                    <span className="text-xs text-mojo-muted font-medium">Campaign</span>
                    <span className="text-sm font-bold text-white">Summer Collection</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-mojo-border/40">
                    <span className="text-xs text-mojo-muted font-medium">Agreed Commercial</span>
                    <span className="text-sm font-bold text-mojo-emerald">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-mojo-border/40">
                    <span className="text-xs text-mojo-muted font-medium">Deliverables Scope</span>
                    <span className="text-xs font-semibold text-white">2 Reels + 3 Stories</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-xs text-mojo-muted font-medium">Campaign Date</span>
                    <span className="text-xs font-semibold text-mojo-cyan">15 September 2026</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-mojo-surface/60 border border-mojo-border/80 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Deal Summary</h4>
                    <p className="text-xs text-mojo-muted leading-relaxed">
                      Northstar has confirmed the Summer Collection campaign brief. All deliverables and commercial values are logged directly into your workspace.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveStep(2)}
                    className="w-full py-2.5 rounded-lg bg-mojo-violet text-white text-xs font-semibold hover:bg-mojo-violet-light transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Step 02: Manage Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 02 — MANAGE THE WORK */}
          {activeStep === 2 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-violet-light bg-violet-500/10 px-2 py-0.5 rounded">
                    Step 02 — Production Lifecycle
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Manage the Work</h3>
                  <p className="text-xs text-mojo-muted">Track deliverables and campaign status through each operational phase.</p>
                </div>
                <span className="text-xs text-mojo-cyan font-mono">Northstar • Summer Collection</span>
              </div>

              <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Brief Received</div>
                      <div className="text-[10px] text-mojo-dim">Confirmed 12 Sep 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Production Scheduled</div>
                      <div className="text-[10px] text-mojo-dim">Confirmed 14 Sep 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-amber-500/40 shadow-glow-violet">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-amber-400">Content in Production</div>
                      <div className="text-[10px] text-mojo-muted">Shoot & Editing Active</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 opacity-60">
                    <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                    <div>
                      <div className="text-xs font-semibold text-mojo-muted">Draft Submitted</div>
                      <div className="text-[10px] text-mojo-dim">Pending Draft Upload</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 opacity-60">
                    <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                    <div>
                      <div className="text-xs font-semibold text-mojo-muted">Brand Approval</div>
                      <div className="text-[10px] text-mojo-dim">Awaiting Client Sign-off</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-mojo-surface border border-mojo-border/60 opacity-60">
                    <div className="w-5 h-5 rounded-full border border-mojo-dim flex items-center justify-center text-[10px] text-mojo-dim">○</div>
                    <div>
                      <div className="text-xs font-semibold text-mojo-muted">Published</div>
                      <div className="text-[10px] text-mojo-dim">Target Post Date: 15 Sep</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveStep(3)}
                  className="py-2.5 px-5 rounded-lg bg-mojo-violet text-white text-xs font-semibold hover:bg-mojo-violet-light transition-all flex items-center gap-2"
                >
                  <span>Next: Step 03 — Track Expenses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 03 — TRACK EXPENSES */}
          {activeStep === 3 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                    Step 03 — Expense Ledger
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Track Production Expenses</h3>
                  <p className="text-xs text-mojo-muted">Add expenses in real time as campaign production progresses.</p>
                </div>
                <span className="text-xs font-semibold text-rose-400">Total: ₹35,000</span>
              </div>

              <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Photographer</span>
                    <span className="font-semibold text-white">₹8,000</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Videographer</span>
                    <span className="font-semibold text-white">₹12,000</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Studio Rental</span>
                    <span className="font-semibold text-white">₹5,000</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Instagram Ads Amplification</span>
                    <span className="font-semibold text-white">₹3,000</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Audience Giveaways</span>
                    <span className="font-semibold text-white">₹4,000</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-mojo-surface border border-mojo-border/40">
                    <span className="text-mojo-muted">Post-production Editing</span>
                    <span className="font-semibold text-white">₹3,000</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-mojo-border/60 flex justify-between items-center px-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Total Production Cost</span>
                  <span className="text-base font-extrabold text-rose-400">₹35,000</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveStep(4)}
                  className="py-2.5 px-5 rounded-lg bg-mojo-violet text-white text-xs font-semibold hover:bg-mojo-violet-light transition-all flex items-center gap-2"
                >
                  <span>Next: Step 04 — Create Invoice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 04 — CREATE THE INVOICE */}
          {activeStep === 4 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Step 04 — Creator Invoicing System
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Create the Invoice</h3>
                  <p className="text-xs text-mojo-muted">Generate MOJO FLOW&apos;s clean creator invoice with custom Net payment terms.</p>
                </div>
                <div className="text-xs font-mono text-mojo-violet-light border border-mojo-violet/30 px-3 py-1 rounded-lg bg-mojo-violet/10">
                  MOJO FLOW Invoicing System
                </div>
              </div>

              <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border space-y-3 font-mono text-xs">
                <div className="flex justify-between pb-3 border-b border-mojo-border/60">
                  <span className="text-mojo-dim">INVOICE NUMBER</span>
                  <span className="font-bold text-white">#MF-2026-014</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">CLIENT BRAND</span>
                  <span className="font-semibold text-white">Northstar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">CAMPAIGN NAME</span>
                  <span className="font-semibold text-white">Summer Collection</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">COMMERCIAL VALUE</span>
                  <span className="font-bold text-mojo-emerald">₹1,00,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">INVOICE DATE</span>
                  <span className="text-white">15 September 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-mojo-border/40">
                  <span className="text-mojo-muted">PAYMENT TERMS</span>
                  <span className="text-amber-400 font-semibold">Net 60</span>
                </div>
                <div className="flex justify-between pt-2 text-sm">
                  <span className="text-white font-bold">PAYMENT DUE DATE</span>
                  <span className="text-mojo-cyan font-extrabold">14 November 2026</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveStep(5)}
                  className="py-2.5 px-5 rounded-lg bg-mojo-violet text-white text-xs font-semibold hover:bg-mojo-violet-light transition-all flex items-center gap-2"
                >
                  <span>Next: Step 05 — Know Your Profit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 05 — KNOW YOUR PROFIT */}
          {activeStep === 5 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Step 05 — Real Profitability
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Know What You Actually Made</h3>
                  <p className="text-xs text-mojo-muted">MOJO FLOW automatically updates your economics as production costs are added.</p>
                </div>
                <span className="text-xs font-bold text-emerald-400">65% Net Margin</span>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-950/40 via-mojo-card to-emerald-900/20 border-2 border-emerald-500/60 shadow-glow-card space-y-4">
                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3">
                  <span className="text-xs text-mojo-muted font-medium">Total Commercial Value</span>
                  <span className="text-lg font-bold text-white">₹1,00,000</span>
                </div>

                <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3">
                  <span className="text-xs text-rose-400 font-medium">Total Production Costs</span>
                  <span className="text-lg font-bold text-rose-400">− ₹35,000</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Actual Creator Profit
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400">₹65,000</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveStep(6)}
                  className="py-2.5 px-5 rounded-lg bg-mojo-violet text-white text-xs font-semibold hover:bg-mojo-violet-light transition-all flex items-center gap-2"
                >
                  <span>Next: Step 06 — Track Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 06 — TRACK PAYMENT */}
          {activeStep === 6 && (
            <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    Step 06 — Due Date Intelligence
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">Track Payment Due Dates</h3>
                  <p className="text-xs text-mojo-muted">Automated Net 60 timeline alerts ensure you never lose track of due payments.</p>
                </div>
                <span className="text-xs font-semibold text-mojo-cyan">14 Nov 2026 Target</span>
              </div>

              {/* Due Date Timeline */}
              <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border space-y-4">
                <div className="flex items-center justify-between text-xs text-mojo-muted font-mono pb-2 border-b border-mojo-border/40">
                  <span>Invoice Raised: 15 Sep</span>
                  <span className="text-amber-400 font-bold">Net 60 Terms</span>
                  <span>Payment Due: 14 Nov</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Bell className="w-4 h-4 text-amber-400" />
                      <span className="text-white font-medium">7 Days Before Alert:</span>
                    </div>
                    <span className="text-amber-300 font-semibold">Northstar payment due in 7 days (7 Nov)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-mojo-cyan" />
                      <span className="text-white font-medium">Due Date Alert:</span>
                    </div>
                    <span className="text-mojo-cyan font-bold">₹1,00,000 payment from Northstar is due today (14 Nov)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      <span className="text-white font-medium">After Due Date Alert:</span>
                    </div>
                    <span className="text-rose-400 font-semibold">₹1,00,000 payment overdue (Remind Brand)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setActiveStep(1)}
                  className="text-xs text-mojo-muted hover:text-white underline"
                >
                  Restart Workflow Demo
                </button>
                <a
                  href="#waitlist"
                  className="py-2.5 px-6 rounded-lg bg-mojo-violet text-white text-xs font-bold hover:bg-mojo-violet-light transition-all flex items-center gap-2"
                >
                  <span>Get on the Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
