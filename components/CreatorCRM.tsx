'use client';

import { Users, ArrowRight, Building2, Layers, Receipt, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function CreatorCRM() {
  const pipelineSteps = [
    'Brands',
    'Contacts',
    'Collaborations',
    'Campaigns',
    'Deliverables',
    'Commercials',
    'Invoices',
    'Payments',
    'Profit',
  ];

  return (
    <section id="crm" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-cyan/10 border border-mojo-cyan/20 text-mojo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Purpose-Built CRM Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            A CRM that understands <br />
            <span className="text-gradient-brand">creators.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Generic CRMs force you to deal with leads, companies, and sales pipelines. MOJO FLOW structures your CRM around the actual operational pipeline of a creator business.
          </p>
        </div>

        {/* Pipeline Progression Ribbon */}
        <div className="max-w-5xl mx-auto glass-panel p-6 rounded-2xl border border-mojo-border mb-12 shadow-xl">
          <div className="text-xs font-bold text-mojo-muted uppercase tracking-wider mb-4 text-center">
            The MOJO FLOW Creator Business Pipeline
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-lg border ${
                  step === 'Profit'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold'
                    : 'bg-mojo-surface-elevated text-mojo-text border-mojo-border'
                }`}>
                  {step}
                </span>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-mojo-dim shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Realistic Product Brand Record UI Mockup */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-mojo-border shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#0C0E17] px-5 py-3.5 border-b border-mojo-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-mojo-violet-light" />
              <span className="text-xs font-mono text-white font-bold">Brand CRM Record</span>
            </div>
            <span className="text-xs text-mojo-emerald font-semibold">Active Client Relationship</span>
          </div>

          <div className="p-6 sm:p-8 bg-[#0B0D16] space-y-6 text-left">
            {/* Top Brand Identity Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-mojo-border/60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 font-extrabold text-white text-xl flex items-center justify-center border border-purple-400/30">
                  NS
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold font-heading text-white">Northstar</h3>
                  <p className="text-xs text-mojo-muted">Brand Contact: Sarah Miller (Marketing Lead • sarah@northstar.com)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-mojo-surface border border-mojo-border text-xs font-semibold text-mojo-muted">
                  6 Total Collaborations
                </span>
              </div>
            </div>

            {/* Brand Performance Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                <div className="text-xs text-mojo-dim uppercase font-semibold">Total Commercials</div>
                <div className="text-2xl font-bold font-heading text-white mt-1">₹4,80,000</div>
                <div className="text-[11px] text-mojo-muted mt-1">6 Completed & Active Deals</div>
              </div>

              <div className="p-4 rounded-xl bg-mojo-card border border-emerald-500/30">
                <div className="text-xs text-emerald-400 uppercase font-bold">Total Creator Profit</div>
                <div className="text-2xl font-bold font-heading text-emerald-400 mt-1">₹1,42,000</div>
                <div className="text-[11px] text-emerald-300/80 mt-1">Net Creator Earnings</div>
              </div>

              <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border">
                <div className="text-xs text-amber-400 uppercase font-semibold">Outstanding Invoices</div>
                <div className="text-2xl font-bold font-heading text-amber-400 mt-1">2 Invoices</div>
                <div className="text-[11px] text-mojo-dim mt-1">Net 60 Terms Active</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
