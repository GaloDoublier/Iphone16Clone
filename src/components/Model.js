"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ModelView from './ModelView'
import { useState,useRef, useEffect } from 'react'
import { yellowImg } from '@/utils'
import * as THREE from 'three'
gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";
import { models, sizes } from '@/constants'
import Animation from './Animation'

const IphoneScene = dynamic(() => import("../components/IphoneScene"), {
  ssr: false,
});



const Model = () => {

    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        id:1,
        title:"iPhone 16 Pro", 
        color:["#8F8A81", "FFE7B9", "#6F6C64"],
        img: yellowImg
    });

    //camera controls
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    //models
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState({x:0, y:0, z:0});
    const [largeRotation, setLargeRotation] = useState({x:0, y:0, z:0});

    const tl = gsap.timeline();

    useEffect(() => {
      if (size==="large") {
        Animation(tl,small,smallRotation, "#view1", "#view2",{transform : "translateX(-100%)", duration: 2});
      }
      if (size==="small") {
        Animation(tl,large,largeRotation, "#view2", "#view1",{transform : "translateX(0)", duration: 2});
      }
    }, [size]);

    useGSAP(()=>{
        gsap.to('#heading', {
            duration: 0.5,
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: '#heading',
              start: 'top 100%',
              toggleActions: 'play reverse play reverse', 
            },
        })
    },[])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h2 id="heading" className="section-heading">
                Take a closer look
            </h2>

            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[80vh]  overflow-hidden relative"> 

                {/* <ThreeScene /> */}

                <ModelView 
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />  

            <ModelView 
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <IphoneScene />

                    
                </div>
                <div className='mx-auto w-full'>

                  <p className='text-sm font-light text-center mb-5'>{model.title}</p>
                  <div className='flex-center'>
                    <ul className='color-container'>
                      {models.map((item,index)=>(
                        <li key={index} className={`w-8 h-8 rounded-full mx-2 cursor-pointer border-[3px] ${model.id===index+1 ? "border-white" : "border-transparent"}`} style={{backgroundColor:item.color[0]}} onClick={()=>setModel(item)}>

                        </li>
                      ))}
                    </ul>

                    <button className='size-btn-container'>
                      {sizes.map(({label,value})=>(
                        <span key={label} className='size-btn font-semibold' style={{backgroundColor: value===size ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}} onClick={()=>setSize(value)}>
                          {label}
                        </span>
                      ))}
                    </button>
                  </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Model