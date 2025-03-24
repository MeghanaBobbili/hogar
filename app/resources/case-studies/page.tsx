import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Case Studies | Hogar Controls',
  description: 'Explore real-world implementations of Hogar Controls smart home solutions in various settings.',
};

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: 'Luxury Villa Automation',
    description: 'Complete smart home integration for a 10,000 sq ft luxury villa in California.',
    category: 'Residential',
    imageSrc: '/images/case-studies/villa.svg',
  },
  {
    id: 2,
    title: 'Boutique Hotel Smart Control',
    description: 'Energy-efficient lighting and climate control for a 30-room boutique hotel.',
    category: 'Hospitality',
    imageSrc: '/images/case-studies/hotel.svg',
  },
  {
    id: 3,
    title: 'Smart Office Building',
    description: 'Comprehensive automation for a modern corporate office space.',
    category: 'Commercial',
    imageSrc: '/images/case-studies/office.svg',
  },
  {
    id: 4,
    title: 'Urban Apartment Retrofit',
    description: 'Smart home retrofit for a high-rise urban apartment building.',
    category: 'Residential',
    imageSrc: '/images/case-studies/apartment.svg',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Hogar</span>
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Real-world examples of Hogar Controls smart solutions implemented in various settings.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-light/80">
              Explore how our solutions have transformed spaces across residential, commercial, and hospitality sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
                <div className="h-60 bg-dark/70 relative">
                  <div className="absolute top-4 left-4 z-10 bg-primary/90 text-dark px-3 py-1 rounded text-sm font-medium">
                    {study.category}
                  </div>
                  <div className="h-full w-full flex items-center justify-center text-4xl">
                    🏠
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{study.title}</h3>
                  <p className="text-light/70 mb-6">
                    {study.description}
                  </p>
                  <button className="btn-sm-primary">
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="bg-dark/50 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="mb-6">Ready to transform <span className="gradient-text">your space?</span></h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-light/80">
              Contact our team to discuss how Hogar Controls can create a tailored smart solution for your home or business.
            </p>
            <button className="btn-primary">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 