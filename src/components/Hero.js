"use client"
import { useState,useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@/utils'

const Hero = () => {

  const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ?  smallHeroVideo : heroVideo)

  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideo);

    return () => {
      window.removeEventListener('resize', handleVideo);
    }
  },[])

  useGSAP(()=>{
    gsap.to('.hero-title', {duration: 2, opacity: 1, y: 0, delay: 3});
    gsap.to('.btn', {duration: 2, opacity: 1, y: 0, delay: 3.5});
},[])

  return (
    <section className="w-full h-screen bg-black">

        
    <div className='flex flex-col gap-24'>

    <p className="hero-title sm:pt-24 z-30">iPhone 16 Pro</p> {/*initially hidden */}

        <div className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <button className='btn opacity-0 absolute cursor-pointer left-1/2 transform -translate-x-1/2 top-[75vh]'>Comprar</button>

        </div>
    </section>
  );
}

export default Hero