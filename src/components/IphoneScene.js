"use client"
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import React, { useEffect, useState } from 'react'

const IphoneScene = () => {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    setEventSource(document.getElementById("root"));
  }, []);

  return (
<Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                pointerEvents: 'none',
              }}
              eventSource={eventSource}
            >
              <View.Port />
            </Canvas>
  )
}

export default IphoneScene;
