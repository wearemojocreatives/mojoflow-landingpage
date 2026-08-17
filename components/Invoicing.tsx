'use client';

import { Receipt, FileText, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Invoicing() {
  const steps = [
    'Campaign',
    'Commercial',
    'Invoice',
    'Payment Terms',
    'Due Date',
    'Payment Status',
  ];

  return (
    <section id="invoicing" className="py-24 bg-[#0B0D16] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Receipt className="w-3.5 h-3.5" />
            Creator Invoicing Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Invoice every collaboration <br />
            <span className="text-gradient-brand">without leaving your workflow.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Generate clean, professional tax invoices linked directly to your campaign deliverables and Net payment terms.
          </p>
        </div>

        {/* Pipeline Progression */}
        <div className="max-w-4xl mx-auto glass-panel p-5 rounded-2xl border border-mojo-border mb-12 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-mojo-surface-elevated text-mojo-text border border-mojo-border">
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-mojo-dim shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Invoice UI Representation */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-mojo-border shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-mojo-border/60">
            <div>
              <span className="text-xs font-mono text-mojo-dim">MOJO FLOW CREATOR INVOICE</span>
              <h3 className="text-xl font-bold font-heading text-white">Invoice #MF-2026-014</h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              OUTSTANDING (Net 60)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border space-y-2">
              <div className="text-[10px] text-mojo-dim uppercase">BILLED TO</div>
              <div className="font-bold text-white text-sm">Northstar</div>
              <div className="text-mojo-muted">Summer Collection Campaign</div>
              <div className="text-mojo-dim">GSTIN: 27AABCN1234F1Z9</div>
            </div>

            <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border space-y-2">
              <div className="text-[10px] text-mojo-dim uppercase">INVOICE DATES & TERMS</div>
              <div className="flex justify-between">
                <span className="text-mojo-muted">Invoice Date:</span>
                <span className="text-white">15 Sep 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mojo-muted">Payment Terms:</span>
                <span className="text-amber-400 font-bold">Net 60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mojo-muted">Payment Due:</span>
                <span className="text-mojo-cyan font-bold">14 Nov 2026</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-mojo-card border border-mojo-border flex justify-between items-center text-xs">
            <span className="font-bold text-white">COMMERCIAL TOTAL</span>
            <span className="text-2xl font-extrabold font-heading text-mojo-emerald">₹1,00,000</span>
          </div>
        </div>

      </div>
    </section>
  );
}
