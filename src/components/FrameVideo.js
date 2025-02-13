"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horseVideo, frameImg } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutVideo() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animación para el contenedor del video
      gsap.to(videoContainerRef.current, {
        scale: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top", // Inicio más predecible
          end: "+100%", // Distancia de scroll más controlada
          scrub: 1,
          pin: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="h-[100vh] flex items-center justify-center">
        <div className="relative w-full h-screen flex items-center justify-center">
          {/* Contenedor del video con transformaciones */}
          <div 
            ref={videoContainerRef} 
            className="relative  origin-center transform scale-[1.5]"
          >
          <img 
            src={frameImg} 
            alt="Celular" 
            className="absolute top-0 left-0 w-[130%] h-[105%] z-10 pointer-events-none"
          />
            <video 
              src={horseVideo} 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover rounded-[60px]"
            />
          </div>

          {/* Marco del celular - Debe coincidir con el tamaño final del video */}

        </div>
      </section>

      <section className="h-[100vh] bg-black"></section>
    </>
  );
}