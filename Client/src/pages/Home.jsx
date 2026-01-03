
import { FeaturesAlternatingLayout01 } from '@/components/Features';
import { HeroParallaxDemo } from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ServiceCard from '@/components/ServiceCard';
import React from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  return (
    <>
      <HeroParallaxDemo />
      <FeaturesAlternatingLayout01 />
      <ServiceCard />
      <Marquee />
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <button
        onClick={() => toast.success("Toast is working 🔥")}
        className="px-4 py-2 bg-white text-black"
      >
        Test Toast
      </button>
    </>
  );
}

export default Home