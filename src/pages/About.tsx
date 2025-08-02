import React from 'react';
import { Button } from '../components/UI/Button';
export function About() {
  return <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#4A4A4A] mb-16 text-center">
          About Me
        </h1>
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img src="nina.jpg" alt="Andrew Abrams" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold font-serif text-[#4A4A4A] mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm Andrew Abrams, a freelance writer with over 5 years of
              experience crafting engaging, research-driven content in the home
              and lifestyle space. From modern farmhouse interiors to seasonal
              garden prep, I translate expert insights into accessible,
              reader-friendly stories. Based in Atlanta, I've contributed to
              digital publications, blogs, and media outlets covering everything
              from housekeeping hacks to architectural trends.
            </p>
            <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3">
              Key Traits
            </h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li className="mb-1">
                Passionate about sustainable living & design psychology
              </li>
              <li className="mb-1">
                Skilled in SEO, AP Style, and long-form writing
              </li>
              <li className="mb-1">Trusted for on-time, high-quality drafts</li>
            </ul>
            <a href="adrew.docx" download>
            <Button  variant="secondary">
              Download My Resume
            </Button>
            </a>
        
          </div>
        </div>
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-[#4A4A4A] mb-10 text-center">
            Professional Journey
          </h2>
          <div className="relative border-l-2 border-[#5E8C6A] pl-8 ml-4 pb-8">
            {/* Timeline Item 1 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[42px] bg-white p-1">
                <div className="w-6 h-6 rounded-full bg-[#5E8C6A]"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">2023</h3>
                <p className="text-lg font-medium text-[#5E8C6A] mb-2">
                  Published in top-tier lifestyle outlets
                </p>
                <p className="text-gray-700">
                  Expanded my portfolio to include feature articles in
                  nationally recognized publications, focusing on sustainable
                  home design and wellness-centered living spaces.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[42px] bg-white p-1">
                <div className="w-6 h-6 rounded-full bg-[#5E8C6A]"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">2019</h3>
                <p className="text-lg font-medium text-[#5E8C6A] mb-2">
                  Went full-time freelance
                </p>
                <p className="text-gray-700">
                  Transitioned to full-time freelance writing, specializing in
                  home, garden, and lifestyle content. Developed relationships
                  with multiple recurring clients and digital publications.
                </p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[42px] bg-white p-1">
                <div className="w-6 h-6 rounded-full bg-[#5E8C6A]"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">2017</h3>
                <p className="text-lg font-medium text-[#5E8C6A] mb-2">
                  Began writing for niche blogs
                </p>
                <p className="text-gray-700">
                  Started my writing career contributing to home renovation and
                  DIY blogs while developing my voice and building expertise in
                  the lifestyle space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
