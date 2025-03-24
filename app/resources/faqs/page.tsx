import type { Metadata } from 'next';
import FAQContent from '../../../components/sections/resources/FAQContent';

export const metadata = {
  title: 'FAQs | Hogar Controls',
  description: 'Find answers to frequently asked questions about Hogar Controls smart home products and services.',
};

export default function FAQsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Frequently Asked</span>
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Find answers to common questions about Hogar Controls products and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <FAQContent />
    </div>
  );
} 