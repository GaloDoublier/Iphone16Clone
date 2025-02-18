import { models } from "@/constants";
import { iphone16proImg, iphone16Img, rightImg, a18proIcon, intelligenceIcon, sideButtonIcon, cam16proIcon, batteryIcon, a18Icon, cam16Icon } from "@/utils";
import Image from "next/image";
import React from "react";

const BuySection = () => {
  return (
    <section className="w-screen  bg-[#1d1d1f] py-24">
      <div className="flex md:flex-row flex-col items-center justify-around py-20">
        <h3 className="text-6xl font-bold">Encuentra el iPhone perfecto para ti.</h3>
        <p className='text-blue hover:underline cursor-pointer flex items-center text-xl'>
                     Comparar todos los modelos
                      <img src={rightImg} alt="right" className='ml-2'/>
                    </p>
      </div>
      <div className="w-4/5 mx-auto bg-black rounded-3xl h-full flex items-center justify-center gap-5 py-24">
        <div className=" h-full w-[55%] flex md:flex-row flex-col gap-32">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image src={iphone16proImg} height={900} width={800} />
            <div className="flex gap-2 items-center justify-between">
              {models.map((model) => {
                console.log(model.color[0]);
                return (
                  <div
                    className={`w-4 h-4 rounded-full`}
                    style={{ backgroundColor: model.color[0] }}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-orange-500 font-semibold">Nuevo</span>
              <h3 className="text-white text-3xl font-semibold">
                iPhone 16 Pro
              </h3>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <p className="text-gray-200 font-semibold text-xl py-5">Modelo mostrado</p>
              <p className='text-blue hover:underline cursor-pointer flex items-center text-xl'>
                            Comprar
                            <img src={rightImg} alt="right" className='ml-2'/>
              </p>
            </div>

            

            <div className="flex flex-col items-center justify-center gap-10 pt-10">
              <div className="flex flex-col items-center justify-center">
                <Image src={a18proIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Chip A18 Pro
                <br/>
                con GPU de 6 núcleos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={intelligenceIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Diseñado para Apple Intelligence
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={sideButtonIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Control de la Cámara
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={cam16proIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Sistema de cámaras Pro
                <br/>
                Nuestra cámara Fusion de 48 MP más avanzada
                <br/>
                Cámara teleobjetivo de 5x
                <br/>
                Cámara ultra gran angular de 48 MP
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={batteryIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Hasta 33 horas de reproducción de video
                </p>
              </div>
            </div>

          </div>


          <div className="flex flex-col items-center justify-center gap-10">
            <Image src={iphone16Img} height={900} width={800} />
            <div className="flex gap-2 items-center justify-between">
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: "#6473b0" }}
              ></div>
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: "#82a8a6" }}
              ></div>
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: "#c981b0" }}
              ></div>
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: "#e0e0e0" }}
              ></div>
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: "#191b1c" }}
              ></div>
            </div>

            <div className='flex flex-col items-center'>
                <span className='text-orange-500 font-semibold'>Nuevo</span>
                <h3 className='text-white text-3xl font-semibold'>iPhone 16</h3>
            </div>
            
            <div className='flex flex-col items-center gap-2'>
              <button className='btn cursor-pointer z-20'>Mas Información</button>
              <p className='text-blue hover:underline cursor-pointer flex items-center text-xl'>
                            Comprar
                            <img src={rightImg} alt="right" className='ml-2'/>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 pt-10">
              <div className="flex flex-col items-center justify-center">
                <Image src={a18Icon} height={80} width={80} />
                <p className=" text-white text-center">
                Chip A18
                <br/>
                con GPU de 5 núcleos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={intelligenceIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Diseñado para Apple Intelligence
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={sideButtonIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Control de la Cámara
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={cam16Icon} height={80} width={80} />
                <p className=" text-white text-center">
                Sistema avanzado de dos cámaras
                <br/>
                Avanzada cámara Fusion de 48 MP
                <br/>
                Teleobjetivo de 2x
                <br/>
                Cámara ultra gran angular de 12 MP
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src={batteryIcon} height={80} width={80} />
                <p className=" text-white text-center">
                Hasta 27 horas de reproducción de video
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
