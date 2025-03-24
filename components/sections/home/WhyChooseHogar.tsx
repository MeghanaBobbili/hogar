'use client';

import React from 'react';
import Image from 'next/image';

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
              <Image 
                src="/images/general/smart-home-icon.png"
                alt="360° Solution"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">360° Solution</h3>
            <p className="text-light/70">Complete home automation solutions for lighting, security, curtains, and more.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 12V20.01C4 20.56 4.45 21 5 21H19C19.55 21 20 20.55 20 20V12" />
                <path d="M12 2L8 6H11V13H13V6H16L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Retrofit</h3>
            <p className="text-light/70">Easy to install in existing homes without major renovations or rewiring.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Scalable</h3>
            <p className="text-light/70">Start small and expand your smart home system as your needs grow.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation & Research</h3>
            <p className="text-light/70">Cutting-edge technology and continuous innovation for better living.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Encrypted</h3>
            <p className="text-light/70">Strong security protocols to keep your smart home safe from vulnerabilities.</p>
          </div>
          
          <div className="p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="text-light/70">Dedicated customer support team to assist with installation and troubleshooting.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 