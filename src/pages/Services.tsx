import React from 'react';
import { FileText, BookOpen, Search, Edit3 } from 'lucide-react';
import { Button } from '../components/UI/Button';
export function Services() {
  const services = [{
    id: 1,
    title: 'Long-Form Features',
    description: 'Up to 2,600+ words, in-depth research, expert interviews. Ideal for magazines, blogs, and editorial sites.',
    icon: <FileText size={48} className="text-[#5E8C6A]" />
  }, {
    id: 2,
    title: 'Home & Garden Guides',
    description: 'Seasonal prep, landscaping tips, decor trends. Practical, actionable, reader-focused content.',
    icon: <BookOpen size={48} className="text-[#5E8C6A]" />
  }, {
    id: 3,
    title: 'SEO-Optimized Content',
    description: 'Audience-driven, keyword-aware writing designed to rank and engage readers while maintaining a natural voice.',
    icon: <Search size={48} className="text-[#5E8C6A]" />
  }, {
    id: 4,
    title: 'Editing & Proofreading',
    description: 'AP Style expertise and polishing drafts for clarity, tone, and consistency in your content.',
    icon: <Edit3 size={48} className="text-[#5E8C6A]" />
  }];
  return <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#4A4A4A] mb-4 text-center">
          What I Offer
        </h1>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          From trend reports to long-form features, I help brands and publishers
          create compelling content.
        </p>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(service => <div key={service.id} className="bg-[#F7F3ED] p-8 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold font-serif text-[#4A4A4A] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
        {/* Process Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold font-serif text-[#4A4A4A] mb-8 text-center">
            My Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#5E8C6A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Discovery
              </h3>
              <p className="text-gray-700">
                Understanding your audience, goals, and voice to align our
                content strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#5E8C6A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Creation
              </h3>
              <p className="text-gray-700">
                Researching, drafting, and refining content that engages and
                informs your readers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#5E8C6A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                Refinement
              </h3>
              <p className="text-gray-700">
                Collaborative revision process to ensure the final piece exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-[#4A4A4A] mb-4">
            Let's discuss your content needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to create engaging, effective content that resonates with your
            audience? Let's start a conversation.
          </p>
          <Button to="/contact">Contact Me</Button>
        </div>
      </div>
    </div>;
}