'use client'
import Hero from "@/components/core/Hero";
import AboutHero from "@/components/core/AboutHero";
import Testimonials from "@/components/core/Testimonials";
import WhyMentally from "@/components/core/WhyMentally";

import Footer from "@/components/core/Footer";
import ByTheNumbers from "@/components/core/ByTheNumbers";
import HowWeBegins from "@/components/core/HowWeBegins";
import WhatWeWorkWith from "@/components/core/WhatWeWorkWith_o";
import TextStrip from "@/components/core/TextStrip";
import Works from "@/components/core/Works";
import WhatWeWork from "@/components/core/WhatWeWork";
import ReachOut from "@/components/core/ReachOut";



export default function Home() {

  return (
    <div className="">
      <main className="main relative">
        <Hero />
        <TextStrip text={'Where curiosity replaces judgment, and healing happens in connection.'} />
        <AboutHero />
        <Works />
        {/* <WhyMentally /> */}
        {/* <ByTheNumbers /> */}
        <WhatWeWork />
        {/* <WhatWeWorkWith /> */}
        <TextStrip text={'If something feels difficult but doesn’t neatly fit into a label — we begin there.'} />
        {/* <HowWeBegins /> */}
        <ReachOut />
        <Testimonials />
        {/* <ReachOut /> */}

      </main>

    </div>
  );
}
