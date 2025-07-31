import React from 'react';
import { Quote } from 'lucide-react';
export function MiniTestimonial() {
  const testimonials = [{
    id: 1,
    quote: 'Andrew delivers clean, insightful copy on tight deadlines. His feature on paint color psychology was one of our top-performing articles.',
    author: 'Jamie T.',
    position: 'Content Editor, HomeLife Today'
  }, {
    id: 2,
    quote: 'He has a rare ability to make practical advice feel inspiring. Readers love his tone.',
    author: 'Morgan L.',
    position: 'Lifestyle Blog Curator'
  }];
  return <section className="py-16 bg-[#5E8C6A]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Quote size={40} className="text-[#5E8C6A] mb-6 opacity-50" />
          <div className="text-center">
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className="mb-8 last:mb-0">
                <p className="text-xl md:text-2xl font-serif text-[#4A4A4A] italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-medium text-[#5E8C6A]">
                  {testimonial.author}, {testimonial.position}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}