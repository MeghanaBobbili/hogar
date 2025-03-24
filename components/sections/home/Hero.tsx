'use client';

import React from 'react';
import Button from '../../ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="w-full h-full relative">
          <Image 
            src="/images/banners/banner-01.jpg" 
            alt="Hogar Controls Smart Home Solutions"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      
      <div className="container-custom relative z-20 text-center">
        <h1 className="mb-6">
          <span className="block text-light">Seamless Control For</span>
          <span className="gradient-text">Smart Living</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-light/90">
          Revolutionize your lifestyle with our smart home solutions designed for modern living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/solutions" variant="primary">
            Explore Solutions
          </Button>
          <Button href="/get-started" variant="secondary">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
} 