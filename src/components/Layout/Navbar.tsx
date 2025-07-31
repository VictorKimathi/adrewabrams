import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent'}`;
  return <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="text-[#5E8C6A] font-bold text-2xl">AA</div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-base font-medium transition-colors duration-200 hover:text-[#5E8C6A] ${location.pathname === link.path ? 'text-[#5E8C6A]' : 'text-gray-700'}`}>
                {link.name}
              </Link>)}
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#5E8C6A] focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white fixed inset-0 z-50 flex flex-col items-center justify-center">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 text-gray-700 hover:text-[#5E8C6A]">
            <XIcon size={24} />
          </button>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-xl font-medium transition-colors duration-200 hover:text-[#5E8C6A] ${location.pathname === link.path ? 'text-[#5E8C6A]' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
}