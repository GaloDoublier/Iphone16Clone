"use client"
import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import dynamic from "next/dynamic";

const DynamicHeroVideo = dynamic(() => import("../components/HeroVideo"), {
  ssr: false,
});

const Hero = () => {
  useGSAP(() => {
    gsap.to('.hero-title', { duration: 2, opacity: 1, y: 0, delay: 3 });
    gsap.to('.btn', { duration: 2, opacity: 1, y: 0, delay: 3.5 });
  }, []);

  return (
    <section className="w-full h-screen bg-black">
      <div className='flex flex-col gap-24'>
        <p className="hero-title sm:pt-24 z-30">iPhone 16 Pro</p> {/*initially hidden */}
        <div className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          <DynamicHeroVideo />
        </div>
        <button className='btn opacity-0 absolute cursor-pointer left-1/2 transform -translate-x-1/2 top-[75vh]'>Comprar</button>
      </div>
    </section>
  );
};

export default Hero;