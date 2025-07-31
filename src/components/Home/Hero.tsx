import React from 'react';
import { Button } from '../UI/Button';
export function Hero() {
  return <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
    }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3ED]/80 to-[#F7F3ED]/60" />
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] font-serif mb-4">
          Telling the Story of Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Freelance Writer | Interior Design & Lifestyle Content | Atlanta-Based
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/portfolio">Explore My Work</Button>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>;
}