"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'





const FrameText = () => {

  const InfoRef = useRef(null);

  useGSAP(() => {

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


  return (
    
    <div ref={InfoRef} className="absolute top-[90%] translate-y-[6rem] opacity-0 ">
    <div className="flex md:flex-row flex-col items-start justify-around screen-max-width gap-20">
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
  )
}

export default FrameText