'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('general');
  
  return (
    <section id="general" className="py-16 bg-dark/50">
      <div className="container-custom">
        <div className="flex overflow-x-auto mb-8 pb-2 border-b border-primary/20">
          <button 
            className={`px-6 py-3 mr-2 whitespace-nowrap ${activeTab === 'general' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('general')}
          >
            General Inquiries
          </button>
          <button 
            className={`px-6 py-3 mr-2 whitespace-nowrap ${activeTab === 'sales' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('sales')}
          >
            Sales
          </button>
          <button 
            className={`px-6 py-3 mr-2 whitespace-nowrap ${activeTab === 'support' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('support')}
          >
            Support
          </button>
          <button 
            className={`px-6 py-3 mr-2 whitespace-nowrap ${activeTab === 'partner' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('partner')}
          >
            Partner with Us
          </button>
          <button 
            className={`px-6 py-3 mr-2 whitespace-nowrap ${activeTab === 'careers' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('careers')}
          >
            Career Inquiries
          </button>
          <button 
            className={`px-6 py-3 whitespace-nowrap ${activeTab === 'locations' ? 'border-b-2 border-secondary text-secondary' : 'text-light/80'}`}
            onClick={() => setActiveTab('locations')}
          >
            Office Locations
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-dark/30 rounded-xl p-6 md:p-8 border border-primary/20">
              <h2 className="text-2xl mb-6">
                {activeTab === 'general' && 'General Inquiries'}
                {activeTab === 'sales' && 'Contact Sales'}
                {activeTab === 'support' && 'Get Support'}
                {activeTab === 'partner' && 'Become a Partner'}
                {activeTab === 'careers' && 'Join Our Team'}
                {activeTab === 'locations' && 'Find Us'}
              </h2>
              
              {/* Form fields */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-light/90">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-light focus:border-secondary focus:outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-light/90">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-light focus:border-secondary focus:outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                {(activeTab === 'general' || activeTab === 'sales' || activeTab === 'support') && (
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-light/90">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-light focus:border-secondary focus:outline-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-light/90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 bg-dark/50 border border-primary/30 rounded-lg text-light focus:border-secondary focus:outline-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-dark/30 rounded-xl p-6 md:p-8 border border-primary/20 mb-8">
              <h3 className="text-xl mb-4">Contact Information</h3>
              <div className="space-y-4 text-light/80">
                <p className="flex items-start">
                  <span className="mr-3 mt-1">📧</span>
                  <span>
                    <strong className="block text-light">Email</strong>
                    {activeTab === 'general' && 'info@hogarcontrols.com'}
                    {activeTab === 'sales' && 'sales@hogarcontrols.com'}
                    {activeTab === 'support' && 'support@hogarcontrols.com'}
                    {activeTab === 'partner' && 'partners@hogarcontrols.com'}
                    {activeTab === 'careers' && 'careers@hogarcontrols.com'}
                    {activeTab === 'locations' && 'info@hogarcontrols.com'}
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 mt-1">📞</span>
                  <span>
                    <strong className="block text-light">Phone</strong>
                    +1 (123) 456-7890
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 mt-1">⏰</span>
                  <span>
                    <strong className="block text-light">Business Hours</strong>
                    Monday - Friday: 9:00 AM to 6:00 PM<br />
                    Saturday: 10:00 AM to 2:00 PM<br />
                    Sunday: Closed
                  </span>
                </p>
              </div>
            </div>
            
            {activeTab === 'locations' && (
              <div className="bg-dark/30 rounded-xl p-6 md:p-8 border border-primary/20">
                <h3 className="text-xl mb-4">Our Locations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Headquarters</h4>
                    <p className="text-light/80">
                      123 Tech Boulevard<br />
                      Suite 456<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Research & Development</h4>
                    <p className="text-light/80">
                      789 Innovation Street<br />
                      Building C<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">European Office</h4>
                    <p className="text-light/80">
                      10 Smart Home Avenue<br />
                      3rd Floor<br />
                      London EC1A 1BB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 