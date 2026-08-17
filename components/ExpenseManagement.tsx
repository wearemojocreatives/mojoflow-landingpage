'use client';

import { FileSpreadsheet, PlusCircle } from 'lucide-react';

export default function ExpenseManagement() {
  const expenses = [
    { item: 'Photographer', category: 'Production', cost: '₹8,000' },
    { item: 'Videographer', category: 'Production', cost: '₹12,000' },
    { item: 'Studio Rental', category: 'Location', cost: '₹5,000' },
    { item: 'Instagram Ads', category: 'Marketing', cost: '₹3,000' },
    { item: 'Audience Giveaways', category: 'Campaign', cost: '₹4,000' },
    { item: 'Post-production Editing', category: 'Post-production', cost: '₹3,000' },
  ];

  return (
    <section id="expenses" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Production Cost Tracking
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Know what it costs <br />
            <span className="text-gradient-brand">to create.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Add campaign expenses in real time as your production progresses — from crew and studio rentals to advertising amplification and editing.
          </p>
        </div>

        {/* Expense Ledger Table */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-mojo-border overflow-hidden shadow-2xl">
          <div className="bg-[#0C0E17] p-4 sm:p-5 border-b border-mojo-border flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-mojo-dim">CAMPAIGN EXPENSE LEDGER</span>
              <h3 className="text-sm font-bold text-white font-heading">Northstar — Summer Collection</h3>
            </div>
            <div className="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5">
              <PlusCircle className="w-3.5 h-3.5" />
              Add Expense
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-[#0B0D16] space-y-3">
            <div className="grid grid-cols-12 text-xs font-bold text-mojo-dim uppercase tracking-wider px-3 pb-2 border-b border-mojo-border/60">
              <div className="col-span-5">Expense Item</div>
              <div className="col-span-4">Category</div>
              <div className="col-span-3 text-right">Amount</div>
            </div>

            <div className="divide-y divide-mojo-border/40">
              {expenses.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 text-xs sm:text-sm py-3 px-3 items-center hover:bg-mojo-surface-elevated/50 transition-colors">
                  <div className="col-span-5 font-semibold text-white">{row.item}</div>
                  <div className="col-span-4">
                    <span className="px-2.5 py-0.5 rounded bg-mojo-surface text-mojo-muted text-[11px] border border-mojo-border">
                      {row.category}
                    </span>
                  </div>
                  <div className="col-span-3 text-right font-mono font-semibold text-rose-400">{row.cost}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-mojo-border/80 flex items-center justify-between px-3">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Total Production Cost</span>
              <span className="text-2xl font-extrabold font-heading text-rose-400">₹35,000</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
