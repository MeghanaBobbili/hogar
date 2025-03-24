'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

type CardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  buttonText?: string;
  className?: string;
  imgClassName?: string;
  fullWidth?: boolean;
  variant?: 'default' | 'product' | 'feature';
};

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt = 'Card image',
  href,
  buttonText = 'Learn More',
  className = '',
  imgClassName = '',
  fullWidth = false,
  variant = 'default',
}: CardProps) {
  const cardClasses = `card-hover bg-dark/50 rounded-xl overflow-hidden border border-primary/10 ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const renderImage = () => {
    if (!imageSrc) return null;
    
    return (
      <div className={`relative ${variant === 'product' ? 'h-60' : 'h-48'} ${imgClassName}`}>
        {/* This is just a placeholder. In a real project, use next/image with proper domains */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
          {/* We'll replace this with actual images later */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🖼️</span>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => (
    <div className="p-6">
      <h3 className={`${variant === 'product' ? 'text-xl' : 'text-lg'} font-semibold mb-2`}>
        {title}
      </h3>
      {description && <p className="text-light/70 mb-4">{description}</p>}
      {href && buttonText && (
        <div className="mt-4">
          <Button href={href} variant={variant === 'feature' ? 'outline' : 'primary'}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );

  if (href && !buttonText) {
    return (
      <Link href={href} className={`${cardClasses} block transition-all duration-300 hover:shadow-lg hover:shadow-primary/20`}>
        {renderImage()}
        {renderContent()}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {renderImage()}
      {renderContent()}
    </div>
  );
} 