'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is MOJO FLOW?',
      a: 'MOJO FLOW is a Creator CRM and business operating system that helps creators manage brand collaborations, track production expenses, issue invoices, calculate real net profit, and track payment due dates.',
    },
    {
      q: 'Is MOJO FLOW a creator marketplace?',
      a: 'No. MOJO FLOW is not a brand marketplace or talent agency. It is an internal workspace for creators to manage the brand relationships and collaborations they already have.',
    },
    {
      q: 'Can I manage my brand collaborations?',
      a: 'Yes. MOJO FLOW tracks your brand deals from initial proposal to production, draft submission, invoice generation, payment due date tracking, and profit calculation.',
    },
    {
      q: 'Can I create invoices?',
      a: 'Yes. MOJO FLOW includes an internal creator invoicing system to generate clean tax invoices linked directly to your agreed commercial terms and Net payment dates.',
    },
    {
      q: 'Can I track production expenses?',
      a: 'Yes. You can log all campaign expenses — including photographers, videographers, studio rentals, travel, advertising amplification, and editing fees.',
    },
    {
      q: 'Can MOJO FLOW calculate my creator profit?',
      a: 'Yes. MOJO FLOW automatically subtracts total production expenses from your agreed commercial fee to show your true net creator profit for every deal.',
    },
    {
      q: 'Can I track Net 30, 45, 60 and 90 payment terms?',
      a: 'Yes. You can set Net payment terms for each invoice. MOJO FLOW automatically calculates due dates and triggers reminder states before, on, and after the due date.',
    },
    {
      q: 'Does MOJO FLOW receive payments from brands?',
      a: 'No. Brands pay creators directly via their standard bank transfers or corporate payouts. MOJO FLOW is a management tool that tracks due dates and payment status.',
    },
    {
      q: 'Can I create a public media kit or creator page?',
      a: 'No. MOJO FLOW is a private internal workspace. Your rates, packages, campaign expenses, and financial data remain 100% private to you.',
    },
    {
      q: 'Is MOJO FLOW a traditional CRM?',
      a: 'No. Generic CRMs track sales pipelines and corporate leads. MOJO FLOW is a creator-side CRM specifically built around brand collaborations, deliverables, campaign costs, and creator profit.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A0C14] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-mojo-cyan" />
            Product Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-mojo-muted leading-relaxed">
            Everything you need to know about MOJO FLOW as your Creator CRM and Business OS.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-mojo-border/80 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left focus:outline-none hover:bg-mojo-surface-elevated/40 transition-colors"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-white pr-4">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-mojo-cyan shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-mojo-dim shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-mojo-muted leading-relaxed border-t border-mojo-border/40 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
