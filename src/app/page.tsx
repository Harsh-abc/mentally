import { Navbar } from "@/components/core/Navbar";
// import Image from "next/image";
import assets from "../assets/assets";


export default function Home() {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="fixed inset-0 -z-10  w-full h-full">
        {/* <Image src={assets.herobanner} alt="" className="w-full h-full object-top" /> */}
        <img src={assets.herobanner.src} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <main className="relative">
        
      </main>

    </div>
  );
}
