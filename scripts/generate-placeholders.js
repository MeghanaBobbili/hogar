const fs = require('fs');
const path = require('path');

// Ensure directories exist
const directories = [
  'public/images/banners',
  'public/images/products',
  'public/images/solutions',
  'public/images/about',
  'public/images/apps',
];

// Create directories if they don't exist
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate SVG placeholder image with text
function generateSvgPlaceholder(width, height, text, bg, textColor) {
  return `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text 
    x="50%" 
    y="50%" 
    font-family="Arial, sans-serif" 
    font-size="${Math.min(width, height) / 15}px" 
    fill="${textColor}" 
    text-anchor="middle" 
    dominant-baseline="middle"
  >
    ${text}
  </text>
</svg>`;
}

// Define images to create
const images = [
  // Banner images
  { path: 'banners/hero-banner.svg', width: 1920, height: 1080, text: 'Smart Home Hero Banner', bg: '#3a4a5c', textColor: '#ffffff' },
  
  // Solution images
  { path: 'solutions/lighting-automation.svg', width: 800, height: 600, text: 'Lighting & Appliance Automation', bg: '#2a3a4c', textColor: '#ffffff' },
  { path: 'solutions/home-security.svg', width: 800, height: 600, text: 'Home Security', bg: '#4a2a3c', textColor: '#ffffff' },
  { path: 'solutions/curtain-automation.svg', width: 800, height: 600, text: 'Curtain & Blind Automation', bg: '#2a4a3c', textColor: '#ffffff' },
  { path: 'solutions/360-solution.svg', width: 800, height: 600, text: '360° Solution', bg: '#3a2a4c', textColor: '#ffffff' },
  { path: 'solutions/retrofit.svg', width: 800, height: 600, text: 'Retrofit', bg: '#4c2a3a', textColor: '#ffffff' },
  { path: 'solutions/scalable.svg', width: 800, height: 600, text: 'Scalable', bg: '#3a4c2a', textColor: '#ffffff' },
  { path: 'solutions/innovation.svg', width: 800, height: 600, text: 'Innovation & Research', bg: '#2a3c4a', textColor: '#ffffff' },
  { path: 'solutions/secure.svg', width: 800, height: 600, text: 'Secure & Encrypted', bg: '#4a3a2c', textColor: '#ffffff' },
  { path: 'solutions/support.svg', width: 800, height: 600, text: 'Support', bg: '#2a4c3a', textColor: '#ffffff' },
  
  // Product images
  { path: 'products/gold-touch-panel.svg', width: 800, height: 600, text: 'Gold Touch Panel', bg: '#c0a030', textColor: '#ffffff' },
  { path: 'products/silver-touch-panel.svg', width: 800, height: 600, text: 'Silver Touch Panel', bg: '#a0a0a0', textColor: '#ffffff' },
  { path: 'products/smart-controllers.svg', width: 800, height: 600, text: 'Smart Controllers', bg: '#3a3a4c', textColor: '#ffffff' },
  { path: 'products/touch-panels.svg', width: 800, height: 600, text: 'Touch Panels', bg: '#4c3a3a', textColor: '#ffffff' },
  { path: 'products/retrofit-modules.svg', width: 800, height: 600, text: 'Retrofit Modules', bg: '#3a4c3a', textColor: '#ffffff' },
  { path: 'products/security-sensors.svg', width: 800, height: 600, text: 'Security Sensors', bg: '#3a3a3a', textColor: '#ffffff' },
  { path: 'products/door-bells.svg', width: 800, height: 600, text: 'Video Door Bells', bg: '#4c4c3a', textColor: '#ffffff' },
  { path: 'products/door-locks.svg', width: 800, height: 600, text: 'Door Locks', bg: '#4c3a4c', textColor: '#ffffff' },
  { path: 'products/security-camera.svg', width: 800, height: 600, text: 'Security Camera', bg: '#3a4c4c', textColor: '#ffffff' },
  { path: 'products/blind-motors.svg', width: 800, height: 600, text: 'Blind Motors', bg: '#4c4c4c', textColor: '#ffffff' },
  { path: 'products/curtain-motors.svg', width: 800, height: 600, text: 'Curtain Motors', bg: '#3a3a3a', textColor: '#ffffff' },
  { path: 'products/elite-range.svg', width: 800, height: 600, text: 'Elite Range', bg: '#2a2a3c', textColor: '#ffffff' },
  { path: 'products/premium-range.svg', width: 800, height: 600, text: 'Premium Range', bg: '#3c2a2a', textColor: '#ffffff' },
  
  // About images
  { path: 'about/company-story.svg', width: 800, height: 600, text: 'Company Story', bg: '#2a2a4c', textColor: '#ffffff' },
  { path: 'about/team-member-1.svg', width: 600, height: 600, text: 'CEO', bg: '#3c3c3c', textColor: '#ffffff' },
  { path: 'about/team-member-2.svg', width: 600, height: 600, text: 'CTO', bg: '#3c3c3c', textColor: '#ffffff' },
  { path: 'about/team-member-3.svg', width: 600, height: 600, text: 'COO', bg: '#3c3c3c', textColor: '#ffffff' },
  
  // App images
  { path: 'apps/hogar-pro-s.svg', width: 800, height: 1200, text: 'Hogar Pro S App', bg: '#3a2a4c', textColor: '#ffffff' },
  { path: 'apps/hogar-se.svg', width: 800, height: 1200, text: 'Hogar SE App', bg: '#2a3a4c', textColor: '#ffffff' },
  { path: 'apps/hogar-mini-s.svg', width: 800, height: 1200, text: 'Hogar Mini S App', bg: '#4c2a3a', textColor: '#ffffff' },
  { path: 'apps/app-screenshot.svg', width: 800, height: 1600, text: 'App Screenshot', bg: '#2a2a2a', textColor: '#ffffff' },
];

// Generate all placeholder images
images.forEach(img => {
  const fullPath = path.join('public/images', img.path);
  const svg = generateSvgPlaceholder(img.width, img.height, img.text, img.bg, img.textColor);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, svg);
  console.log(`Created placeholder image: ${fullPath}`);
});

console.log('All placeholder images have been generated.'); 