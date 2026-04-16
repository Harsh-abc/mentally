import { Navbar } from "@/components/core/Navbar";
// import Image from "next/image";
import assets from "../assets/assets";
import Hero from "@/components/core/Hero";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import AboutHero from "@/components/core/AboutHero";
import Link from "next/link";
import Testimonials from "@/components/core/Testimonials";
import FooterDemo from "@/components/core/Footer";
import WhyMentally from "@/components/core/WhyMentally";
// import MarqueeText from "@/components/common/MarqueeText";

export default function Home() {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="fixed inset-0 -z-10  w-full h-full">
        {/* <Image src={assets.herobanner} alt="" className="w-full h-full object-top" /> */}
        {/* <img src={assets.herobanner.src} alt="" className="w-full h-full object-cover object-top" /> */}
        <img src={assets.herobanner1.src} alt="" className="w-full h-full object-cover object-top" />
        {/* <img src={assets.herobanner2.src} alt="" className="w-full h-full object-cover object-top" /> */}
      </div>
      <main className="main relative">
        <Hero />
        {/* <MarqueeText /> */}
        <AboutHero />
        <WhyMentally />
        <Testimonials />
        <FooterDemo />
      </main>

    </div>
  );
}
