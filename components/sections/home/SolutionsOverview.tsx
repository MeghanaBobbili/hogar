'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SolutionsOverview() {
  return (
    <section className="py-24 bg-dark/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Live The <span className="gradient-text">Future</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-light/80">
            Enhance your home experience with our wide range of smart home solutions designed to elevate your lifestyle. At Hogar, we specialize in providing futuristic technologies for lighting and appliance automation, home security, curtain and blind automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lighting & Appliance Automation */}
          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
            <div className="aspect-[4/5] bg-dark/80 relative">
              <Image
                src="/images/solutions/lighting-automation.jpg"
                alt="Lighting & Appliance Automation"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl mb-2">Lighting & Appliance Automation</h3>
              <p className="text-light/80 mb-4">
                Intelligent lighting and appliance control for comfort and energy efficiency.
              </p>
              <Link href="/solutions#lighting" className="btn-sm-primary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Home Security */}
          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
            <div className="aspect-[4/5] bg-dark/80 relative">
              <Image
                src="/images/solutions/home-security.jpg"
                alt="Home Security"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl mb-2">Home Security</h3>
              <p className="text-light/80 mb-4">
                Comprehensive security solutions to keep your home and family safe.
              </p>
              <Link href="/solutions#security" className="btn-sm-primary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Curtain & Blind Automation */}
          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
            <div className="aspect-[4/5] bg-dark/80 relative">
              <Image
                src="/images/solutions/curtain-automation.png"
                alt="Curtain & Blind Automation"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl mb-2">Curtain & Blind Automation</h3>
              <p className="text-light/80 mb-4">
                Smart control over curtains and blinds for privacy, light control, and insulation.
              </p>
              <Link href="/solutions#curtains" className="btn-sm-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 