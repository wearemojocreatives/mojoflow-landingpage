'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  // UTM attribution state automatically extracted from landing page URL
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_content: searchParams.get('utm_content') || '',
        utm_term: searchParams.get('utm_term') || '',
      });
    }
  }, []);

  const validate = () => {
    if (!name.trim() || name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          honeypot: honeypot.trim(),
          ...utmParams,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit. Please try again.');
      }

      setSubmitted(true);
      setResponseMsg(data.message || "You're on the list.");
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-grid-pattern relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-orb-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-mojo-violet/40 shadow-glow-card relative overflow-hidden text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mojo-violet/15 border border-mojo-violet/30 text-mojo-violet-light text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-mojo-cyan" />
            Early Access Waitlist
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Your creator business is ready for <br className="hidden sm:block" />
            <span className="text-gradient-brand">an operating system.</span>
          </h2>

          <p className="text-base sm:text-lg text-mojo-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Stop managing your commercial engine across spreadsheets and DMs. Join the waitlist for priority onboarding when early access opens.
          </p>

          {/* Success State View */}
          {submitted ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-mojo-surface border border-mojo-emerald/50 shadow-glow-card max-w-lg mx-auto animate-fadeIn space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                You're on the list.
              </h3>
              <div className="space-y-1 text-sm text-mojo-muted leading-relaxed">
                <p className="text-white font-medium">MOJO FLOW is coming soon.</p>
                <p>We'll be in touch when early access opens.</p>
              </div>
              <div className="pt-3 border-t border-mojo-border/60 text-xs font-mono text-mojo-emerald">
                {responseMsg}
              </div>
            </div>
          ) : (
            /* Waitlist Form View */
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
              {/* Invisible Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="waitlist-name" className="block text-xs font-semibold text-mojo-muted mb-1.5">
                  Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError(null);
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-mojo-card border border-mojo-border focus:border-mojo-violet focus:ring-1 focus:ring-mojo-violet text-white text-sm placeholder-mojo-dim outline-none transition-all"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label htmlFor="waitlist-email" className="block text-xs font-semibold text-mojo-muted mb-1.5">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="you@creator.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-mojo-card border border-mojo-border focus:border-mojo-violet focus:ring-1 focus:ring-mojo-violet text-white text-sm placeholder-mojo-dim outline-none transition-all"
                />
              </div>

              {/* Error Alert */}
              {error && (
                <div role="alert" aria-live="polite" className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Primary Action CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl font-heading text-base font-bold text-white bg-gradient-to-r from-mojo-violet via-mojo-violet-dark to-mojo-cyan hover:from-mojo-violet-light hover:to-mojo-violet shadow-glow-violet hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Securing Spot...</span>
                  </>
                ) : (
                  <>
                    <span>Get on the Waitlist</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-mojo-dim pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-mojo-emerald" />
                <span>No credit card required. Private data protection.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
