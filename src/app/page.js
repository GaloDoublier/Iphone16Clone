import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Titanium from "@/components/Titanium";
import FrameVideo from "@/components/FrameVideo";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Titanium/>
      <FrameVideo/>
    </main>
  );
}
