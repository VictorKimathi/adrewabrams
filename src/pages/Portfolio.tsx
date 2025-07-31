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
    title: '10 Space-Saving Hacks for Small Kitchens',
    excerpt: 'How to maximize every inch without sacrificing style.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['interior', 'diy']
  }, {
    id: 2,
    title: 'The Psychology of Color in Home Design',
    excerpt: 'How different hues affect mood and perception in living spaces.',
    image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['interior', 'feature']
  }, {
    id: 3,
    title: "Sustainable gardening: a beginner's guide, 'Earth-friendly practices for growing your own food and flowers.'",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'",
    categories: ['gardening']
  }, {
    id: 4,
    title: 'Inside Celebrity Homes: Design Lessons to Steal',
    excerpt: 'Practical takeaways from high-end home tours.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['interior', 'feature']
  }, {
    id: 5,
    title: 'Year-Round Garden Maintenance Calendar',
    excerpt: 'Monthly tasks to keep your outdoor spaces thriving.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['gardening']
  }, {
    id: 6,
    title: 'Decluttering Your Home: The 15-Minute Method',
    excerpt: 'Small daily habits that lead to big organizational changes.',
    image: 'https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['diy']
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