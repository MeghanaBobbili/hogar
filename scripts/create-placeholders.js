/**
 * This script creates placeholder image files for the Hogar Controls website
 * These placeholders represent images that would normally be pulled from the official website
 * Run this script using Node.js: node scripts/create-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Ensure directories exist
const directories = [
  'public/images/logos',
  'public/images/banners',
  'public/images/solutions',
  'public/images/products',
  'public/images/app'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create a simple SVG placeholder
const createSvgPlaceholder = (width, height, bgColor, textColor, text) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
};

// Generate placeholder images
const placeholders = [
  // Logos
  { path: 'public/images/logos/hogar-logo.svg', width: 200, height: 80, bg: '#101820', text: 'Hogar Controls Logo', textColor: '#ffffff' },
  { path: 'public/images/logos/hogar-logo-white.svg', width: 200, height: 80, bg: '#101820', text: 'Hogar Controls Logo', textColor: '#ffffff' },
  
  // Banners
  { path: 'public/images/banners/hero-banner.svg', width: 1920, height: 1080, bg: '#101820', text: 'Hero Banner', textColor: '#ffffff' },
  { path: 'public/images/banners/solutions-banner.svg', width: 1920, height: 600, bg: '#101820', text: 'Solutions Banner', textColor: '#ffffff' },
  { path: 'public/images/banners/products-banner.svg', width: 1920, height: 600, bg: '#101820', text: 'Products Banner', textColor: '#ffffff' },
  
  // Solutions
  { path: 'public/images/solutions/lighting.svg', width: 600, height: 800, bg: '#202830', text: 'Lighting & Appliance Control', textColor: '#ffffff' },
  { path: 'public/images/solutions/security.svg', width: 600, height: 800, bg: '#202830', text: 'Home Security', textColor: '#ffffff' },
  { path: 'public/images/solutions/curtains.svg', width: 600, height: 800, bg: '#202830', text: 'Curtain & Blind Automation', textColor: '#ffffff' },
  
  // Products
  { path: 'public/images/products/controllers.svg', width: 600, height: 400, bg: '#202830', text: 'Smart Controllers', textColor: '#ffffff' },
  { path: 'public/images/products/touch-panels.svg', width: 600, height: 400, bg: '#202830', text: 'Touch Panels', textColor: '#ffffff' },
  { path: 'public/images/products/retrofit-modules.svg', width: 600, height: 400, bg: '#202830', text: 'Retrofit Modules', textColor: '#ffffff' },
  { path: 'public/images/products/security-sensors.svg', width: 600, height: 400, bg: '#202830', text: 'Security Sensors', textColor: '#ffffff' },
  { path: 'public/images/products/door-bells.svg', width: 600, height: 400, bg: '#202830', text: 'Video Door Bells', textColor: '#ffffff' },
  { path: 'public/images/products/door-locks.svg', width: 600, height: 400, bg: '#202830', text: 'Door Locks', textColor: '#ffffff' },
  { path: 'public/images/products/security-cameras.svg', width: 600, height: 400, bg: '#202830', text: 'Security Cameras', textColor: '#ffffff' },
  { path: 'public/images/products/blind-motors.svg', width: 600, height: 400, bg: '#202830', text: 'Blind Motors', textColor: '#ffffff' },
  { path: 'public/images/products/curtain-motors.svg', width: 600, height: 400, bg: '#202830', text: 'Curtain Motors', textColor: '#ffffff' },
  
  // App
  { path: 'public/images/app/app-screenshot.svg', width: 300, height: 600, bg: '#202830', text: 'App Screenshot', textColor: '#ffffff' },
  { path: 'public/images/app/hogar-pro-s.svg', width: 200, height: 200, bg: '#202830', text: 'Hogar Pro S', textColor: '#ffffff' },
  { path: 'public/images/app/hogar-se.svg', width: 200, height: 200, bg: '#202830', text: 'Hogar SE', textColor: '#ffffff' },
  { path: 'public/images/app/hogar-mini-s.svg', width: 200, height: 200, bg: '#202830', text: 'Hogar Mini S', textColor: '#ffffff' },
];

// Write placeholder files
placeholders.forEach(placeholder => {
  const svg = createSvgPlaceholder(
    placeholder.width, 
    placeholder.height, 
    placeholder.bg, 
    placeholder.textColor, 
    placeholder.text
  );
  
  fs.writeFileSync(placeholder.path, svg);
  console.log(`Created placeholder: ${placeholder.path}`);
});

console.log('Placeholder generation complete!'); 