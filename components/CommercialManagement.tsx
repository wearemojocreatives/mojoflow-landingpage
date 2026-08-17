'use client';

import { Tag, Lock, ShieldCheck, Check } from 'lucide-react';

export default function CommercialManagement() {
  return (
    <section id="commercials" className="py-24 bg-mojo-bg border-t border-mojo-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/10 border border-mojo-violet/20 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Tag className="w-3.5 h-3.5 text-mojo-cyan" />
            Internal Business Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Your rates. Your packages. <br />
            <span className="text-gradient-brand">Your business.</span>
          </h2>
          <p className="text-base sm:text-lg text-mojo-muted leading-relaxed">
            Manage your deliverable rate cards, bundle packages, and negotiated deal terms internally. Your commercial information stays private to your workspace.
          </p>
        </div>

        {/* Private Workspace Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-mojo-surface border border-mojo-violet/40 flex items-center justify-between text-xs text-mojo-muted">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-mojo-violet-light shrink-0" />
            <span>MOJO FLOW is your internal business workspace. We never host public rate cards or media kits.</span>
          </div>
          <span className="px-2.5 py-1 rounded bg-mojo-violet/20 text-mojo-violet-light font-bold text-[10px] uppercase shrink-0">
            100% Private
          </span>
        </div>

        {/* Commercial Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="glass-card p-6 rounded-2xl border border-mojo-border/80 hover:border-mojo-violet/40 transition-all space-y-4">
            <div className="text-xs font-bold text-mojo-cyan uppercase tracking-wider">Deliverable Pricing</div>
            <h3 className="text-xl font-bold font-heading text-white">Individual Deliverable Rates</h3>
            <p className="text-xs text-mojo-muted leading-relaxed">
              Maintain standardized base rates for Instagram Reels, YouTube Dedicated videos, and Story series to quickly evaluate deal briefs.
            </p>
            <div className="pt-3 border-t border-mojo-border/60 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-mojo-border/40">
                <span className="text-mojo-muted">Instagram Reel (60s)</span>
                <span className="font-semibold text-white">₹50,000</span>
              </div>
              <div className="flex justify-between py-1 border-b border-mojo-border/40">
                <span className="text-mojo-muted">YouTube Dedicated (8-12m)</span>
                <span className="font-semibold text-white">₹1,20,000</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-mojo-violet/50 shadow-glow-violet space-y-4 relative">
            <div className="text-xs font-bold text-mojo-violet-light uppercase tracking-wider">Custom Bundling</div>
            <h3 className="text-xl font-bold font-heading text-white">Deal Packages</h3>
            <p className="text-xs text-mojo-muted leading-relaxed">
              Create multi-deliverable packages with included digital usage rights, exclusivity terms, and campaign amplification rules.
            </p>
            <div className="pt-3 border-t border-mojo-border/60 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-mojo-border/40">
                <span className="text-mojo-muted">Northstar Summer Package</span>
                <span className="font-bold text-mojo-emerald">₹1,00,000</span>
              </div>
              <div className="text-[11px] text-mojo-dim">2 Reels + 3 Stories + 60-day usage</div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-mojo-border/80 hover:border-mojo-violet/40 transition-all space-y-4">
            <div className="text-xs font-bold text-mojo-emerald uppercase tracking-wider">Negotiated Commercials</div>
            <h3 className="text-xl font-bold font-heading text-white">Campaign Commercials</h3>
            <p className="text-xs text-mojo-muted leading-relaxed">
              Log negotiated final commercial values and deliverable adjustments directly against campaign files.
            </p>
            <div className="pt-3 border-t border-mojo-border/60 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-mojo-border/40">
                <span className="text-mojo-muted">Agreed Commercial</span>
                <span className="font-bold text-white">₹1,00,000</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Contract Signed
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
