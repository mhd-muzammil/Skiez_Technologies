
import { FeaturesAlternatingLayout01 } from '@/components/Features';
import { HeroParallaxDemo } from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroParallaxDemo />
      <FeaturesAlternatingLayout01 />
      <ServiceCard/>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </>
  );
}

export default Home