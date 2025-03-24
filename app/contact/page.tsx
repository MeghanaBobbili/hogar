import type { Metadata } from 'next';
import ContactForm from '../../components/sections/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Hogar Controls',
  description: 'Get in touch with Hogar Controls for any inquiries, support, or to find a dealer near you.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Get in Touch</span>
              <span className="gradient-text">We'd Love to Hear From You</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Have questions or need assistance? Our team is here to help you create the perfect smart home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
} 