import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import FlagshipStory from '@/components/FlagshipStory';
import CreatorCRM from '@/components/CreatorCRM';
import CommercialManagement from '@/components/CommercialManagement';
import Invoicing from '@/components/Invoicing';
import ExpenseManagement from '@/components/ExpenseManagement';
import Profitability from '@/components/Profitability';
import PaymentIntelligence from '@/components/PaymentIntelligence';
import CRMComparison from '@/components/CRMComparison';
import ProductPhilosophy from '@/components/ProductPhilosophy';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-mojo-bg text-mojo-text selection:bg-mojo-violet selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. HERO — From Brand Deal to Bottom Line */}
      <Hero />

      {/* 2. PROBLEM — Your brand deal isn't your profit */}
      <Problem />

      {/* 3. FLAGSHIP PRODUCT STORY — One collaboration. The entire business, tracked. */}
      <FlagshipStory />

      {/* 4. CREATOR CRM — A CRM that understands creators */}
      <CreatorCRM />

      {/* 5. COMMERCIAL MANAGEMENT — Your rates. Your packages. Your business. */}
      <CommercialManagement />

      {/* 6. INVOICING — Invoice every collaboration without leaving your workflow */}
      <Invoicing />

      {/* 7. EXPENSE MANAGEMENT — Know what it costs to create */}
      <ExpenseManagement />

      {/* 8. PROFITABILITY — Revenue is not profit */}
      <Profitability />

      {/* 9. PAYMENT DUE-DATE INTELLIGENCE — Stop guessing when you're getting paid */}
      <PaymentIntelligence />

      {/* 10. GENERIC CRM COMPARISON — Why not just use a CRM? */}
      <CRMComparison />

      {/* 11. PRODUCT PHILOSOPHY — Built for the business behind your influence */}
      <ProductPhilosophy />

      {/* 12. WAITLIST CTA — Know your revenue. Know your costs. Know your profit */}
      <WaitlistForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
