import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, FileText } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#F7F3ED] border-t border-[#E5E0D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[#5E8C6A] font-bold text-2xl">AA</div>
            <p className="mt-2 text-sm text-gray-600">
              Telling the Story of Home
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link to="/about" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
                Portfolio
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5E8C6A] transition-colors">
              <FileText size={20} />
              <span className="sr-only">Medium</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-[#E5E0D9] text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Andrew Abrams. All rights reserved.
        </div>
      </div>
    </footer>;
}