import { Navbar } from "@/components/core/Navbar";
// import Image from "next/image";
import assets from "../assets/assets";
import Hero from "@/components/core/Hero";


export default function Home() {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="fixed inset-0 -z-10  w-full h-full">
        {/* <Image src={assets.herobanner} alt="" className="w-full h-full object-top" /> */}
        <img src={assets.herobanner.src} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <main className="main relative">
        <Hero />


        <section className="relative top-100">
          <h2 className="text-4xl p-20">Next Section</h2>
        </section>

      </main>
    </div>
  );
}
