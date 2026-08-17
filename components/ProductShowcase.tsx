'use client';

import { useState } from 'react';
import { LayoutDashboard, Tag, Kanban, Receipt, TrendingUp, Sparkles, CheckCircle2, Clock, DollarSign, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'commercials' | 'campaigns' | 'financials'>('dashboard');

  return (
    <section id="showcase" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      <div className="glow-orb-violet top-1/3 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
            Software Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Engineered Like <br />
            <span className="text-gradient-brand">High-Performance Software</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Experience how MOJO FLOW brings clarity, speed, and precision to your daily creator business operations.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-mojo-surface border border-mojo-border gap-1 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'bg-mojo-violet text-white shadow-glow-violet'
                  : 'text-mojo-muted hover:text-white hover:bg-mojo-surface-elevated'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Creator Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('commercials')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'commercials'
                  ? 'bg-mojo-violet text-white shadow-glow-violet'
                  : 'text-mojo-muted hover:text-white hover:bg-mojo-surface-elevated'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Commercial Profile & Rates</span>
            </button>

            <button
              onClick={() => setActiveTab('campaigns')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'campaigns'
                  ? 'bg-mojo-violet text-white shadow-glow-violet'
                  : 'text-mojo-muted hover:text-white hover:bg-mojo-surface-elevated'
              }`}
            >
              <Kanban className="w-4 h-4" />
              <span>Campaign Board</span>
            </button>

            <button
              onClick={() => setActiveTab('financials')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'financials'
                  ? 'bg-mojo-violet text-white shadow-glow-violet'
                  : 'text-mojo-muted hover:text-white hover:bg-mojo-surface-elevated'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Invoicing & Billing</span>
            </button>
          </div>
        </div>

        {/* Tab Mockup Display Box */}
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl border border-mojo-border shadow-2xl overflow-hidden min-h-[480px]">
          {/* Header OS Browser Strip */}
          <div className="bg-[#0C0E17] px-4 py-3 border-b border-mojo-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-mojo-dim">
                app.mojoflow.in/
                <span className="text-mojo-violet-light font-bold">{activeTab}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs text-mojo-emerald font-mono">Live Workspace</span>
            </div>
          </div>

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="p-6 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-mojo-border/60">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">August Commercial Overview</h3>
                  <p className="text-xs text-mojo-muted">Real-time creator revenue, pending deliverables, and brand pipeline.</p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-mojo-surface border border-mojo-border text-xs font-semibold text-mojo-cyan flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Q3 2026 Season
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                  <div className="text-xs text-mojo-dim uppercase font-semibold">Cleared Revenue</div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">₹4,85,000</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +28% vs July
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                  <div className="text-xs text-mojo-dim uppercase font-semibold">Active Collaborations</div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">6 Brands</div>
                  <div className="text-[11px] text-mojo-cyan mt-1">12 Total Deliverables</div>
                </div>

                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                  <div className="text-xs text-mojo-dim uppercase font-semibold">Open Pitch Pipeline</div>
                  <div className="text-2xl font-bold font-heading text-mojo-violet-light mt-1">₹6,20,000</div>
                  <div className="text-[11px] text-mojo-muted mt-1">4 Deals Pending Approval</div>
                </div>
              </div>

              {/* Monthly Visual Bar Representation */}
              <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Monthly Revenue Trend</h4>
                  <span className="text-xs text-mojo-emerald font-semibold">Target: ₹6,00,000 (81% Achieved)</span>
                </div>
                <div className="grid grid-cols-6 gap-2 items-end h-32 pt-4 border-t border-mojo-border/40">
                  {[
                    { month: 'Mar', val: '65%', amt: '₹3.2L' },
                    { month: 'Apr', val: '72%', amt: '₹3.6L' },
                    { month: 'May', val: '58%', amt: '₹2.9L' },
                    { month: 'Jun', val: '80%', amt: '₹4.0L' },
                    { month: 'Jul', val: '88%', amt: '₹4.4L' },
                    { month: 'Aug', val: '96%', amt: '₹4.85L', highlight: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[10px] font-mono text-mojo-dim">{item.amt}</span>
                      <div
                        style={{ height: item.val }}
                        className={`w-full rounded-t-lg transition-all ${
                          item.highlight
                            ? 'bg-gradient-to-t from-mojo-violet to-mojo-cyan shadow-glow-violet'
                            : 'bg-mojo-surface-elevated hover:bg-mojo-border'
                        }`}
                      />
                      <span className="text-[11px] font-semibold text-mojo-muted">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMMERCIALS & RATES */}
          {activeTab === 'commercials' && (
            <div className="p-6 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Commercial Profile & Rate Cards</h3>
                  <p className="text-xs text-mojo-muted">Public pricing packages, usage rights, and deal structures.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-mojo-violet/15 text-mojo-violet-light text-xs font-semibold border border-mojo-violet/30 flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Share Rate Card Link
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-cyan bg-cyan-500/10 px-2 py-0.5 rounded">
                      Short-Form Content
                    </span>
                    <h4 className="text-base font-bold text-white mt-2">Instagram Reel (60s)</h4>
                    <div className="text-2xl font-extrabold text-white mt-1">₹1,50,000</div>
                    <p className="text-xs text-mojo-muted mt-2">Includes concept scripting, 4K production, color grading, and 30-day digital usage rights.</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-mojo-border/60 text-[11px] text-mojo-dim">
                    Turnaround: 4 Business Days
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-mojo-card border border-mojo-violet/50 shadow-glow-violet flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-mojo-violet text-white text-[9px] font-bold uppercase tracking-wider rounded-bl-lg">
                    POPULAR
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-violet-light bg-violet-500/10 px-2 py-0.5 rounded">
                      Brand Campaign Bundle
                    </span>
                    <h4 className="text-base font-bold text-white mt-2">Reel + 3x Story Series</h4>
                    <div className="text-2xl font-extrabold text-white mt-1">₹2,10,000</div>
                    <p className="text-xs text-mojo-muted mt-2">1x Instagram Reel + 3x Story slides with interactive sticker links & link-in-bio inclusion.</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-mojo-border/60 text-[11px] text-mojo-violet-light font-medium">
                    Includes 60-day digital ad amplification rights
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-mojo-card border border-mojo-border flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mojo-amber bg-amber-500/10 px-2 py-0.5 rounded">
                      Long-Form Video
                    </span>
                    <h4 className="text-base font-bold text-white mt-2">YouTube Dedicated Video</h4>
                    <div className="text-2xl font-extrabold text-white mt-1">₹3,50,000</div>
                    <p className="text-xs text-mojo-muted mt-2">Full dedicated 8–12 min review/integration, custom thumbnail, pinned comment, & description links.</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-mojo-border/60 text-[11px] text-mojo-dim">
                    Turnaround: 7 Business Days
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CAMPAIGNS */}
          {activeTab === 'campaigns' && (
            <div className="p-6 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Active Campaign Board</h3>
                  <p className="text-xs text-mojo-muted">Track deliverables across pitch, script, approval, and live status.</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-mojo-surface-elevated text-xs font-semibold text-mojo-muted">
                  6 Active Deals
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Col 1 */}
                <div className="p-3 rounded-xl bg-mojo-surface/60 border border-mojo-border space-y-3">
                  <div className="text-xs font-bold text-mojo-muted uppercase tracking-wider flex items-center justify-between">
                    <span>Pitch & Brief (2)</span>
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="p-3 rounded-lg bg-mojo-card border border-mojo-border/80">
                    <div className="text-xs font-bold text-white">Samsung Galaxy Launch</div>
                    <div className="text-[11px] text-mojo-dim mt-1">Commercial: ₹2,50,000</div>
                    <div className="mt-2 text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded inline-block">Reviewing Specs</div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="p-3 rounded-xl bg-mojo-surface/60 border border-mojo-border space-y-3">
                  <div className="text-xs font-bold text-mojo-muted uppercase tracking-wider flex items-center justify-between">
                    <span>In Production (1)</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <div className="p-3 rounded-lg bg-mojo-card border border-mojo-border/80">
                    <div className="text-xs font-bold text-white">ASUS ROG Setup Video</div>
                    <div className="text-[11px] text-mojo-dim mt-1">Commercial: ₹3,50,000</div>
                    <div className="mt-2 text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded inline-block">Editing Reel</div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="p-3 rounded-xl bg-mojo-surface/60 border border-mojo-border space-y-3">
                  <div className="text-xs font-bold text-mojo-muted uppercase tracking-wider flex items-center justify-between">
                    <span>Brand Approval (2)</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <div className="p-3 rounded-lg bg-mojo-card border border-mojo-border/80">
                    <div className="text-xs font-bold text-white">Spotify India Integration</div>
                    <div className="text-[11px] text-mojo-dim mt-1">Commercial: ₹1,80,000</div>
                    <div className="mt-2 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded inline-block">Draft Sent</div>
                  </div>
                </div>

                {/* Col 4 */}
                <div className="p-3 rounded-xl bg-mojo-surface/60 border border-mojo-border space-y-3">
                  <div className="text-xs font-bold text-mojo-muted uppercase tracking-wider flex items-center justify-between">
                    <span>Ready To Post (1)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="p-3 rounded-lg bg-mojo-card border border-mojo-violet/40 shadow-glow-violet">
                    <div className="text-xs font-bold text-white">Nike Tech Fleece Campaign</div>
                    <div className="text-[11px] text-mojo-dim mt-1">Commercial: ₹2,20,000</div>
                    <div className="mt-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Approved by Brand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FINANCIALS */}
          {activeTab === 'financials' && (
            <div className="p-6 bg-[#0B0D16] space-y-6 text-left animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-mojo-border/60">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Razorpay Invoicing & Billing History</h3>
                  <p className="text-xs text-mojo-muted">Automated GST compliance invoices and subscription billing history.</p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Razorpay Verified
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-mojo-dim">INV-2026-089</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase">PAID</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Nike India Commercial — Q3 Campaign</div>
                    <div className="text-xs text-mojo-dim">GSTIN: 27AABCM1234H1Z0 • Paid on 14 Aug 2026</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-white">₹2,59,600</div>
                    <div className="text-[11px] text-mojo-dim">(Base: ₹2,20,000 + 18% GST)</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-mojo-dim">INV-2026-084</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 text-[10px] font-bold uppercase">PENDING</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Spotify India Podcast Integration</div>
                    <div className="text-xs text-mojo-dim">Payment Link Active • Due in 5 Days</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-amber-400">₹2,12,400</div>
                    <div className="text-[11px] text-mojo-dim">(Base: ₹1,80,000 + 18% GST)</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-mojo-dim">SUB-MF-PRO</span>
                      <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 text-[10px] font-bold uppercase">SUBSCRIPTION</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">MOJO FLOW Creator Pro Plan</div>
                    <div className="text-xs text-mojo-dim">Billed Annually via Razorpay Subscription</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-white">₹14,999 / year</div>
                    <div className="text-[11px] text-mojo-emerald">Next billing: 15 Aug 2027</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
