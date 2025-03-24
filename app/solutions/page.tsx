import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Smart Home Solutions | Hogar Controls',
  description: 'Explore our range of smart home solutions including lighting control, security, automated curtains, and touch panels.',
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Complete</span>
              <span className="gradient-text">Smart Home Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              Transform your home with our integrated smart solutions for comfort, convenience, and security.
            </p>
          </div>
        </div>
      </section>

      {/* Lighting & Appliance Control */}
      <section id="lighting" className="py-24 bg-dark/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="mb-4">Lighting & <span className="gradient-text">Appliance Control</span></h2>
              <p className="text-lg mb-6 text-light/80">
                Our smart lighting and appliance control solutions let you manage your home's energy usage while creating the perfect ambiance for any occasion.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Control lights remotely from anywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Create customized lighting scenes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Schedule appliances for energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Voice control compatibility</span>
                </li>
              </ul>
              <button className="btn-primary">Explore Lighting Products</button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-dark/50 border border-primary/20 rounded-xl h-80 overflow-hidden relative">
                <Image
                  src="/images/solutions/lighting-automation.jpg"
                  alt="Smart Lighting & Appliance Control"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Surveillance */}
      <section id="security" className="py-24 bg-dark">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-dark/50 border border-primary/20 rounded-xl h-80 overflow-hidden relative">
                <Image
                  src="/images/solutions/home-security.jpg"
                  alt="Smart Security & Surveillance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="mb-4">Security & <span className="gradient-text">Surveillance</span></h2>
              <p className="text-lg mb-6 text-light/80">
                Keep your home and family safe with our comprehensive security and surveillance solutions that integrate seamlessly with your smart home system.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>HD security cameras with night vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Smart motion sensors and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Keyless entry with smart locks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Remote monitoring via smartphone app</span>
                </li>
              </ul>
              <button className="btn-primary">Explore Security Products</button>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Curtains & Blinds */}
      <section id="curtains" className="py-24 bg-dark/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="mb-4">Curtain & <span className="gradient-text">Blind Automation</span></h2>
              <p className="text-lg mb-6 text-light/80">
                Automate your window treatments for privacy, light control, and energy efficiency with our smart curtain and blind solutions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Control curtains and blinds via app or voice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Schedule opening and closing based on time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Integration with light sensors for automatic control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Quiet motors for unobtrusive operation</span>
                </li>
              </ul>
              <button className="btn-primary">Explore Curtain Products</button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-dark/50 border border-primary/20 rounded-xl h-80 overflow-hidden relative">
                <Image
                  src="/images/solutions/curtain-automation.png"
                  alt="Smart Curtain & Blind Automation"
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