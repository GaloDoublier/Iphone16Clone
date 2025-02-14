"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horseVideo, frameImg } from "@/utils";
import Titanium from "./Titanium";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutVideo() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const doblyRef = useRef(null);
  const TitleRef = useRef(null);
  const InfoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animación para el contenedor del video
      gsap.to(videoContainerRef.current, {
        scale: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top", // Inicio más predecible
          end: "+100%", // Distancia de scroll más controlada
          scrub: 1,
          pin: true,
        },
      });

      gsap.to(doblyRef.current, {
        opacity:0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top", // Inicio más predecible
          scrub: 1,
        },
      });

      gsap.to(TitleRef.current, {
        y:-200,
        opacity:0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top", // Inicio más predecible
          scrub: 1,
        },
      });

      gsap.to(InfoRef.current, {
        y:0,
        opacity:1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: InfoRef.current ,
          start: "top", // Inicio más predecible
          scrub: 1,
        },
      });


    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="h-[100vh] flex  items-center justify-center"
      >
        <div className="relative w-full h-screen flex flex-col items-center justify-center ">
          {/* Contenedor del video con transformaciones */}

          <div
            ref={videoContainerRef}
            className="relative  origin-center transform scale-[1.3] z-10 "
          >
            <div
              ref={doblyRef}
              className="bg-black h-full w-full absolute opacity-40"
            ></div>
            <h4
              ref={TitleRef}
              className="absolute top-1/2 left-1/2 md:text-8xl z-30 text-3xl font-semibold transform -translate-x-1/2 -translate-y-1/2"
            >
              4K Dolby Vision a 120 cps.
              <br></br>
              Esto es cine.
            </h4>
            <img
              src={frameImg}
              alt="Celular"
              className="absolute top-[-5px] md:top-[-10px] w-[110%] left-0 h-[105%] z-10 pointer-events-none"
            />
            <video
              src={horseVideo}
              autoPlay
              muted
              className="w-full h-full object-cover rounded-[10vw]"
            />
          </div>

          <div ref={InfoRef} className="absolute top-[90%] translate-y-20 opacity-0">
            <div className="flex md:flex-row flex-col items-start justify-around screen-max-width gap-20 z-0">
              <div className="flex flex-1  flex-col gap-10">
              <p className="text-xl w-full font-medium text-gray-100 px-5">
                El iPhone 16 Pro marca un hito en la grabación de video con
                nuestra mejor resolución y mayor frecuencia de cuadros hasta
                ahora: <span className="font-bold text-white">4K Dolby Vision a 120 cps.</span> Gracias a la nueva cámara
                Fusion de 48 MP con sensor quad pixel de segunda generación y a
                la potencia del chip A18 Pro, puedes grabar en este increíble
                formato en modo video o en cámara lenta.
              </p>
              <p className="text-xl font-medium text-gray-100 px-5">
                Ahora, puedes <span className="font-bold text-white">ajustar la velocidad de reproducción después de
                grabar</span> en la app Fotos, que fue rediseñada para darte más
                posibilidades al editar. Si quieres darles un efecto de ensueño
                a tus tomas, prueba la nueva opción a media velocidad. Y si
                quieres que parezcan verdaderas películas, baja la velocidad a
                24 cps.
              </p>
              </div>

              <div className="flex flex-1 flex-col gap-20">
              <h5 className="text-3xl w-[65%] mx-auto font-medium text-gray-100">
              <span className="font-bold text-white">La máxima calidad de video</span> vista en un smartphone
              </h5>
              <p className="text-xl font-medium w-[65%] mx-auto text-gray-100">
              El iPhone 16 Pro también <span className="font-bold text-white">da un salto en rendimiento de audio.</span> Con sus cuatro micrófonos con calidad de estudio vas a poder grabar a nivel pro. Todo va a sonar mucho más fiel a la realidad porque reducen el ruido ambiente a su mínima expresión. Con la nueva grabación de Audio Espacial te vas a sumergir de lleno en tus video cuando uses tus AirPods.
              </p>
              </div>
              
            </div>
          </div>

          {/* Marco del celular - Debe coincidir con el tamaño final del video */}
        </div>
      </section>

      <section className="h-[100vh] bg-black"></section>
    </>
  );
}