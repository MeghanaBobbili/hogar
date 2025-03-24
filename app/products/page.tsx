import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Smart Home Products | Hogar Controls',
  description: 'Explore our range of smart home products including controllers, touch panels, retrofit modules, and security devices.',
};

// Sample products data - in a real implementation, this would come from a database or API
const products = [
  {
    id: 1,
    name: 'Smart Touch Panel',
    category: 'Control',
    description: 'Elegant touch panel with intuitive interface.',
    price: '$199.99',
    imageSrc: '/images/products/touch-panel.svg',
  },
  {
    id: 2,
    name: 'Motion Sensor',
    category: 'Security',
    description: 'Advanced motion detection for home security.',
    price: '$59.99',
    imageSrc: '/images/products/motion-sensor.svg',
  },
  {
    id: 3,
    name: 'Smart Light Switch',
    category: 'Lighting',
    description: 'Control your lights from anywhere.',
    price: '$45.99',
    imageSrc: '/images/products/light-switch.svg',
  },
  {
    id: 4,
    name: 'Curtain Motor',
    category: 'Automation',
    description: 'Quiet motor for automated curtains.',
    price: '$129.99',
    imageSrc: '/images/products/curtain-motor.svg',
  },
  {
    id: 5,
    name: 'Security Camera',
    category: 'Security',
    description: 'HD surveillance with night vision.',
    price: '$149.99',
    imageSrc: '/images/products/security-camera.svg',
  },
  {
    id: 6,
    name: 'Smart Thermostat',
    category: 'Climate',
    description: 'Energy-efficient temperature control.',
    price: '$89.99',
    imageSrc: '/images/products/smart-thermostat.svg',
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Premium</span>
              <span className="gradient-text">Smart Home Products</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Discover innovative devices designed to bring convenience, comfort, and energy efficiency to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Controllers */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/smart-controllers.svg"
                  alt="Smart Controllers"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Smart Controllers</h3>
                <p className="text-light/70 mb-4">
                  Central hubs that connect and control all your smart home devices.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Touch Panels */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/touch-panels.svg"
                  alt="Touch Panels"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Touch Panels</h3>
                <p className="text-light/70 mb-4">
                  Elegant wall-mounted panels for controlling lighting, curtains, and more.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Retrofit Modules */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/retrofit-modules.svg"
                  alt="Retrofit Modules"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Retrofit Modules</h3>
                <p className="text-light/70 mb-4">
                  Add smart functionality to existing switches and outlets without rewiring.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Security Sensors */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/security-sensors.svg"
                  alt="Security Sensors"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Security Sensors</h3>
                <p className="text-light/70 mb-4">
                  Motion, door/window, and environmental sensors for comprehensive security.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Video Door Bells */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/video-doorbell.svg"
                  alt="Video Door Bells"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Video Door Bells</h3>
                <p className="text-light/70 mb-4">
                  See and speak with visitors remotely with HD video and two-way audio.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Smart Locks */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/smart-locks.svg"
                  alt="Door Locks"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Door Locks</h3>
                <p className="text-light/70 mb-4">
                  Keyless entry with PIN codes, fingerprint, and remote access control.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Security Cameras */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/security-cameras.svg"
                  alt="Security Cameras"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Security Camera</h3>
                <p className="text-light/70 mb-4">
                  HD cameras with night vision, motion detection, and cloud storage.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Blind Motors */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/blind-motors.svg"
                  alt="Blind Motors"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Blind Motors</h3>
                <p className="text-light/70 mb-4">
                  Quiet motors to automate your existing blinds for remote control.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
            
            {/* Curtain Motors */}
            <div className="bg-dark/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-dark/70 relative">
                <Image
                  src="/images/products/curtain-motors.svg"
                  alt="Curtain Motors"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Curtain Motors</h3>
                <p className="text-light/70 mb-4">
                  Powerful motors for automated curtains with smooth, silent operation.
                </p>
                <button className="btn-sm-primary">View Products</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ranges */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Product <span className="gradient-text">Ranges</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Choose the perfect product range that fits your requirements and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-dark/30 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-4">Elite Range</h3>
              <p className="text-light/80 mb-6">Premium quality smart home devices with advanced features and elegant design for luxury homes.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Premium materials and finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Advanced integration capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Expanded warranty protection</span>
                </li>
              </ul>
              <button className="btn-primary">View Elite Range</button>
            </div>
            
            <div className="p-8 bg-dark/30 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-4">Premium Range</h3>
              <p className="text-light/80 mb-6">Feature-rich smart home solutions with excellent value for quality-conscious homeowners.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Cost-effective automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Essential smart features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Standard warranty coverage</span>
                </li>
              </ul>
              <button className="btn-primary">View Premium Range</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 