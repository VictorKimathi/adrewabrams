import React from 'react';
import { Hero } from '../components/Home/Hero';
import { FeaturedTopics } from '../components/Home/FeaturedTopics';
import { MiniTestimonial } from '../components/Home/MiniTestimonial';
import { FinalCTA } from '../components/Home/FinalCTA';
export function Home() {
  return <div>
      <Hero />
      <FeaturedTopics />
      <MiniTestimonial />
      <FinalCTA />
    </div>;
}