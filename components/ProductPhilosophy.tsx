'use client';

import { ShieldCheck, Lock, TrendingUp, Sparkles } from 'lucide-react';

export default function ProductPhilosophy() {
  const cards = [
    {
      title: 'You own the relationship',
      icon: ShieldCheck,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400',
      description: "MOJO FLOW doesn't sit between you and your brands. Manage the brand relationships and collaborations you already have directly.",
    },
    {
      title: 'You control your commercials',
      icon: Lock,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      description: 'Your rates, deliverable packages, and negotiated deal terms belong to your business. Your commercial data stays inside your private workspace.',
    },
    {
      title: 'You know your numbers',
      icon: TrendingUp,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      description: 'Track agreed commercial value, production expenses, Net payment terms, invoices and actual creator profit for every collaboration.',
    },
  ];

  return (
    <section className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
            Product Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Built for the business <br />
            <span className="text-gradient-brand">behind your influence.</span>
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl border border-mojo-border/80 hover:border-mojo-violet/40 transition-all duration-300 hover:-translate-y-1 space-y-4 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-mojo-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
