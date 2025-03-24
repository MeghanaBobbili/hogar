'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  href?: string;
  submenu?: {
    title: string;
    href: string;
  }[];
  isLast?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, href, submenu, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <Link 
          href={href} 
          className="text-light hover:text-secondary transition-colors inline-flex items-center"
        >
          {title}
          {submenu && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>
      ) : (
        <button
          className="text-light hover:text-secondary transition-colors inline-flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          {submenu && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      )}
      
      {submenu && isOpen && (
        <div className="absolute left-0 mt-2 py-2 bg-dark/95 backdrop-blur-md border border-primary/20 rounded-md shadow-lg min-w-[200px] z-10">
          {submenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-light hover:text-secondary hover:bg-dark/80"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItemProps[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Solutions',
      href: '/solutions',
      submenu: [
        { title: 'Lighting & Appliance Automation', href: '/solutions#lighting' },
        { title: 'Home Security', href: '/solutions#security' },
        { title: 'Curtain & Blind Automation', href: '/solutions#curtains' },
        { title: 'Complete Smart Home', href: '/solutions#complete' },
        { title: 'Why Choose Hogar', href: '/solutions#why-choose' },
      ],
    },
    {
      title: 'Products',
      href: '/products',
      submenu: [
        { title: 'Smart Controllers', href: '/products#controllers' },
        { title: 'Touch Panels', href: '/products#panels' },
        { title: 'Retrofit Modules', href: '/products#retrofit' },
        { title: 'Security Devices', href: '/products#security' },
        { title: 'Video Door Bells', href: '/products#doorbells' },
        { title: 'Smart Locks', href: '/products#locks' },
        { title: 'Security Cameras', href: '/products#cameras' },
        { title: 'Blind Motors', href: '/products#blind-motors' },
        { title: 'Curtain Motors', href: '/products#curtain-motors' },
        { title: 'Elite Range', href: '/products#elite' },
        { title: 'Premium Range', href: '/products#premium' },
      ],
    },
    {
      title: 'Resources',
      href: '/resources',
      submenu: [
        { title: 'Blogs & Articles', href: '/resources/blogs' },
        { title: 'Case Studies', href: '/resources/case-studies' },
        { title: 'Product Manuals', href: '/resources/manuals' },
        { title: 'FAQs', href: '/resources/faqs' },
        { title: 'Support', href: '/resources/support' },
        { title: 'Downloads', href: '/resources/downloads' },
      ],
    },
    {
      title: 'About Us',
      href: '/about',
      submenu: [
        { title: 'Our Story', href: '/about#story' },
        { title: 'Mission & Vision', href: '/about#mission' },
        { title: 'Core Values', href: '/about#values' },
        { title: 'Leadership Team', href: '/about#team' },
        { title: 'Careers', href: '/about/careers' },
        { title: 'News & Media', href: '/about/news' },
      ],
    },
    {
      title: 'Investors',
      href: '/investors',
      submenu: [
        { title: 'Corporate Information', href: '/investors#corporate' },
        { title: 'Financial Performance', href: '/investors#financial' },
        { title: 'Resolution Process under IBC', href: '/investors#resolution-process' },
        { title: 'NCLT Order', href: '/investors#nclt-order' },
        { title: 'Form A', href: '/investors#form-a' },
        { title: 'Form G', href: '/investors#form-g' },
        { title: 'Financial Creditors', href: '/investors#financial-creditors' },
        { title: 'Operational Creditors', href: '/investors#operational-creditors' },
        { title: 'Public Notice', href: '/investors#public-notice' },
        { title: 'Approved Resolution Plan', href: '/investors#resolution-plan' },
      ],
    },
    {
      title: 'Contact Us',
      href: '/contact',
      submenu: [
        { title: 'General Inquiries', href: '/contact#general' },
        { title: 'Sales', href: '/contact#sales' },
        { title: 'Support', href: '/contact#support' },
        { title: 'Partner with Us', href: '/contact#partner' },
        { title: 'Career Inquiries', href: '/contact#careers' },
        { title: 'Office Locations', href: '/contact#locations' },
      ],
      isLast: true,
    },
  ];

  // Mobile menu version of submenu items
  const renderMobileSubmenu = (items: { title: string; href: string }[], parentKey: string) => {
    return items.map((item, index) => (
      <Link 
        key={`${parentKey}-${index}`}
        href={item.href} 
        className="block py-2 pl-6 text-sm text-light/80 hover:text-secondary transition-colors"
      >
        {item.title}
      </Link>
    ));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/branding/footer-logo.svg" 
              alt="Hogar Controls" 
              width={200} 
              height={70}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                title={item.title} 
                href={item.href} 
                submenu={item.submenu}
                isLast={item.isLast}
              />
            ))}
            <button className="btn-primary ml-4">Get Started</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-light"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link href={item.href} className="block py-2 text-light hover:text-secondary transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  <div className="block py-2 text-light">
                    {item.title}
                  </div>
                )}
                {item.submenu && renderMobileSubmenu(item.submenu, `mobile-${index}`)}
              </div>
            ))}
            <button className="btn-primary w-full mt-4">Get Started</button>
          </div>
        )}
      </div>
    </header>
  );
} 