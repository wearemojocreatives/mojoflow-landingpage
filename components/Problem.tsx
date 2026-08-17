'use client';

import { XCircle, CheckCircle, ArrowRight, MessageSquare, FileSpreadsheet, Mail, CreditCard, Receipt, FileText, Smartphone, AlertCircle, Layers } from 'lucide-react';

export default function Problem() {
  const fragmentedTools = [
    { icon: Smartphone, name: 'Instagram & DMs', problem: 'Lost deal negotiations in unread message requests' },
    { icon: MessageSquare, name: 'WhatsApp Threads', problem: 'Unstructured pricing chat without clear scope or contract' },
    { icon: Mail, name: 'Email Attachments', problem: 'Scattered briefs, revision requests, and missing brand assets' },
    { icon: FileSpreadsheet, name: 'Messy Spreadsheets', problem: 'Manual column updates to track campaign deadlines' },
    { icon: FileText, name: 'Rate Cards', problem: 'Static price lists that fail to convey true commercial value' },
    { icon: AlertCircle, name: 'Campaign Tracking', problem: 'No central overview of active vs pending brand deliverables' },
    { icon: Receipt, name: 'Manual Invoices', problem: 'Clunky PDF templates prone to tax and bank details errors' },
    { icon: CreditCard, name: 'Delayed Payments', problem: 'Constantly chasing overdue payouts with zero visibility' },
  ];

  return (
    <section id="problem" className="py-24 bg-[#0B0D16] border-y border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            The Operational Friction
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Creators don’t need more tools. <br />
            <span className="text-gradient-brand">They need one system.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Managing your creator business across fragmented apps leads to lost revenue, delayed invoices, missed deadlines, and endless administrative burnout.
          </p>
        </div>

        {/* Visual Workflow Consolidation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Fragmented Reality (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-mojo-border/60">
              <span className="text-xs font-mono font-semibold uppercase text-rose-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-500" />
                Fragmented Workflow Chaos
              </span>
              <span className="text-xs text-mojo-dim">8+ Disconnected Tools</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fragmentedTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-mojo-card border border-mojo-border/60 hover:border-rose-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white">{tool.name}</span>
                    </div>
                    <p className="text-[11px] text-mojo-dim leading-tight">{tool.problem}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Transition (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-6 lg:my-0">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mojo-violet to-mojo-cyan p-0.5 shadow-glow-violet animate-pulse-glow">
              <div className="w-full h-full rounded-[14px] bg-[#0B0D16] flex items-center justify-center text-white">
                <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0 text-mojo-violet-light" />
              </div>
            </div>
            <span className="mt-3 text-xs font-heading font-bold text-gradient-brand tracking-wider uppercase text-center">
              Consolidated By <br /> MOJO FLOW
            </span>
          </div>

          {/* Right Side: MOJO FLOW Creator OS (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-mojo-card to-mojo-surface-elevated p-6 rounded-2xl border border-mojo-violet/40 shadow-glow-card space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mojo-violet/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-3 border-b border-mojo-border">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-mojo-cyan" />
                <span className="font-heading font-bold text-sm text-white">MOJO FLOW Creator OS</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-mojo-emerald/15 text-mojo-emerald border border-mojo-emerald/30">
                1 Operating System
              </span>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-mojo-surface border border-mojo-border/60">
                <CheckCircle className="w-5 h-5 text-mojo-emerald shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Centralized Commercial Profile</h4>
                  <p className="text-[11px] text-mojo-muted">Live rate cards, package pricing, and structured inquiry links.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-mojo-surface border border-mojo-border/60">
                <CheckCircle className="w-5 h-5 text-mojo-emerald shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Campaign Deliverables Pipeline</h4>
                  <p className="text-[11px] text-mojo-muted">Track deliverables, deadlines, and brand approvals from brief to post.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-mojo-surface border border-mojo-border/60">
                <CheckCircle className="w-5 h-5 text-mojo-emerald shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Razorpay Invoicing & Billing</h4>
                  <p className="text-[11px] text-mojo-muted">Automated GST compliance invoices and subscription billing history.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-mojo-surface border border-mojo-border/60">
                <CheckCircle className="w-5 h-5 text-mojo-emerald shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Creator Business Insights</h4>
                  <p className="text-[11px] text-mojo-muted">Total clarity on active deals, monthly revenue, and commercial growth trends.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-mojo-violet/10 border border-mojo-violet/30 text-center">
              <p className="text-xs text-mojo-violet-light font-medium">
                "Execute your entire business from one unified operating system."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
