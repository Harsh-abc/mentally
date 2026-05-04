'use client'
import Link from "next/link";
import CTA from "../common/CTA";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const path1 = useRef<SVGPathElement | null>(null);
  const path2 = useRef<SVGPathElement | null>(null);



  useEffect(() => {
    const paths = [path1.current, path2.current];

    paths.forEach((path) => {
      if (!path) return;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: path,
          start: "top 70%",
          end: "bottom 0%",
          scrub: 5,
        }
      });
    });
  }, []);

  return (

    <section id="hero" className="relative h-screen z-100 bg-butter">
      <div className=" flex flex-col justify-center h-screen w-full relative z-1000">
        <div className="relative z-10 flex items-center justify-center w-full">
          {/* <h1 className="text-xl font-medium text-center text-bronze border font-crimson  px-10 capitalize py-0.2 rounded-full border-grey-">Strong Start here</h1> */}
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <h1 className="text-8xl w-[70%] text-center font-heading text-bronze font-bold">Your ally In Mental <br /> Health and Beyond.</h1>

        </div>
        <div className="flex items-center justify-center">
          <p className="w-[50%] text-center text-black/60 text-md mt-4">
            We offer therapy and coaching to help you navigate life’s challenges
            with confidence and care. Together, we’ll build personal insight,
            emotional well-being, and the steps needed for lasting change — at
            your own pace.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <CTA text={'Book a session'} className={'bg-bronze py-2 px-1 rounded-[25px]'} className1={'uppercase text-sm text-white'} dotClassName={'bg-white'} href={'/book-session'} />
        </div>


        {/* CIRCLE */}
        <div className="right-t circle"></div>
        <div className="right-b circle"></div>
        <div className="left-t circle"></div>
        <div className="left-b circle"></div>
      </div>

      <div className="absolute top-50 -left-10  z-10000">
        <img src="/assets/WhatWeWorkWith/03.jpg" alt="" className="w-[320px] h-60 object-cover rounded-[15px]"/>
      </div>
      <div className="absolute bottom-5 right-5  z-10000">
        <video playsInline autoPlay loop muted className="w-[350px] rounded-[15px]" >
          <source src="/assets/video/home-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="absolute  -top-2 left-[30%] transform translate-x-[-50%] w-200 z-1">
        <div className="w-full h-screen opacity-90">
          <div>
            <svg
              viewBox="0 0 680 4500"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <path
                d="M 302.5 0 C 105.666 399.076 337.423 546.046 504 585.5 C 670.577 624.954 524.895 422.451 322.5 455 C 120.105 487.549 182.88 842.381 448.853 893.147 C 714.827 943.913 432.195 879.201 400.87 1124.592 C 369.545 1369.983 436.394 1632.667 194.444 1454.439 C -47.507 1276.211 0.572 1162.574 247.425 1365.074 C 494.277 1567.574 794.407 1672.598 463.348 1872.647 C 132.289 2072.695 432.047 2164.647 352.887 2272.781 C 273.728 2380.914 41.259 2358.863 364 2208.5 C 686.741 2058.137 620.877 2188.893 381.377 2667.894 C 141.878 3146.894 252.401 3014.308 448.853 3014.308 C 645.306 3014.308 707.347 3264.748 489.339 3438.039 C 271.331 3611.329 254.271 3814.198 489.339 3833.654 C 724.407 3853.111 632.688 3747.287 503.834 3730.232 C 374.979 3713.176 315.507 3748.217 247.425 3823.613 C 179.343 3899.009 60.801 4195.552 400.87 4044.515 C 740.939 3893.478 701.01 4378.029 422.363 4344.741 C 143.715 4311.453 365.058 4286.613 448.853 4562.631 C 532.648 4838.648 192.143 5058.856 290.41 5157.56 C 388.676 5256.264 565.739 4901.845 381.377 5019.998 C 197.015 5138.152 106.35 5323.513 309.903 5441.72 C 513.456 5559.928 858.911 5528.704 448.853 5369.927 C 38.795 5211.15 -25.798 5612.896 247.425 5699.774 C 520.647 5786.652 518.765 5926.801 363.883 6000"
                stroke="#fff"
                strokeWidth={1}
                fill="transparent"
                strokeDasharray="12840.5"
                strokeDashoffset="6726.28"
                ref={path1}
              />
            </svg>
          </div>
        </div>
        <div className="absolute top-2 left-2 w-full  opacity-[0.4]">
          <div>
            <svg
              viewBox="0 0 680 4500"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <path
                d="M 302.5 0 C 105.666 399.076 337.423 546.046 504 585.5 C 670.577 624.954 524.895 422.451 322.5 455 C 120.105 487.549 182.88 842.381 448.853 893.147 C 714.827 943.913 432.195 879.201 400.87 1124.592 C 369.545 1369.983 436.394 1632.667 194.444 1454.439 C -47.507 1276.211 0.572 1162.574 247.425 1365.074 C 494.277 1567.574 794.407 1672.598 463.348 1872.647 C 132.289 2072.695 432.047 2164.647 352.887 2272.781 C 273.728 2380.914 41.259 2358.863 364 2208.5 C 686.741 2058.137 620.877 2188.893 381.377 2667.894 C 141.878 3146.894 252.401 3014.308 448.853 3014.308 C 645.306 3014.308 707.347 3264.748 489.339 3438.039 C 271.331 3611.329 254.271 3814.198 489.339 3833.654 C 724.407 3853.111 632.688 3747.287 503.834 3730.232 C 374.979 3713.176 315.507 3748.217 247.425 3823.613 C 179.343 3899.009 60.801 4195.552 400.87 4044.515 C 740.939 3893.478 701.01 4378.029 422.363 4344.741 C 143.715 4311.453 365.058 4286.613 448.853 4562.631 C 532.648 4838.648 192.143 5058.856 290.41 5157.56 C 388.676 5256.264 565.739 4901.845 381.377 5019.998 C 197.015 5138.152 106.35 5323.513 309.903 5441.72 C 513.456 5559.928 858.911 5528.704 448.853 5369.927 C 38.795 5211.15 -25.798 5612.896 247.425 5699.774 C 520.647 5786.652 518.765 5926.801 363.883 6000"
                stroke="#57401C"
                strokeWidth={1}
                fill="transparent"
                strokeDasharray="12840.5"
                strokeDashoffset="6726.28"
                ref={path2}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

  );
}
