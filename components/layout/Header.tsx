'use client';

import React, { useState, useEffect } from 'react';
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
  const menuRef = React.useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Debug the state of dropdown
  useEffect(() => {
    if (submenu && submenu.length > 0) {
      console.log(`Dropdown for ${title} is ${isOpen ? 'open' : 'closed'}`);
    }
  }, [isOpen, title, submenu]);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {href ? (
        <Link 
          href={href} 
          className="text-light hover:text-secondary transition-colors inline-flex items-center text-sm xl:text-base whitespace-nowrap px-2 py-1"
          onClick={() => submenu && submenu.length > 0 && setIsOpen(!isOpen)}
          onMouseEnter={() => submenu && submenu.length > 0 && setIsOpen(true)}
          onMouseLeave={() => submenu && submenu.length > 0 && setTimeout(() => setIsOpen(false), 200)}
        >
          {title}
          {submenu && submenu.length > 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>
      ) : (
        <button
          className="text-light hover:text-secondary transition-colors inline-flex items-center text-sm xl:text-base whitespace-nowrap px-2 py-1"
          onClick={() => submenu && submenu.length > 0 && setIsOpen(!isOpen)}
          onMouseEnter={() => submenu && submenu.length > 0 && setIsOpen(true)}
          onMouseLeave={() => submenu && submenu.length > 0 && setTimeout(() => setIsOpen(false), 200)}
        >
          {title}
          {submenu && submenu.length > 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      )}
      
      {/* Dropdown Menu */}
      {submenu && submenu.length > 0 && (
        <div 
          className={`dropdown-menu ${isOpen ? 'show' : ''}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ 
            minWidth: menuRef.current ? `${menuRef.current.offsetWidth}px` : '200px',
            display: isOpen ? 'block' : 'none' // Force display when open
          }}
        >
          {submenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="dropdown-item"
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
        className="block py-1.5 pl-4 text-xs text-light/80 hover:text-secondary transition-colors"
      >
        {item.title}
      </Link>
    ));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-dark/90 backdrop-blur-md">
      <style jsx global>{`
        /* Clean minimal styling */
        header {
          isolation: isolate;
        }
        
        /* Dropdown styling */
        .dropdown-menu {
          position: absolute !important;
          top: 100% !important;
          left: 0 !important;
          margin-top: 0.25rem;
          background-color: #0a0a14 !important;
          border: 2px solid rgba(148, 85, 255, 0.5) !important;
          border-radius: 0.375rem;
          padding: 0.5rem 0;
          min-width: 200px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          z-index: 10000 !important;
          max-height: 300px;
          overflow-y: auto;
          transition: all 0.2s ease;
        }
        
        .dropdown-menu.show {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          display: block !important;
        }
        
        .dropdown-item {
          display: block;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #f8f9fa;
          text-decoration: none;
          white-space: nowrap;
        }
        
        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #9455ff;
        }

        /* Fix for navbar scrolling */
        nav {
          overflow: visible !important;
        }
        
        /* Make sure dropdown buttons have proper cursor */
        button, a {
          cursor: pointer;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/images/branding/footer-logo.svg" 
              alt="Hogar Controls" 
              width={160} 
              height={55}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-grow justify-end">
            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-2 xl:space-x-4 2xl:space-x-6 flex-nowrap">
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={index} 
                  title={item.title} 
                  href={item.href} 
                  submenu={item.submenu}
                  isLast={item.isLast}
                />
              ))}
              <Link href="/get-started" className="btn-primary ml-2 xl:ml-4 whitespace-nowrap text-sm xl:text-base px-3 xl:px-4 py-1.5 xl:py-2">Get Started</Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-light"
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
          <div className="lg:hidden py-3 space-y-2 max-h-[70vh] overflow-y-auto bg-dark/95 backdrop-blur-md border border-primary/20 rounded-lg mt-2 shadow-lg z-[101] absolute left-0 right-0 mx-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-primary/10 last:border-b-0 px-2">
                {item.href ? (
                  <Link href={item.href} className="block py-1.5 text-sm text-light hover:text-secondary transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  <div className="block py-1.5 text-sm text-light">
                    {item.title}
                  </div>
                )}
                {item.submenu && (
                  <div className="pb-1.5">
                    {renderMobileSubmenu(item.submenu, `mobile-${index}`)}
                  </div>
                )}
              </div>
            ))}
            <div className="px-2 pt-2">
              <Link href="/get-started" className="btn-primary w-full text-sm py-1.5 block text-center">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 