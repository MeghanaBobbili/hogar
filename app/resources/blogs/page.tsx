import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Smart Home Blog | Hogar Controls',
  description: 'Explore the latest articles, guides, and industry insights about smart home technology and automation.',
};

// Sample blog data - in a real implementation, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Smart Home Technology',
    excerpt: 'Explore upcoming trends and innovations that will shape the smart home industry in the coming years.',
    date: 'May 15, 2024',
    author: 'John Smith',
    category: 'Trends',
    imagePlaceholder: 'Blog Image 1',
  },
  {
    id: 2,
    title: 'How to Set Up Your Smart Lighting System',
    excerpt: 'A step-by-step guide to installing and configuring a smart lighting system for optimal performance and convenience.',
    date: 'May 8, 2024',
    author: 'Sarah Johnson',
    category: 'Guides',
    imagePlaceholder: 'Blog Image 2',
  },
  {
    id: 3,
    title: 'Smart Home Security: Protecting Your Digital Fortress',
    excerpt: 'Essential security measures to keep your smart home devices and personal data safe from cyber threats.',
    date: 'April 30, 2024',
    author: 'David Lee',
    category: 'Security',
    imagePlaceholder: 'Blog Image 3',
  },
  {
    id: 4,
    title: 'Energy Efficiency Through Smart Home Automation',
    excerpt: 'Discover how smart home technologies can help reduce energy consumption and lower utility bills.',
    date: 'April 22, 2024',
    author: 'Emily Chen',
    category: 'Sustainability',
    imagePlaceholder: 'Blog Image 4',
  },
  {
    id: 5,
    title: 'Voice Control Systems: Comparing the Top Options',
    excerpt: 'An in-depth comparison of popular voice assistants and how they integrate with smart home devices.',
    date: 'April 15, 2024',
    author: 'Michael Brown',
    category: 'Comparisons',
    imagePlaceholder: 'Blog Image 5',
  },
  {
    id: 6,
    title: 'Smart Home Solutions for Aging in Place',
    excerpt: 'How smart home technology can help seniors live independently and safely in their homes for longer.',
    date: 'April 8, 2024',
    author: 'Jennifer Wilson',
    category: 'Lifestyle',
    imagePlaceholder: 'Blog Image 6',
  },
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Smart Home</span>
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Stay updated with the latest trends, tips, and insights about smart home technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-dark/80">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              All
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Trends
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Guides
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Security
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Sustainability
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Comparisons
            </Link>
            <Link href="#" className="px-4 py-2 bg-dark/50 border border-primary/20 hover:border-primary/40 rounded-full text-light/80 hover:text-secondary transition-all">
              Lifestyle
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-dark/30 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                <div className="h-48 bg-dark/70 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <p className="text-light/70">{post.imagePlaceholder}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-light/60">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-light/70 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-light/60">By {post.author}</span>
                    <Link href="#" className="text-secondary hover:text-primary transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our <span className="gradient-text">Newsletter</span></h2>
            <p className="text-light/80 mb-8">
              Stay up-to-date with the latest articles, guides, and industry insights about smart home technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured <span className="gradient-text">Articles</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Our most popular content handpicked by our editors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <span className="text-primary text-sm mb-2 block">Technology</span>
              <h3 className="text-2xl mb-4">The Evolution of Smart Home Protocols</h3>
              <p className="text-light/80 mb-6">
                A comprehensive overview of smart home communication protocols and their development over time.
              </p>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                Read the full article →
              </Link>
            </div>
            
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <span className="text-primary text-sm mb-2 block">Integration</span>
              <h3 className="text-2xl mb-4">Connecting Different Smart Home Ecosystems</h3>
              <p className="text-light/80 mb-6">
                Learn how to integrate devices from different manufacturers into a cohesive smart home system.
              </p>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                Read the full article →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 