import React from 'react'
import { highlightFirstVideo } from '@/utils'
import Glow from './Glow';

const ChipSection = () => {
  return (
    <section className="h-full common-padding max-sm:px-0">
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-center gap-5">
        <div className="relative z-0 h-[90vh] w-full">
            <video
              src={highlightFirstVideo}
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
            {/* Top and bottom shadows */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black opacity-100"></div>
            <div className="absolute bottom-[-5px] left-0 w-full h-16 bg-gradient-to-t from-black opacity-100"></div>
          </div>
          <div className="flex flex-col items-center text-[#c8c2bd] md:text-8xl text-5xl lg:mb-1 mb-16 font-semibold">
            <p className="text-white" style={{ filter: "url(#glow-1)" }}>
              Chip A18 Pro.
            </p>
            <Glow />
            {/* componente glow sacado de apple.com */}
            <p className="text-center z-10">Un iluminado.</p>
          </div>
          <div className="text-section h-56 flex xl:flex-row flex-col items-center justify-center">
            <p className="text-xl md:text-2xl xl:w-[65%] font-medium text-gray-100 text-center">
            El nuevo chip A18 Pro tiene <span className="font-bold text-white">una potencia demoledora</span> y trae una eficiencia y una velocidad excepcionales al iPhone 16 Pro. También es el motor de funcionalidades avanzadas de foto y video como Control de la Cámara y el responsable de que los juegos AAA tengan un rendimiento gráfico bestial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChipSection