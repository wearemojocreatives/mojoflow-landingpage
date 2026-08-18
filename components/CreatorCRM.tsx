'use client';

import { useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Users, Building2, CheckCircle2, ArrowRight, TrendingUp, Clock, Receipt, Lock } from 'lucide-react';

export default function CreatorCRM() {
  const [selectedBrand, setSelectedBrand] = useState<'northstar' | 'urban' | 'vertex'>('northstar');

  const brands = [
    {
      id: 'northstar',
      name: 'Northstar',
      collabs: 6,
      generated: 240000,
      profit: 172000,
      contact: 'Sarah Miller (Marketing Lead)',
      email: 'sarah@northstar.com',
      invoices: 2,
      pendingAmount: 65000,
      dueDate: '14 Nov 2026',
    },
    {
      id: 'urban',
      name: 'Urban Thread',
      collabs: 3,
      generated: 115000,
      profit: 84000,
      contact: 'David Chen (Brand Partnerships)',
      email: 'david@urbanthread.com',
      invoices: 1,
      pendingAmount: 45000,
      dueDate: '28 Oct 2026',
    },
    {
      id: 'vertex',
      name: 'Vertex',
      collabs: 2,
      generated: 82000,
      profit: 61000,
      contact: 'Elena Rostova (Campaign Manager)',
      email: 'elena@vertex.io',
      invoices: 0,
      pendingAmount: 0,
      dueDate: 'Paid in Full',
    },
  ] as const;

  const currentBrand = brands.find((b) => b.id === selectedBrand)!;

  return (
    <section id="crm" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-cyan/10 border border-mojo-cyan/20 text-mojo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Creator-Side CRM Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            A CRM built around the way <br />
            <span className="text-gradient-brand">creators actually work.</span>
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            Traditional CRMs track leads and deals. MOJO FLOW tracks the business behind every creator collaboration.
          </p>
        </div>

        {/* Realistic Creator CRM Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Brand Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-mojo-dim uppercase tracking-wider px-2">
              Client Brand Portfolio
            </div>

            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id as any)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  selectedBrand === b.id
                    ? 'bg-mojo-surface-elevated border-mojo-violet/60 shadow-glow-violet'
                    : 'bg-mojo-card border-mojo-border/70 hover:border-mojo-border hover:bg-mojo-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 font-bold text-white text-sm flex items-center justify-center border border-purple-400/30">
                    {b.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-heading">{b.name}</div>
                    <div className="text-[11px] text-mojo-muted">{b.collabs} Collaborations</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold font-mono text-emerald-400">
                    ₹{b.generated.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-mojo-dim">Generated</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Selected Brand Record Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-7 rounded-3xl border border-mojo-border shadow-2xl space-y-6 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-mojo-border/60">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-mojo-cyan" />
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{currentBrand.name}</h3>
                  <p className="text-xs text-mojo-muted">{currentBrand.contact}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold">
                Active Client
              </span>
            </div>

            {/* Brand Record Details */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-mojo-card border border-mojo-border/60 space-y-1">
                <div className="text-[10px] text-mojo-dim font-bold uppercase">Commercial History</div>
                <div className="text-lg font-bold text-white font-mono">
                  ₹{currentBrand.generated.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-mojo-muted">{currentBrand.collabs} Completed Deals</div>
              </div>

              <div className="p-3.5 rounded-xl bg-mojo-card border border-emerald-500/30 space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase">Total Net Profit</div>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  ₹{currentBrand.profit.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-emerald-300/80">Net Creator Earnings</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-mojo-border/40">
                <span className="text-mojo-muted">Outstanding Invoices:</span>
                <span className="font-bold text-amber-400">{currentBrand.invoices} Invoices Pending</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-mojo-border/40">
                <span className="text-mojo-muted">Pending Amount:</span>
                <span className="font-bold text-white font-mono">
                  ₹{currentBrand.pendingAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-mojo-muted">Payment Due Target:</span>
                <span className="font-bold text-mojo-cyan">{currentBrand.dueDate}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
