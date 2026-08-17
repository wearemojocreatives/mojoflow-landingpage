'use client';

import { Sparkles, ArrowRight, PenTool, Layers, Tag, CreditCard, TrendingUp } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      step: '01',
      title: 'Create',
      icon: PenTool,
      subtitle: 'Creator Profile & Identity',
      color: 'from-purple-500 to-indigo-500',
      description: 'Set up your Profile with tax details (GST/PAN), creator credentials, and official invoicing parameters.',
    },
    {
      step: '02',
      title: 'Manage',
      icon: Layers,
      subtitle: 'Workspace Deliverables',
      color: 'from-blue-500 to-cyan-500',
      description: 'Centralise campaign deliverables, script reviews, brand assets, and deadlines in your Creator Workspace.',
    },
    {
      step: '03',
      title: 'Commercialise',
      icon: Tag,
      subtitle: 'Rate Cards & Packages',
      color: 'from-emerald-500 to-teal-500',
      description: 'Publish live rate cards, custom packages, usage rights, and capture structured brand inquiries.',
    },
    {
      step: '04',
      title: 'Get Paid',
      icon: CreditCard,
      subtitle: 'Razorpay Subscription Billing',
      color: 'from-amber-500 to-orange-500',
      description: 'Generate tax-compliant GST invoices and track your MOJO FLOW subscription billing history.',
    },
    {
      step: '05',
      title: 'Grow',
      icon: TrendingUp,
      subtitle: 'Creator Business Insights',
      color: 'from-rose-500 to-pink-500',
      description: 'Monitor monthly revenue performance, average deal values, and scale your commercial creator OS.',
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-[#08090E] border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
            Product Architecture Motif
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The Creator OS Lifecycle <br />
            <span className="text-gradient-brand">Create → Manage → Commercialise → Get Paid → Grow</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            The end-to-end operational framework powering your creator business inside MOJO FLOW.
          </p>
        </div>

        {/* 5-Step Process Motif */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl border border-mojo-border/80 hover:border-mojo-violet/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-mojo-dim group-hover:text-mojo-violet-light transition-colors">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 shadow-md`}>
                      <div className="w-full h-full rounded-[10px] bg-mojo-card flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-1">{item.title}</h3>
                  <div className="text-[11px] font-semibold text-mojo-violet-light uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-mojo-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-mojo-border-bright">
                    <ArrowRight className="w-5 h-5 text-mojo-dim" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
