'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    projectType: '',
    message: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interestedIn || !formData.projectType || !formData.consent) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // In a real implementation, you would send the form data to a server here
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your interest! Our team will contact you shortly.'
    });
    
    // Reset form after successful submission
    if (formStatus.success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestedIn: '',
        projectType: '',
        message: '',
        consent: false
      });
    }
  };

  return (
    <div className="bg-dark/30 backdrop-blur-md border border-primary/10 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-light mb-6 text-center">Get Started with Hogar Controls</h2>
      
      {formStatus.submitted && (
        <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-900/30 border border-green-500/30 text-green-300' : 'bg-red-900/30 border border-red-500/30 text-red-300'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-light mb-2">First Name*</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-light mb-2">Last Name*</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-light mb-2">Email Address*</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-light mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="interestedIn" className="block text-light mb-2">I'm Interested In*</label>
          <select 
            id="interestedIn"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select an option</option>
            <option value="lighting">Lighting & Appliance Automation</option>
            <option value="security">Home Security Solutions</option>
            <option value="curtains">Curtain & Blind Automation</option>
            <option value="complete">Complete Smart Home</option>
            <option value="consultation">Just a Consultation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-light mb-2">Project Type*</label>
          <select 
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select an option</option>
            <option value="newConstruction">New Construction</option>
            <option value="renovation">Renovation</option>
            <option value="existingHome">Existing Home</option>
            <option value="commercial">Commercial Space</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-light mb-2">Additional Information</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full bg-dark/50 border border-primary/20 rounded-md px-4 py-2 text-light focus:border-primary focus:outline-none"
            placeholder="Tell us more about your project or requirements"
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="mt-1 mr-3"
            required
          />
          <label htmlFor="consent" className="text-light/80 text-sm">
            I consent to Hogar Controls collecting my personal information and contacting me regarding my inquiry. See our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more information.
          </label>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn-primary px-8 py-3 text-base hover:bg-primary/90 transition-colors">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 