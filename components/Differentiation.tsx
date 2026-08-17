'use client';

import { ShieldCheck, Zap, Lock, Award, Check, X } from 'lucide-react';

export default function Differentiation() {
  const comparisonRows = [
    {
      feature: 'Brand Relationships',
      mojo: 'Direct ownership of brand relationships & client contacts.',
      marketplace: 'Platform controls brand access; creators trapped in walled gardens.',
    },
    {
      feature: 'Commercial Control',
      mojo: 'Creator-controlled pricing, custom rate cards, and package terms.',
      marketplace: 'Standardized rates forcing price competition.',
    },
    {
      feature: 'Operational Business',
      mojo: 'Full operating system: Profile, Commercials, Campaigns & Invoicing.',
      marketplace: 'Basic gig listing board without business management.',
    },
    {
      feature: 'Invoicing & Payouts',
      mojo: 'Structured GST invoicing & Razorpay subscription billing.',
      marketplace: 'Platform payout delays and dependency on middleman payouts.',
    },
    {
      feature: 'Creator Data & Privacy',
      mojo: '100% private to your workspace. Your commercial data belongs to you.',
      marketplace: 'Public marketplace profile listed as searchable inventory.',
    },
  ];

  return (
    <section id="differentiation" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-cyan/10 border border-mojo-cyan/20 text-mojo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Product Positioning
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Your Operating System. <br />
            <span className="text-gradient-brand">Not an influencer marketplace.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Marketplaces position creators as inventory. MOJO FLOW provides the software infrastructure to run your creator business independently, professionally, and on your terms.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-4xl mx-auto bg-mojo-card rounded-2xl border border-mojo-border overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-[#0E101D] p-4 sm:p-5 border-b border-mojo-border font-heading text-xs sm:text-sm font-bold">
            <div className="col-span-4 text-mojo-muted uppercase tracking-wider">Operational Pillar</div>
            <div className="col-span-4 text-mojo-violet-light flex items-center gap-1.5 justify-center sm:justify-start">
              <Zap className="w-4 h-4 text-mojo-violet fill-mojo-violet/20" />
              <span>MOJO FLOW OS</span>
            </div>
            <div className="col-span-4 text-mojo-dim flex items-center gap-1.5 justify-center sm:justify-start">
              <Lock className="w-4 h-4 text-rose-400" />
              <span>Influencer Marketplace</span>
            </div>
          </div>

          <div className="divide-y divide-mojo-border/60">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-mojo-surface-elevated/40 transition-colors">
                <div className="col-span-4 font-semibold text-white pr-2">
                  {row.feature}
                </div>

                {/* MOJO FLOW column */}
                <div className="col-span-4 text-mojo-text flex items-start gap-2 pr-2">
                  <div className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-mojo-text leading-snug">{row.mojo}</span>
                </div>

                {/* Marketplace column */}
                <div className="col-span-4 text-mojo-dim flex items-start gap-2">
                  <div className="p-0.5 rounded bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-mojo-dim leading-snug">{row.marketplace}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-mojo-violet/15 via-mojo-surface to-mojo-cyan/15 border border-mojo-violet/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-mojo-violet/20 border border-mojo-violet/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-mojo-violet-light" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Commercial & Business Ownership</h4>
              <p className="text-xs text-mojo-muted">Your rates, commercial packages, and client relationships remain 100% yours.</p>
            </div>
          </div>
          <a
            href="#waitlist"
            className="px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-white bg-mojo-violet hover:bg-mojo-violet-light transition-all whitespace-nowrap"
          >
            Get on the Waitlist
          </a>
        </div>

      </div>
    </section>
  );
}
