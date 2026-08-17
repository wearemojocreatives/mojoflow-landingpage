import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Modules from '@/components/Modules';
import Differentiation from '@/components/Differentiation';
import ProductShowcase from '@/components/ProductShowcase';
import Workflow from '@/components/Workflow';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-mojo-bg text-mojo-text selection:bg-mojo-violet selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 2. Creator Business Problem Section */}
      <Problem />

      {/* 3. Creator OS Modules Section */}
      <Modules />

      {/* 4. Product Differentiation Section */}
      <Differentiation />

      {/* 5. Product UI Showcase Section */}
      <ProductShowcase />

      {/* 6. Workflow / Lifecycle Ecosystem Section */}
      <Workflow />

      {/* 7. Early Access / Waitlist CTA Section */}
      <WaitlistForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
