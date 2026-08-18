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

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Creator CRM', href: '#crm' },
    { name: 'Why MOJO FLOW', href: '#why-mojo' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mojo-bg/85 backdrop-blur-md border-b border-mojo-border/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-mojo-violet via-mojo-violet-dark to-mojo-cyan flex items-center justify-center shadow-glow-violet group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold tracking-tight text-white group-hover:text-mojo-violet-light transition-colors">
                MOJO FLOW
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-mojo-cyan -mt-1">
                Creator CRM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-semibold uppercase tracking-wider text-mojo-muted hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#waitlist"
              onClick={(e) => scrollToSection(e, '#waitlist')}
              className="px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-white bg-gradient-to-r from-mojo-violet to-mojo-cyan hover:from-mojo-violet-light hover:to-mojo-cyan shadow-glow-violet hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 group"
            >
              <span>Get on the Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-mojo-surface border border-mojo-border text-mojo-text hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0C14]/95 backdrop-blur-xl border-b border-mojo-border shadow-2xl p-6 animate-fadeIn transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-bold uppercase tracking-wider text-mojo-muted hover:text-white py-2 border-b border-mojo-border/40"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={(e) => scrollToSection(e, '#waitlist')}
              className="mt-2 w-full py-3 rounded-xl font-heading text-sm font-bold text-white bg-gradient-to-r from-mojo-violet to-mojo-cyan text-center shadow-glow-violet"
            >
              Get on the Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
