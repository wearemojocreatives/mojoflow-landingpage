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
              MOJO FLOW is the Creator Business OS that helps creators manage collaborations, track production costs, create invoices, calculate real profit and never lose track of when they&apos;re due to be paid.
            </p>
            <div className="flex items-center gap-2 text-xs text-mojo-dim">
              <Mail className="w-4 h-4 text-mojo-violet-light" />
              <span>Contact: no-reply@mojoflow.in</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Business OS</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#workflow" onClick={scrollToSection('workflow')} className="hover:text-white transition-colors">
                  Workflow Story
                </a>
              </li>
              <li>
                <a href="#crm" onClick={scrollToSection('crm')} className="hover:text-white transition-colors">
                  Creator CRM
                </a>
              </li>
              <li>
                <a href="#commercials" onClick={scrollToSection('commercials')} className="hover:text-white transition-colors">
                  Commercial Management
                </a>
              </li>
              <li>
                <a href="#invoicing" onClick={scrollToSection('invoicing')} className="hover:text-white transition-colors">
                  Creator Invoicing
                </a>
              </li>
              <li>
                <a href="#expenses" onClick={scrollToSection('expenses')} className="hover:text-white transition-colors">
                  Expense Management
                </a>
              </li>
              <li>
                <a href="#profitability" onClick={scrollToSection('profitability')} className="hover:text-white transition-colors">
                  Real Profitability
                </a>
              </li>
              <li>
                <a href="#payments" onClick={scrollToSection('payments')} className="hover:text-white transition-colors">
                  Payment Due Dates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Privacy & Technical Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Workspace Security</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-1.5 text-mojo-muted">
                <Shield className="w-3.5 h-3.5 text-mojo-emerald" />
                100% Private Workspace Data
              </li>
              <li className="text-mojo-dim">Direct Commercial Ownership</li>
              <li className="text-mojo-dim">Creator-Controlled Rate Cards</li>
              <li className="text-mojo-dim text-[11px] pt-1">
                MOJO FLOW subscription billing processed securely via Razorpay.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mojo-dim gap-4">
          <p>© {new Date().getFullYear()} MOJO FLOW (mojoflow.in). All rights reserved.</p>
          <p>Built for the business behind your influence.</p>
        </div>
      </div>
    </footer>
  );
}
