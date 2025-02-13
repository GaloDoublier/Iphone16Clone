"use client"
import React from 'react'
import Glow from './Glow'
import dynamic from 'next/dynamic';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const DynamicTitaniumVideo = dynamic(() => import("../components/TitaniumVideo"), {
  ssr: false,
});



const Titanium = () => {
    useGSAP(() => {
        gsap.to('.opacity-0', { duration: 2, opacity: 1, delay: 1 });
    }, []);
  return (
    <section className="common-padding w-full h-full">
        <div className='flex flex-col leading-none'>
            
        <div className="screen-max-width">
            <div className="flex flex-col items-center relative text-[#c8c2bd] md:text-8xl text-5xl lg:mb-10 mb-16 font-semibold leading-none opacity-0">
                <p className="text-center">Resistente. Imponente.</p>
                <p className="text-white" style={{ filter: "url(#glow-1)" }}>
                    Titanio.
                </p>
                <Glow />
                {/* componente glow sacado de apple.com */}
            </div>
        </div>

        <div className="video-container w-[80vw]  relative top-0 left-0 pointer-events-none mx-auto">
            <DynamicTitaniumVideo />
        </div>

    </div>
    </section>
  );
}

export default Titanium