import React, { useState } from 'react';
import { Button } from '../components/UI/Button';
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'interior',
    label: 'Interior Design'
  }, {
    id: 'gardening',
    label: 'Gardening'
  }, {
    id: 'diy',
    label: 'DIY & Organization'
  }, {
    id: 'feature',
    label: 'Feature Articles'
  }];
  const projects = [{
    id: 1,
    title: 'Ceiling Fan Cleaning Trick That Keeps Dust Off the Floor',
    excerpt: 'Cleaning a ceiling fan tends to make more mess than it solves. One swipe across the blades and dust starts drifting onto nearby furniture, flooring, or anything underneath. Mic rofiber cloths and vacuums tend to scatter particles into the air, leaving behind a cloud that needs just as much cleanup as the fan itself.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Home Cleaning Tips','DIY Hacks']
  }, {
    id: 2,
    title: 'Why Statement Art Is Taking the Place of Gallery Walls in Modern Interiors',
    excerpt: 'Designers are moving away from gallery walls and leaning into something quieter but more commanding: statement art. Instead of a busy mix of small frames, many modern interiors now feature a single oversized and visually bold piece. The change reflects a shift in design taste, one that favors clarity, impact, and restraint.',
    image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Wall Art ', 'Minimalist Aesthetics']
  }, {
    id: 3,
    title: 'The Real Reason Your Porch Plants Keep Dying',
    excerpt: 'If your porch plants keep dying off despite regular watering and careful attention, the issue may not be your gardening skills. In many cases, the real problem is the porch itself. What causes so many container plants to fail in this space isn’t neglect or poor technique. It’s that the conditions your porch creates often don’t line up with what the plants actually need. Light levels, airflow, and heat retention all play a much bigger role than most people realize, and porches tend to push those factors to extremes. '
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [' Container Gardening ','Environmental Troubleshooting']
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.categories.includes(activeFilter));
  return <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#4A4A4A] mb-4 text-center">
          My Writing Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          A curated selection of published work across home, design, and
          lifestyle topics.
        </p>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full transition-all ${activeFilter === filter.id ? 'bg-[#5E8C6A] text-white' : 'bg-[#F7F3ED] text-gray-700 hover:bg-[#E5E0D9]'}`}>
              {filter.label}
            </button>)}
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map(category => {
                const filter = filters.find(f => f.id === category);
                return filter ? <span key={category} className="text-xs font-medium bg-[#F7F3ED] text-[#5E8C6A] px-2 py-1 rounded-full">
                        {filter.label}
                      </span> : null;
              })}
                </div>
                <Button variant="secondary" className="w-full">
                  Read Preview
                </Button>
              </div>
            </div>)}
        </div>
        {/* Final CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Want more samples? Request my full portfolio.
          </p>
          <Button to="/contact">Contact Me</Button>
        </div>
      </div>
    </div>;
}
