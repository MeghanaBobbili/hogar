'use client';

import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: any;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'bg-transparent border-2 border-primary text-light hover:bg-primary/10',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 