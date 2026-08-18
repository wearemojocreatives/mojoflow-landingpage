import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import InteractiveCollaboration from '@/components/InteractiveCollaboration';
import CreatorCRM from '@/components/CreatorCRM';
import FinancialWorkspace from '@/components/FinancialWorkspace';
import PaymentIntelligence from '@/components/PaymentIntelligence';
import CRMComparison from '@/components/CRMComparison';
import ProductPhilosophy from '@/components/ProductPhilosophy';
import FAQ from '@/components/FAQ';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-mojo-bg text-mojo-text selection:bg-mojo-violet selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. HERO — From Brand Deal to Bottom Line. */}
      <Hero />

      {/* 2. PROBLEM — Your brand deal isn't your profit. */}
      <Problem />

      {/* 3. INTERACTIVE COLLABORATION — One collaboration. Everything connected. */}
      <InteractiveCollaboration />

      {/* 4. CREATOR CRM — A CRM built around the way creators actually work. */}
      <CreatorCRM />

      {/* 5. FINANCIAL WORKSPACE — See the money behind every collaboration. */}
      <FinancialWorkspace />

      {/* 6. PAYMENT INTELLIGENCE — Know exactly when you're due to be paid. */}
      <PaymentIntelligence />

      {/* 7. CREATOR-SIDE CRM VS GENERIC CRM */}
      <CRMComparison />

      {/* 8. WHY MOJO FLOW */}
      <ProductPhilosophy />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. WAITLIST CTA */}
      <WaitlistForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
