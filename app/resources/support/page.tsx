import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Hogar Controls',
  description: 'Get help with your Hogar Controls smart home products. Find FAQs, troubleshooting guides, and contact our customer support team.',
};

const supportCategories = [
  {
    title: 'Installation Guides',
    description: 'Step-by-step instructions for installing your Hogar Controls products.',
    icon: '📋',
  },
  {
    title: 'Troubleshooting',
    description: 'Solutions for common issues you might encounter with your smart home devices.',
    icon: '🔧',
  },
  {
    title: 'App Support',
    description: 'Help with the Hogar Controls mobile application and features.',
    icon: '📱',
  },
  {
    title: 'Firmware Updates',
    description: 'Latest firmware updates for your devices and how to install them.',
    icon: '↗️',
  },
  {
    title: 'Integration Help',
    description: 'Guides for integrating Hogar Controls with other smart home systems.',
    icon: '🔄',
  },
  {
    title: 'Warranty Information',
    description: 'Details about product warranties and the claim process.',
    icon: '🛡️',
  },
];

const faqs = [
  {
    question: 'How do I reset my Hogar Controls device?',
    answer: 'Most Hogar devices can be reset by pressing and holding the reset button for 10 seconds. For specific device instructions, please refer to the product manual or contact our customer support team.'
  },
  {
    question: 'My device is not connecting to Wi-Fi. What should I do?',
    answer: 'First, ensure your Wi-Fi network is working properly. Make sure your device is within range of your router and that you\'re using a 2.4GHz network. If issues persist, try resetting the device and reconnecting it through the app.'
  },
  {
    question: 'How do I update the firmware on my device?',
    answer: 'Firmware updates are typically managed through the Hogar Controls app. Open the app, go to Device Settings, and check for available updates. Make sure your device is fully charged or connected to power before starting an update.'
  },
  {
    question: 'Can Hogar Controls work with my existing smart home system?',
    answer: 'Hogar Controls is designed to work with many popular smart home platforms including Google Home, Amazon Alexa, and Apple HomeKit. For specific compatibility information, please check the product specifications or contact our support team.'
  },
  {
    question: 'What should I do if my app is not detecting my device?',
    answer: 'Make sure Bluetooth and Wi-Fi are enabled on your phone. Ensure the device is powered on and in pairing mode. If issues persist, try closing and reopening the app, or reinstalling it if necessary.'
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-light">Customer</span>
              <span className="gradient-text">Support</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90">
              We're here to help you with your Hogar Controls smart home products.
            </p>
          </div>
        </div>
      </section>

      {/* Support Search */}
      <section className="py-12 bg-dark/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">How can we <span className="gradient-text">help you?</span></h2>
              <p className="text-light/80">Search our knowledge base for quick answers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Search for help with..." 
                className="flex-grow px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
              />
              <button className="btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Support <span className="gradient-text">Categories</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Browse by category to find the help you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <Link href="#" key={index} className="bg-dark/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-light/70">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Quick answers to common questions about Hogar Controls products
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-dark/30 rounded-xl border border-primary/20 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="text-primary">▼</span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-primary/20">
                    <p className="text-light/80">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Contact <span className="gradient-text">Support</span></h2>
            <p className="text-xl max-w-3xl mx-auto text-light/80">
              Can't find what you're looking for? Our customer support team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-light/80 mb-4">+1 (800) 123-4567</p>
              <p className="text-light/60 text-sm">Mon-Fri, 9AM-6PM EST</p>
            </div>
            
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-light/80 mb-4">support@hogarcontrols.com</p>
              <p className="text-light/60 text-sm">24/7 Support</p>
            </div>
            
            <div className="bg-dark/30 p-6 rounded-xl border border-primary/20 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-light/80 mb-4">Chat with our support team</p>
              <button className="btn-sm-primary">Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Submit a Ticket */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Submit a Support <span className="gradient-text">Ticket</span></h2>
              <p className="text-light/80 mb-8">
                Fill out the form below and our support team will get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-light mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-light mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
                    placeholder="Subject of your inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="product" className="block text-light mb-2">Product</label>
                  <select 
                    id="product"
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
                  >
                    <option value="">Select a product</option>
                    <option value="smart-controllers">Smart Controllers</option>
                    <option value="touch-panels">Touch Panels</option>
                    <option value="retrofit-modules">Retrofit Modules</option>
                    <option value="security-sensors">Security Sensors</option>
                    <option value="door-bells">Video Door Bells</option>
                    <option value="door-locks">Door Locks</option>
                    <option value="security-camera">Security Camera</option>
                    <option value="blind-motors">Blind Motors</option>
                    <option value="curtain-motors">Curtain Motors</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/60 text-light"
                    placeholder="Describe your issue in detail"
                  ></textarea>
                </div>
                
                <div>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 mr-2 accent-primary"
                    />
                    <span className="text-light/80">I agree to the privacy policy and terms of service</span>
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full">Submit Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 