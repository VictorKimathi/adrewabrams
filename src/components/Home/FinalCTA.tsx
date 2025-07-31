import React from 'react';
import { Button } from '../UI/Button';
export function FinalCTA() {
  return <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#4A4A4A] mb-4">
          Need expertly written, audience-focused content?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's talk about how I can help bring your vision to life with clear,
          engaging, and professional writing.
        </p>
        <Button to="/contact" className="px-8 py-4">
          Contact Me
        </Button>
      </div>
    </section>;
}