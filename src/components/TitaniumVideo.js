"use client";

import { useState, useEffect } from "react";
import { largeTitanium,  smallTitanium } from "@/utils"; // Adjust these imports as needed

const TitaniumVideo = () => {
  const [videoSrc, setVideoSrc] = useState(largeTitanium);

  useEffect(() => {
    const updateVideo = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallTitanium);
      } else {
        setVideoSrc(largeTitanium);
      }
    };

    updateVideo(); // Run it once on mount

    window.addEventListener("resize", updateVideo);
    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  return (
    <video
      autoPlay
      muted
      playsInline
      className="w-full h-full "
      key={videoSrc}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default TitaniumVideo;