// components/HeroVideo.js
"use client";

import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "@/utils"; // Adjust these imports as needed

const HeroVideo = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  useEffect(() => {
    // This code runs only on the client
    const updateVideo = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
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
      loop
      className="w-full h-full object-cover"
      key={videoSrc}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
