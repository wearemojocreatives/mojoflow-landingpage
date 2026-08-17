'use client';

import { Zap, Users, Check, Minus } from 'lucide-react';

export default function CRMComparison() {
  const comparisonRows = [
    { generic: 'Contacts', mojo: 'Brands & Brand Contacts' },
    { generic: 'Sales Pipeline', mojo: 'Collaboration Pipeline' },
    { generic: 'Deals', mojo: 'Brand Collaborations' },
    { generic: 'Activities', mojo: 'Campaign Deliverables' },
    { generic: 'Deal Value', mojo: 'Commercial Value' },
    { generic: 'Generic Expenses', mojo: 'Production Expenses' },
    { generic: 'Generic Invoices', mojo: 'Creator Invoices' },
    { generic: 'Revenue', mojo: 'Commercial Revenue' },
    { generic: '—', mojo: 'Creator Profit', highlight: true },
    { generic: '—', mojo: 'Payment Due Tracking', highlight: true },
    { generic: '—', mojo: 'Net 30 / 45 / 60 / 90', highlight: true },
    { generic: '—', mojo: 'Collaboration Profitability', highlight: true },
  ];

  return (
    <section id="why-mojo" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-cyan/10 border border-mojo-cyan/20 text-mojo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Category Perspective
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Why not just use a CRM?
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            You can. But generic CRMs weren&apos;t designed around the economics of a creator collaboration.
          </p>
        </div>

        {/* Category Context Copy */}
        <div className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl bg-mojo-surface border border-mojo-border text-center text-xs sm:text-sm text-mojo-muted leading-relaxed">
          Platforms such as <span className="text-white font-semibold">Zoho CRM</span> and <span className="text-white font-semibold">Bigin</span> are powerful CRM systems built for managing customers, sales pipelines and business relationships. MOJO FLOW applies that operational thinking specifically to the creator business.
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-mojo-border overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-[#0E101D] p-4 sm:p-5 border-b border-mojo-border font-heading text-xs sm:text-sm font-bold">
            <div className="col-span-5 text-mojo-dim flex items-center gap-1.5">
              <Users className="w-4 h-4 text-mojo-dim" />
              <span>Generic CRM</span>
            </div>
            <div className="col-span-7 text-mojo-violet-light flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-mojo-violet fill-mojo-violet/20" />
              <span>MOJO FLOW Creator Business OS</span>
            </div>
          </div>

          <div className="divide-y divide-mojo-border/60">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-3.5 sm:p-4 text-xs sm:text-sm items-center transition-colors ${
                  row.highlight ? 'bg-emerald-950/20' : 'hover:bg-mojo-surface-elevated/40'
                }`}
              >
                <div className="col-span-5 text-mojo-dim flex items-center gap-2">
                  {row.generic === '—' ? (
                    <Minus className="w-3.5 h-3.5 text-mojo-dim/50" />
                  ) : (
                    <span className="text-mojo-muted font-medium">{row.generic}</span>
                  )}
                </div>

                <div className="col-span-7 font-semibold flex items-center gap-2">
                  <div className={`p-0.5 rounded ${row.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-mojo-violet/20 text-mojo-violet-light'}`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className={row.highlight ? 'text-emerald-400 font-bold' : 'text-white'}>
                    {row.mojo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
