"use client"
import React, { useEffect } from 'react'
import Glow from './Glow'
import dynamic from 'next/dynamic';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const DynamicTitaniumVideo = dynamic(() => import("../components/TitaniumVideo"), {
  ssr: false,
});

const Titanium = () => {
  useEffect(() => {
    gsap.to('.opacity-0', { duration: 2, opacity: 1, delay: 1 });
    gsap.fromTo('.animation', 
      { y: 20, opacity: 0}, 

      { 
        y: 0, 
        opacity: 1, 
        duration: 3, 
        stagger: 0.25,
        scrollTrigger: {
          trigger: '.animation',
          start: 'top 80%'
        },
      }
    );
  }, []);

  return (
    <section className="common-padding w-full h-full">
      <div className='flex flex-col leading-none'>
        <div className="screen-max-width py-12">
          <div className="titanium flex flex-col items-center relative text-[#c8c2bd] md:text-8xl text-5xl lg:mb-10 mb-16 font-semibold leading-none opacity-0">
            <p className="text-center">Resistente. Imponente.</p>
            <p className="text-white" style={{ filter: "url(#glow-1)" }}>
              Titanio.
            </p>
            <Glow />
            {/* componente glow sacado de apple.com */}
          </div>
        </div>

        <div className="video-container w-[80vw] relative top-0 left-0 pointer-events-none mx-auto">
          <DynamicTitaniumVideo />
        </div>

        <div className='text-section h-[40vh] flex xl:flex-row flex-col items-center justify-center gap-10 max-sm:mt-40'>
          <p className="text-xl animation opacity-0 translate-y-[-20px] md:text-xl xl:w-[25%] font-medium text-gray-100 px-25">
            El iPhone 16 Pro tiene un sofisticado diseño de titanio grado 5 con una nueva textura microarenada. Como el titanio es uno de los metales con mayor relación peso/dureza, este modelo es <span className="font-bold text-white">increíblemente resistente y liviano.</span> Además, viene en cuatro acabados que se robarán las miradas, como el nuevo titanio del desierto.
          </p>
          <p className="text-xl animation opacity-0 translate-y-[-20px] md:text-xl xl:w-[25%] font-medium text-gray-100 px-25">
            Las novedades no se quedan sólo en el exterior. Con su subestructura térmica 100% reciclada y su vidrio posterior optimizado para disipar mejor el calor, el iPhone 16 Pro tiene un <span className="font-bold text-white">rendimiento continuo</span> hasta un 20% superior al del iPhone 15 Pro. Prepárate para hacer todo lo que te gusta y jugar al más alto nivel por horas y horas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Titanium;