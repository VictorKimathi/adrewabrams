import React from 'react';
import { Quote } from 'lucide-react';
import { Button } from '../components/UI/Button';
export function Testimonials() {
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
  }, {
    id: 3,
    quote: 'Reliable, professional, and deeply knowledgeable about design trends.',
    author: 'Sarah K.',
    position: 'Digital Publisher'
  }, {
    id: 4,
    quote: "Andrew's writing strikes the perfect balance between informative and engaging. His home organization guides have become reader favorites.",
    author: 'Michael R.',
    position: 'Editorial Director'
  }, {
    id: 5,
    quote: 'Working with Andrew is a breath of fresh air. He understands briefs quickly and delivers content that rarely needs revisions.',
    author: 'Priya J.',
    position: 'Content Marketing Manager'
  }];
  return <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#4A4A4A] mb-4 text-center">
          What Clients & Editors Say
        </h1>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Feedback from collaborators who've trusted my voice and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-[#F7F3ED] p-8 rounded-lg relative">
              <Quote size={32} className="text-[#5E8C6A] opacity-30 absolute top-6 left-6" />
              <div className="pl-6">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-[#4A4A4A]">
                    {testimonial.author}
                  </p>
                  <p className="text-[#5E8C6A]">{testimonial.position}</p>
                </div>
              </div>
            </div>)}
        </div>
        {/* Logos Section (Optional) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-[#4A4A4A] mb-8 text-center">
            Publications
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Logos displayed for illustrative purposes only
          </p>
        </div>
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-[#4A4A4A] mb-4">
            Work with a trusted writer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to create content that engages your audience and delivers
            results?
          </p>
          <Button to="/contact">Reach Out Today</Button>
        </div>
      </div>
    </div>;
}