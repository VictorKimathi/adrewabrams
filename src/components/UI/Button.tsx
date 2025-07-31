import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}
export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-200 inline-block text-center';
  const variantClasses = {
    primary: 'bg-[#5E8C6A] text-white hover:bg-[#4D7258] shadow hover:shadow-md',
    secondary: 'bg-white text-[#5E8C6A] border border-[#5E8C6A] hover:bg-[#F7F3ED]'
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (to) {
    return <Link to={to} className={classes}>
        {children}
      </Link>;
  }
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>;
  }
  return <button className={classes} onClick={onClick}>
      {children}
    </button>;
}