import React, { Suspense } from 'react'
import {Html, OrbitControls, PerspectiveCamera, View} from '@react-three/drei'
import IphoneModel from './IphoneModel'
import Loader from './Loader'
import Lights from './Lights'
import * as THREE from 'three'

const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,size,item}) => {
  return (
   <View
    index={index}
    group={groupRef.current}
    id={gsapType}
    className={` w-full h-full absolute ${index ===2 ? 'right-[-100%]' : ''}`}
   >
    {/* Ambient light */}
    <ambientLight intensity={0.4} />

    <PerspectiveCamera makeDefault position={[0,0,4]}/>

    <Lights />

    <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

    <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0,0,0]} >
      <Suspense fallback={<Loader/>}>
        <IphoneModel
          scale={index === 1 ? [15,15,15] : [17,17,17]}
          item={item}
          size={size}
        />
      </Suspense>
    </group>
   </View>
  )
}

export default ModelView