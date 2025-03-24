'use client';

import { useState } from 'react';

// Sample FAQs data
const faqCategories = [
  {
    name: 'General',
    faqs: [
      {
        question: 'What is Hogar Controls?',
        answer: 'Hogar Controls is a leading provider of smart home automation solutions, offering a range of products including touch panels, controllers, security devices, and automated curtain systems designed to make homes more comfortable, secure, and energy-efficient.'
      },
      {
        question: 'Do I need professional installation for Hogar products?',
        answer: 'While some of our retrofit products can be installed by homeowners with basic DIY skills, we generally recommend professional installation for optimal performance and safety, especially for hardwired devices.'
      },
      {
        question: 'Are Hogar products compatible with other smart home systems?',
        answer: 'Yes, many Hogar Controls products are designed to integrate with popular smart home platforms including Amazon Alexa, Google Assistant, and Apple HomeKit, depending on the specific product.'
      },
    ]
  },
  {
    name: 'Products',
    faqs: [
      {
        question: 'What types of products does Hogar Controls offer?',
        answer: 'Hogar Controls offers a wide range of smart home products including touch panels, smart controllers, retrofit modules, security devices, video doorbells, smart locks, security cameras, and motors for blinds and curtains.'
      },
      {
        question: 'What is the difference between the Elite and Premium ranges?',
        answer: 'The Elite range offers our highest-end products with premium materials, advanced integration capabilities, and extended warranty protection, while the Premium range provides essential smart features at a more accessible price point with standard warranty coverage.'
      },
      {
        question: 'Are Hogar products energy efficient?',
        answer: 'Yes, Hogar products are designed with energy efficiency in mind. Many of our solutions help reduce energy consumption through smart scheduling, occupancy detection, and efficient control of lighting, heating, and cooling systems.'
      },
    ]
  },
  {
    name: 'Technology',
    faqs: [
      {
        question: 'What wireless protocols do Hogar products use?',
        answer: 'Hogar products typically utilize WiFi, Bluetooth, Zigbee, or Z-Wave protocols depending on the specific product and its intended application.'
      },
      {
        question: 'Is internet connectivity required for Hogar products?',
        answer: 'While internet connectivity enables remote access and some advanced features, most Hogar products can operate basic functions on your local network without internet connection.'
      },
      {
        question: 'How secure are Hogar smart home products?',
        answer: 'Hogar Controls prioritizes security in all our products. We implement industry-standard encryption protocols, regular security updates, and secure authentication methods to protect your home and data.'
      },
    ]
  },
  {
    name: 'Support',
    faqs: [
      {
        question: 'How long is the warranty on Hogar products?',
        answer: 'Standard warranty periods vary by product, typically ranging from 1-3 years for Premium range products and 2-5 years for Elite range products. Please refer to specific product documentation for detailed warranty information.'
      },
      {
        question: 'How do I contact Hogar Controls support?',
        answer: 'Support is available through our website, email, or by phone. Visit our Support page for contact information and hours of operation in your region.'
      },
      {
        question: 'Are firmware updates available for products?',
        answer: 'Yes, Hogar regularly releases firmware updates to improve performance, add features, and enhance security. Updates can typically be installed through our mobile apps or product management interfaces.'
      },
    ]
  },
];

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFaqs, setOpenFaqs] = useState<{[key: string]: boolean}>({});
  
  const toggleFaq = (question: string) => {
    setOpenFaqs(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };
  
  return (
    <section className="py-16 bg-dark/50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-dark/30 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl mb-6">Categories</h3>
              <ul className="space-y-2">
                {faqCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full text-left py-2 px-4 rounded ${
                        activeCategory === category.name 
                          ? 'bg-primary/20 text-secondary' 
                          : 'text-light/80 hover:bg-dark/50'
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* FAQs Content */}
          <div className="lg:w-3/4">
            <div className="bg-dark/30 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl mb-8">{activeCategory} <span className="gradient-text">FAQs</span></h2>
              
              <div className="space-y-4">
                {faqCategories.find(cat => cat.name === activeCategory)?.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-primary/20 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left p-4 md:p-6 flex items-center justify-between bg-dark/50"
                      onClick={() => toggleFaq(faq.question)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <span className="text-primary">
                        {openFaqs[faq.question] ? '−' : '+'}
                      </span>
                    </button>
                    
                    {openFaqs[faq.question] && (
                      <div className="p-4 md:p-6 bg-dark/30 border-t border-primary/10">
                        <p className="text-light/80">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Not finding an answer */}
            <div className="mt-8 bg-dark/30 rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-xl mb-4">Still have questions?</h3>
              <p className="text-light/80 mb-6">
                If you can't find the answer you're looking for, our support team is here to help.
              </p>
              <button className="btn-primary">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 