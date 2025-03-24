import Hero from '../components/sections/home/Hero';
import WhyChooseHogar from '../components/sections/home/WhyChooseHogar';
import SolutionsOverview from '../components/sections/home/SolutionsOverview';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hogar Controls | Smart Home Automation Solutions',
  description: 'Discover premium smart home solutions from Hogar Controls. Lighting, security, curtains, and touch panels for the modern smart home.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyChooseHogar />
      <SolutionsOverview />
      
      {/* Featured Products Section */}
      <section className="py-24 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Unleash the potential of <span className="gradient-text">smart living</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              We are proud to offer a diverse and innovative range of products designed to upgrade your lifestyle. Our products are carefully crafted to bring convenience, comfort and energy efficiency, at your fingertips.
            </p>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-4">Elite Range</h3>
              <p className="text-light/80 mb-6">Premium quality smart home devices with advanced features and elegant design for luxury homes.</p>
              <button className="btn-secondary">
                View Products
              </button>
            </div>
            <div className="p-8 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-4">Premium Range</h3>
              <p className="text-light/80 mb-6">Feature-rich smart home solutions with excellent value for quality-conscious homeowners.</p>
              <button className="btn-secondary">
                View Products
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facts & Figures Section */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Facts & <span className="gradient-text">Figures</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <h3 className="text-4xl font-bold gradient-text mb-2">12,000+</h3>
                  <p className="uppercase tracking-wider text-light/70">Unique Projects Executed</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-4xl font-bold gradient-text mb-2">1M+</h3>
                  <p className="uppercase tracking-wider text-light/70">Devices Installed</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-4xl font-bold gradient-text mb-2">18M+ SFT</h3>
                  <p className="uppercase tracking-wider text-light/70">Area Automated</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-dark/30 rounded-xl border border-primary/20">
                <p className="text-xl text-light/80">
                  With over a decade of experience in smart home automation, Hogar Controls has established itself as a leading provider of innovative solutions that transform living spaces across the globe.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <video 
                  className="w-full h-auto"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="/videos/facts-figures.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Promotion Section */}
      <section className="py-24 bg-dark bg-gradient-to-br from-dark via-primary/10 to-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Smart controls. <span className="gradient-text">On your smartphones.</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80 mb-8">
              Embrace the future and unlock a world of endless possibilities with Hogar automation. Together, let's create a smarter, more efficient and a better tomorrow.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-dark/30 rounded-xl p-8 border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Image 
                        src="/images/apps/hogar-app.jpg"
                        alt="Hogar Pro S App" 
                        width={50} 
                        height={50}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    <h4 className="font-semibold mb-2">Hogar Pro S</h4>
                    <p className="text-light/70 text-sm">Advanced control for all Hogar devices</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Image 
                        src="/images/apps/hogar-app.jpg"
                        alt="Hogar SE App" 
                        width={50} 
                        height={50}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    <h4 className="font-semibold mb-2">Hogar SE</h4>
                    <p className="text-light/70 text-sm">Simplified interface for everyday use</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Image 
                        src="/images/apps/hogar-app.jpg"
                        alt="Hogar Mini S App" 
                        width={50} 
                        height={50}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    <h4 className="font-semibold mb-2">Hogar Mini S</h4>
                    <p className="text-light/70 text-sm">Lightweight app for basic controls</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <button className="btn-primary">
                    <span className="flex items-center">
                      <span className="mr-2">📱</span> App Store
                    </span>
                  </button>
                  <button className="btn-primary">
                    <span className="flex items-center">
                      <span className="mr-2">🤖</span> Google Play
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              {/* App screenshot */}
              <div className="relative h-[500px] w-[250px] rounded-3xl overflow-hidden shadow-lg border-8 border-dark">
                <Image
                  src="/images/apps/mobile-app.png"
                  alt="Hogar Controls App Screenshot"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 