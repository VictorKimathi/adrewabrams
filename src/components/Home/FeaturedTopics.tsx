import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Leaf, Brush, Film } from 'lucide-react';
export function FeaturedTopics() {
  const topics = [{
    id: 1,
    title: 'Interior Design & Decor',
    icon: <HomeIcon size={32} className="text-[#5E8C6A]" />,
    link: '/portfolio'
  }, {
    id: 2,
    title: 'Gardening & Landscaping',
    icon: <Leaf size={32} className="text-[#5E8C6A]" />,
    link: '/portfolio'
  }, {
    id: 3,
    title: 'Housekeeping & Organization',
    icon: <Brush size={32} className="text-[#5E8C6A]" />,
    link: '/portfolio'
  }, {
    id: 4,
    title: 'HGTV & Celebrity Homes',
    icon: <Film size={32} className="text-[#5E8C6A]" />,
    link: '/portfolio'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center font-serif text-[#4A4A4A] mb-16">
          Featured Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map(topic => <Link key={topic.id} to={topic.link} className="bg-[#F7F3ED] p-8 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4">{topic.icon}</div>
              <h3 className="text-xl font-medium text-[#4A4A4A]">
                {topic.title}
              </h3>
            </Link>)}
        </div>
      </div>
    </section>;
}