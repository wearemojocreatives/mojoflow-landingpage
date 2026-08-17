'use client';

import { UserCheck, LayoutGrid, Tag, Kanban, Receipt, BarChart3, Puzzle, Clock, Sparkles } from 'lucide-react';

export default function Modules() {
  const modules = [
    {
      id: 'profile',
      icon: UserCheck,
      name: 'Profile',
      badge: 'Identity & Tax',
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400',
      description: 'Manage personal details, creator credentials, GST/PAN tax profiles, and official invoice parameters.',
      highlights: ['Personal & creator details', 'GST & PAN tax profile', 'Official invoicing configuration'],
    },
    {
      id: 'workspace',
      icon: LayoutGrid,
      name: 'Workspace',
      badge: 'Creator Application',
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      description: 'Basic workspace configuration for managing your creator deliverables and operational settings.',
      highlights: [
        'Single Creator application workspace',
        'Operational preferences & settings',
        'Multi-workspace available for Managers',
      ],
    },
    {
      id: 'commercials',
      icon: Tag,
      name: 'Commercials',
      badge: 'Pricing & Packages',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      description: 'Build your commercial profile, deliverable rate cards, custom packages, and usage rights terms.',
      highlights: ['Commercial profile & rate cards', 'Custom deal packages', 'Usage rights & licensing terms'],
    },
    {
      id: 'campaigns',
      icon: Kanban,
      name: 'Campaigns',
      badge: 'Deal Execution',
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
      description: 'Track brand collaborations from initial inquiry to deliverable approvals and campaign completion.',
      highlights: ['Deliverable timeline tracker', 'Brand review & feedback', 'Campaign status visibility'],
    },
    {
      id: 'billing',
      icon: Receipt,
      name: 'Billing',
      badge: 'Razorpay Subscription',
      color: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-400',
      description: 'Manage your MOJO FLOW subscription plan and view billing history securely processed via Razorpay.',
      highlights: ['MOJO FLOW subscription management', 'Tax billing receipts & history', 'Zero card profile storage'],
    },
    {
      id: 'insights',
      icon: BarChart3,
      name: 'Insights',
      badge: 'Business Trends',
      color: 'from-violet-500/20 to-fuchsia-500/10 border-violet-500/30 text-violet-400',
      description: 'Analyze creator-business performance, revenue trends, monthly deal values, and growth metrics.',
      highlights: ['Monthly commercial trends', 'Average deal performance', 'Business growth analytics'],
    },
    {
      id: 'integrations',
      icon: Puzzle,
      name: 'Integrations',
      badge: 'SOON',
      isFuture: true,
      color: 'from-slate-500/20 to-zinc-500/10 border-slate-500/30 text-slate-400',
      description: 'Upcoming ecosystem connections to link external analytics, calendars, and accounting software.',
      highlights: ['Social platform stats sync', 'Calendar schedule integration', 'Accounting platform bridge'],
    },
  ];

  return (
    <section id="modules" className="py-24 bg-mojo-bg relative overflow-hidden">
      {/* Background Lighting */}
      <div className="glow-orb-violet -top-20 left-10 opacity-30 pointer-events-none" />
      <div className="glow-orb-cyan bottom-10 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
            Creator OS Modules
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            One Connected System. <br />
            <span className="text-gradient-brand">Purpose-Built Modules.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            MOJO FLOW organizes your business into distinct modules designed to work together as a unified operating system.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between ${
                  mod.isFuture
                    ? 'border-mojo-border/40 opacity-80 bg-mojo-card/40'
                    : 'border-mojo-border/80 hover:border-mojo-violet/40 hover:shadow-glow-card'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 ${
                        mod.isFuture
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-mojo-surface-elevated text-mojo-muted border border-mojo-border'
                      }`}
                    >
                      {mod.isFuture && <Clock className="w-3 h-3 text-amber-400" />}
                      {mod.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-white mb-2.5 flex items-center gap-2">
                    {mod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-mojo-muted leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                {/* Capability Bullet Highlights */}
                <div className="pt-4 border-t border-mojo-border/60 space-y-2">
                  {mod.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-mojo-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-mojo-violet-light shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
