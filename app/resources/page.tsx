import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resources | Hogar Controls',
  description: 'Access blogs, case studies, product manuals, FAQs, and support resources for Hogar Controls smart home products.',
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Hogar</span>
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Access helpful information, support, and knowledge to maximize your smart home experience.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Categories */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blogs & Articles */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/general/smart-home.jpg"
                  alt="Blogs & Articles"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Blogs & Articles</h3>
                <p className="text-light/70 mb-4">
                  Stay updated with the latest trends and insights in smart home technology.
                </p>
                <Link href="/resources/blogs" className="btn-sm-primary">
                  Read Articles
                </Link>
              </div>
            </div>
            
            {/* Case Studies */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/general/experience-centre.jpg"
                  alt="Case Studies"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Case Studies</h3>
                <p className="text-light/70 mb-4">
                  Real-world examples of how Hogar Controls has transformed living spaces.
                </p>
                <Link href="/resources/case-studies" className="btn-sm-primary">
                  View Case Studies
                </Link>
              </div>
            </div>
            
            {/* Product Manuals */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/solutions/home_security.jpg"
                  alt="Product Manuals"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Product Manuals</h3>
                <p className="text-light/70 mb-4">
                  Detailed instructions and specifications for all Hogar Controls products.
                </p>
                <Link href="/resources/manuals" className="btn-sm-primary">
                  Browse Manuals
                </Link>
              </div>
            </div>
            
            {/* FAQs */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/banners/banner-01.jpg"
                  alt="FAQs"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">FAQs</h3>
                <p className="text-light/70 mb-4">
                  Quick answers to common questions about our products and services.
                </p>
                <Link href="/resources/faqs" className="btn-sm-primary">
                  View FAQs
                </Link>
              </div>
            </div>
            
            {/* Support */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/general/testimonial.png"
                  alt="Support"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Support</h3>
                <p className="text-light/70 mb-4">
                  Get help with installation, troubleshooting, and technical issues.
                </p>
                <Link href="/resources/support" className="btn-sm-primary">
                  Get Support
                </Link>
              </div>
            </div>
            
            {/* Downloads */}
            <div className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/app/hogar-app.jpg"
                  alt="Downloads"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Downloads</h3>
                <p className="text-light/70 mb-4">
                  Access software, firmware updates, and other downloadable resources.
                </p>
                <Link href="/resources/downloads" className="btn-sm-primary">
                  View Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 