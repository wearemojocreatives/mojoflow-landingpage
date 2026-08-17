'use client';

import { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090E]/90 backdrop-blur-md border-b border-mojo-border/60 py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-mojo-violet-dark via-mojo-violet to-mojo-cyan flex items-center justify-center shadow-glow-violet group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-5.5 h-5.5 text-white fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-white flex items-center gap-2">
              MOJO FLOW
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-mojo-violet/15 text-mojo-violet-light border border-mojo-violet/30">
                Creator Business OS
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-semibold text-mojo-muted uppercase tracking-wider">
          <a href="#workflow" onClick={scrollToSection('workflow')} className="hover:text-white transition-colors">
            Workflow
          </a>
          <a href="#crm" onClick={scrollToSection('crm')} className="hover:text-white transition-colors">
            Creator CRM
          </a>
          <a href="#commercials" onClick={scrollToSection('commercials')} className="hover:text-white transition-colors">
            Commercials
          </a>
          <a href="#invoicing" onClick={scrollToSection('invoicing')} className="hover:text-white transition-colors">
            Invoicing
          </a>
          <a href="#expenses" onClick={scrollToSection('expenses')} className="hover:text-white transition-colors">
            Expenses
          </a>
          <a href="#profitability" onClick={scrollToSection('profitability')} className="hover:text-white transition-colors text-mojo-emerald">
            Profitability
          </a>
          <a href="#payments" onClick={scrollToSection('payments')} className="hover:text-white transition-colors">
            Payment Due
          </a>
          <a href="#why-mojo" onClick={scrollToSection('why-mojo')} className="hover:text-white transition-colors">
            Why MOJO FLOW
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={scrollToWaitlist}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-sm font-semibold text-white bg-gradient-to-r from-mojo-violet to-mojo-violet-dark hover:from-mojo-violet-light hover:to-mojo-violet shadow-glow-violet hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get on the Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-mojo-muted hover:text-white hover:bg-mojo-surface border border-transparent hover:border-mojo-border transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-mojo-surface/95 backdrop-blur-xl border-b border-mojo-border px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2 font-medium text-mojo-muted text-sm">
            <a href="#workflow" onClick={scrollToSection('workflow')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Workflow Story
            </a>
            <a href="#crm" onClick={scrollToSection('crm')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Creator CRM
            </a>
            <a href="#commercials" onClick={scrollToSection('commercials')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Commercial Management
            </a>
            <a href="#invoicing" onClick={scrollToSection('invoicing')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Creator Invoicing
            </a>
            <a href="#expenses" onClick={scrollToSection('expenses')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Production Expenses
            </a>
            <a href="#profitability" onClick={scrollToSection('profitability')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated text-mojo-emerald font-semibold">
              Real Profitability
            </a>
            <a href="#payments" onClick={scrollToSection('payments')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Payment Due Date Intelligence
            </a>
            <a href="#why-mojo" onClick={scrollToSection('why-mojo')} className="px-3 py-2 rounded-lg hover:bg-mojo-surface-elevated hover:text-white">
              Why Not Just Use A CRM?
            </a>
          </nav>
          <div className="pt-2 border-t border-mojo-border">
            <button
              onClick={scrollToWaitlist}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading text-sm font-semibold text-white bg-gradient-to-r from-mojo-violet to-mojo-violet-dark shadow-glow-violet"
            >
              <span>Get on the Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
