import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Hogar Controls',
  description: 'Learn about Hogar Controls, our mission, vision, and journey in smart home automation.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">About</span>
              <span className="gradient-text">Hogar Controls</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Innovating the future of smart home technology since inception.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our <span className="gradient-text">Story</span></h2>
              <p className="text-light/80 mb-4">
                Hogar Controls was founded with a vision to transform everyday living spaces into intuitive, 
                responsive environments. Our journey began with a simple goal: to make home automation accessible, 
                affordable, and user-friendly for everyone.
              </p>
              <p className="text-light/80 mb-4">
                From our humble beginnings, we've grown into a global leader in the smart home industry, 
                with a presence in multiple countries and a diverse portfolio of innovative products.
              </p>
              <p className="text-light/80">
                Today, Hogar Controls continues to push the boundaries of what's possible in smart home technology, 
                always with our core mission in mind: enhancing the quality of life through thoughtful automation.
              </p>
            </div>
            <div className="bg-dark/30 border border-primary/20 rounded-xl h-80 overflow-hidden relative">
              <Image
                src="/images/general/experience-centre.jpg"
                alt="Company Story"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image 
                  src="/images/general/smart-home.jpg"
                  alt="Smart Home"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl mb-4">Our <span className="gradient-text">Mission</span></h3>
                <p className="text-light/80">
                  To revolutionize the way people interact with their living spaces by providing intuitive, 
                  reliable, and beautifully designed smart home solutions that enhance comfort, convenience, 
                  and energy efficiency.
                </p>
              </div>
            </div>
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image 
                  src="/images/general/smart-home.jpg"
                  alt="Smart Home"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl mb-4">Our <span className="gradient-text">Vision</span></h3>
                <p className="text-light/80">
                  A world where every home is a smart home, where technology seamlessly integrates into daily life 
                  to create environments that are more comfortable, secure, and sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core <span className="gradient-text">Values</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              The principles that guide everything we do at Hogar Controls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src="/images/general/smart-home-icon.png"
                  alt="Innovation"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-light/70">Continuously pushing the boundaries of what's possible in smart home technology.</p>
            </div>
            
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-light/70">Unwavering commitment to excellence in product design, manufacturing, and customer service.</p>
            </div>
            
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
              <p className="text-light/70">Putting our customers' needs and experiences at the center of everything we do.</p>
            </div>
            
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-light/70">Creating solutions that help reduce energy consumption and environmental impact.</p>
            </div>
            
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-light/70">Working together with partners, developers, and customers to create better solutions.</p>
            </div>
            
            <div className="p-6 bg-dark/30 rounded-xl border border-primary/20">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptability</h3>
              <p className="text-light/70">Embracing change and continuously evolving to meet new challenges and opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Leadership <span className="gradient-text">Team</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Meet the visionaries guiding Hogar Controls into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 w-48 mx-auto bg-dark/30 rounded-full overflow-hidden border border-primary/20 mb-4 relative">
                <Image
                  src="/images/general/testimonial.png"
                  alt="John Smith - CEO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-light/70">Chief Executive Officer</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 w-48 mx-auto bg-dark/30 rounded-full overflow-hidden border border-primary/20 mb-4 relative">
                <Image
                  src="/images/app/hogar-app.jpg"
                  alt="Sarah Johnson - CTO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-light/70">Chief Technology Officer</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 w-48 mx-auto bg-dark/30 rounded-full overflow-hidden border border-primary/20 mb-4 relative">
                <Image
                  src="/images/general/smart-home-icon.png"
                  alt="David Lee - COO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold">David Lee</h3>
              <p className="text-light/70">Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 