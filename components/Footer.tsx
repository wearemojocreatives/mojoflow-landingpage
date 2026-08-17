'use client';

import { Zap, Mail, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05060A] border-t border-mojo-border/60 py-16 text-mojo-muted text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-mojo-border/40">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-mojo-violet to-mojo-cyan flex items-center justify-center shadow-glow-violet">
                <Zap className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                MOJO FLOW
              </span>
            </div>
            <p className="text-mojo-muted text-xs sm:text-sm max-w-sm leading-relaxed">
              MOJO FLOW is the operating system for modern creators. Unify your rate cards, commercial deals, campaign tracking, and automated invoicing in one system.
            </p>
            <div className="flex items-center gap-2 text-xs text-mojo-dim">
              <Mail className="w-4 h-4 text-mojo-violet-light" />
              <span>Contact: no-reply@mojoflow.in</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Product OS</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#problem" onClick={scrollToSection('problem')} className="hover:text-white transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#modules" onClick={scrollToSection('modules')} className="hover:text-white transition-colors">
                  Creator OS Modules
                </a>
              </li>
              <li>
                <a href="#differentiation" onClick={scrollToSection('differentiation')} className="hover:text-white transition-colors">
                  Why MOJO FLOW
                </a>
              </li>
              <li>
                <a href="#showcase" onClick={scrollToSection('showcase')} className="hover:text-white transition-colors">
                  Product Showcase
                </a>
              </li>
              <li>
                <a href="#workflow" onClick={scrollToSection('workflow')} className="hover:text-white transition-colors">
                  Creator Lifecycle
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Security */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Trust & Security</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-1.5 text-mojo-muted">
                <Shield className="w-3.5 h-3.5 text-mojo-emerald" />
                Razorpay Billing Verified
              </li>
              <li className="text-mojo-dim">Direct Commercial Ownership</li>
              <li className="text-mojo-dim">Zero Middleman Commissions</li>
              <li className="text-mojo-dim">Privacy Protected Data</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mojo-dim gap-4">
          <p>© {new Date().getFullYear()} MOJO FLOW (mojoflow.in). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for modern creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
