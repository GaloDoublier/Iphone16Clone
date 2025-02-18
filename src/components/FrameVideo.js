"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horseVideo, frameImg } from "@/utils";
import FrameText from "./FrameText";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutVideo() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const doblyRef = useRef(null);
  const TitleRef = useRef(null);

  useGSAP(() => {
    gsap.to(videoContainerRef.current, {
      scale: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        onEnter: () => ScrollTrigger.refresh(),
        onLeave: () => ScrollTrigger.refresh(),
      },
    });

    gsap.to(doblyRef.current, {
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: 1,
        onEnter: () => ScrollTrigger.refresh(),
        onLeave: () => ScrollTrigger.refresh(),
      },
    });

    gsap.to(TitleRef.current, {
      y: -200,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: 1,
        onEnter: () => ScrollTrigger.refresh(),
        onLeave: () => ScrollTrigger.refresh(),
      },
    });

    // Refresh ScrollTrigger after the page has fully loaded
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <>
      <section ref={containerRef} className="h-full flex items-center justify-center">
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          {/* Contenedor del video con transformaciones */}
          <div ref={videoContainerRef} className="relative origin-center transform scale-[1.3] z-10 lg:block hidden">
            <div ref={doblyRef} className="bg-black h-full w-full absolute opacity-40"></div>
            <h4 ref={TitleRef} className="absolute top-1/2 left-1/2 md:text-8xl z-30 text-3xl font-semibold transform -translate-x-1/2 -translate-y-1/2">
              4K Dolby Vision a 120 cps.
              <br />
              Esto es cine.
            </h4>
            <img src={frameImg} alt="Celular" className="absolute top-[-5px] md:top-[-10px] w-[110%] left-0 h-[105%] z-10 pointer-events-none" />
            <video src={horseVideo} autoPlay muted className="w-full h-full object-cover rounded-[10vw]" />
          </div>

          {/* Mobile version without animations */}
          <div className="relative origin-center transform scale-[1.0] z-10 lg:hidden block">
            <div className="bg-black h-full w-full absolute opacity-40"></div>
            <h4 className="absolute top-1/2 left-1/2 md:text-8xl z-30 text-3xl font-semibold ">
              4K Dolby Vision a 120 cps.
              <br />
              Esto es cine.
            </h4>
            <img src={frameImg} alt="Celular" className="absolute top-[-5px] md:top-[-10px] w-[110%] left-0 h-[105%] z-10 pointer-events-none" />
            <video src={horseVideo} autoPlay muted className="w-full h-full object-cover rounded-[10vw]" />
          </div>

          <FrameText />

        </div>
      </section>

      <section className="h-[30vh]"></section>
    </>
  );
}