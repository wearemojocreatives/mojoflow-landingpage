'use client';

import { Users, Zap, Check, ArrowRight } from 'lucide-react';

export default function CRMComparison() {
  const traditionalPipeline = ['Lead', 'Contact', 'Opportunity', 'Deal', 'Won'];
  const mojoPipeline = ['Brand', 'Collaboration', 'Commercial', 'Production', 'Expenses', 'Invoice', 'Payment', 'Profit'];

  return (
    <section className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-cyan/10 border border-mojo-cyan/20 text-mojo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Category Differentiation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Creator-side CRM <br />
            <span className="text-gradient-brand">vs Generic CRM.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            CRMs such as Zoho CRM, Bigin, HubSpot, and Pipedrive are built to manage corporate sales funnels. MOJO FLOW is a creator-side CRM specifically built around brand deals, production costs, and creator profit.
          </p>
        </div>

        {/* Visual Pipeline Comparison */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Traditional CRM Box */}
          <div className="p-6 rounded-2xl bg-mojo-card border border-mojo-border text-left space-y-3">
            <div className="text-xs font-bold text-mojo-dim uppercase tracking-wider">Traditional Corporate CRM Pipeline</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-mojo-muted">
              {traditionalPipeline.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-mojo-surface border border-mojo-border text-mojo-dim">
                    {step}
                  </span>
                  {idx < traditionalPipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-mojo-dim/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MOJO FLOW Creator CRM Box */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border-2 border-mojo-violet/50 shadow-glow-card text-left space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold text-mojo-cyan uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-mojo-cyan fill-mojo-cyan/20" />
                MOJO FLOW Creator Business Pipeline
              </div>
              <span className="text-xs text-mojo-emerald font-bold">Purpose-Built for Creators</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
              {mojoPipeline.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 rounded-lg border ${
                    step === 'Profit'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-extrabold'
                      : 'bg-mojo-surface-elevated text-mojo-text border-mojo-border'
                  }`}>
                    {step}
                  </span>
                  {idx < mojoPipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-mojo-dim" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm font-heading font-semibold text-mojo-violet-light">
              CRM built for the business behind creator partnerships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
