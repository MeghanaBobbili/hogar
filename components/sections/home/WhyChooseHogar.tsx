'use client';

import React from 'react';

export default function WhyChooseHogar() {
  return (
    <section className="py-24 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose <span className="gradient-text">Hogar Automation?</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-light/80">
            Welcome to Hogar Controls, your gateway to a seamlessly connected home. We offer cutting-edge smart home automation solutions that empower you to control and manage every aspect of your living space.
          </p>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <h3 className="text-4xl font-bold gradient-text mb-2">12,000+</h3>
            <p className="uppercase tracking-wider text-light/70">Unique Projects Executed</p>
          </div>
          <div className="text-center p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <h3 className="text-4xl font-bold gradient-text mb-2">1M+</h3>
            <p className="uppercase tracking-wider text-light/70">Devices Installed</p>
          </div>
          <div className="text-center p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <h3 className="text-4xl font-bold gradient-text mb-2">18M+ SFT</h3>
            <p className="uppercase tracking-wider text-light/70">Area Automated</p>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">360° Solution</h3>
            <p className="text-light/70">Complete home automation solutions for lighting, security, curtains, and more.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Retrofit</h3>
            <p className="text-light/70">Easy to install in existing homes without major renovations or rewiring.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Scalable</h3>
            <p className="text-light/70">Start small and expand your smart home system as your needs grow.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation & Research</h3>
            <p className="text-light/70">Cutting-edge technology and continuous innovation for better living.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Encrypted</h3>
            <p className="text-light/70">Strong security protocols to keep your smart home safe from vulnerabilities.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="text-light/70">Dedicated customer support team to assist with installation and troubleshooting.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 