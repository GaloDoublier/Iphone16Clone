import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Titanium from "@/components/Titanium";
import FrameVideo from "@/components/FrameVideo";
import ChipSection from "@/components/ChipSection";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Titanium/>
      <FrameVideo/>
      <ChipSection/>
      <BuySection/>
      <Footer/>
    </main>
  );
}
