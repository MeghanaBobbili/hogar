import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Get Started | Hogar Controls',
  description: 'Fill out this form to get started with Hogar Controls smart home solutions.',
};

export default function GetStartedPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/70 z-0"></div>
        <div className="relative z-10 container-custom py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
                Begin Your <span className="text-primary">Smart Home</span> Journey
              </h1>
              <p className="text-light/80 text-lg mb-6">
                Complete the form below to connect with our smart home experts and learn how Hogar Controls can transform your living space.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/solutions/lighting-automation.jpg"
                alt="Hogar Controls Smart Home"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-12 bg-dark-surface">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>
      
      {/* Why Choose Hogar */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-8 text-center">Why Choose Hogar Controls</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-light mb-3 text-center">Premium Quality</h3>
              <p className="text-light/80 text-center">
                Experience top-tier smart home devices built with the highest quality materials and technologies.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-light mb-3 text-center">Seamless Integration</h3>
              <p className="text-light/80 text-center">
                Our solutions work together flawlessly, creating a unified smart home experience with intuitive control.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-light mb-3 text-center">Security & Privacy</h3>
              <p className="text-light/80 text-center">
                Your data and home security are our priority, with advanced encryption and privacy safeguards built in.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="py-12 bg-dark-surface">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 rounded-lg shadow-md">
              <div className="flex gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-light/80 italic mb-4">
                "Transforming our home with Hogar Controls has been amazing. The lighting automation and security features give us peace of mind, and their support team was exceptional throughout the installation process."
              </p>
              <div className="text-light font-medium">- Rajiv Mehta, Mumbai</div>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 rounded-lg shadow-md">
              <div className="flex gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-light/80 italic mb-4">
                "The curtain automation system from Hogar Controls has made our lifestyle so much more convenient. The touch panels look elegant and the app is incredibly user-friendly. Definitely worth the investment!"
              </p>
              <div className="text-light font-medium">- Priya Sharma, New Delhi</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 