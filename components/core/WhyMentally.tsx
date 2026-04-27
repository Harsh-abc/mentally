"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { LucideCheck } from "../icons/LucideCheck";

interface Tab {
  id: string;
  title: string;
  image: string;
  caption: string;
}

const tabs: Tab[] = [
  {
    id: "destigmatise",
    title: "To destigmatise",
    image:
      "https://framerusercontent.com/images/vqvJRfBd4X3fttfH8Phu2rRVw.jpg?width=1280&height=1920",
    caption: "Mental health is not a flaw. Seeking support is awareness, not weakness.",
  },
  {
    id: "allyship",
    title: "To reflect allyship",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=1920&fit=crop",
    caption: "Therapy is not advice-giving or fixing. It is collaboration — working alongside you with honesty, care, and respect.",
  },
  {
    id: "own-ally",
    title: "To help you become your own ally",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1280&h=1920&fit=crop",
    caption: "Over time, the goal is self-trust — understanding your patterns, regulating emotions, communicating needs.",
  },
];

export default function WhyMentally() {
  const [activeTab, setActiveTab] = useState(0);
  const [nextTab, setNextTab] = useState(0);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentImageRef = useRef<HTMLDivElement>(null);
  const nextImageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const timerRef = useRef<gsap.core.Tween | null>(null);

  // Function to animate content change with crossfade
  const animateContentChange = (index: number) => {
    if (index === activeTab) return;

    const tl = gsap.timeline();

    // Set up next image
    setNextTab(index);

    // Crossfade images (overlap)
    tl.set(nextImageRef.current, { zIndex: 2, opacity: 0 });
    tl.to(
      nextImageRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );
    tl.to(
      currentImageRef.current,
      {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    // Fade out caption only (removed heading and description refs)
    tl.to(
      captionRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.in",
      },
      0
    );

    // Update active tab
    tl.call(() => {
      setActiveTab(index);
      setNextTab(index);
    });

    // Fade in new caption
    tl.fromTo(
      captionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Reset z-index after animation
    tl.set(currentImageRef.current, { zIndex: 2 });
    tl.set(nextImageRef.current, { zIndex: 1 });
  };

  // Function to start progress animation
  const startProgress = (index: number) => {
    // Clear existing timer
    if (timerRef.current) {
      timerRef.current.kill();
    }

    // Reset all progress bars
    progressRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.set(ref, { scaleX: i === index ? 0 : 0 });
      }
    });

    // Animate current progress bar
    if (progressRefs.current[index]) {
      timerRef.current = gsap.to(progressRefs.current[index], {
        scaleX: 1,
        duration: 8,
        ease: "none",
        onComplete: () => {
          const nextIndex = (index + 1) % tabs.length;
          animateContentChange(nextIndex);
          startProgress(nextIndex);
        },
      });
    }
  };

  // Handle tab click
  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      animateContentChange(index);
    }
    startProgress(index);
  };

  // Initial animation on mount
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      currentImageRef.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      captionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    startProgress(0);

    return () => {
      if (timerRef.current) {
        timerRef.current.kill();
      }
    };
  }, []);

  return (
    <section className="bg-[#faf9f7] px-20 py-24 min-h-screen">
      <div className="flex items-start justify-around">
        <div className="max-w-xl w-full mx-auto">
          {/* Header */}
          <header className="max-w-4xl mb-16">
            <h3 className="text-sm font-normal text-black/40 tracking-wide uppercase">
              Why Ment(ally)?
            </h3>
            <h2
              className="text-6xl font-normal text-[#2d2d2d] mt-4 leading-tight"
              style={{ fontFamily: "var(--font-myfont)" }}
            >
              The name is <span className="italic font-light">intentional</span>.
            </h2>
            <p className="text-left text-lg text-black/60 tracking-wide mt-6 leading-relaxed max-w-2xl">
              The word "mentally" has often been used carelessly or critically. We believe
              mental health is not a flaw or a label — it is part of being human. Seeking
              support is not weakness. It is awareness.
            </p>
          </header>

          {/* Two Column Layout */}
          <div className="">
            {/* Left Column - Tabs */}
            <div className="space-y-1">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="relative">
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`group flex gap-6 items-center justify-start px-6 py-5 w-full border-b transition-all duration-500 ${activeTab === index
                      ? "border-[#7FA698]"
                      : "border-black/10 hover:border-black/20"
                      }`}
                  >
                    <LucideCheck
                      className={`transition-all duration-500 ${activeTab === index
                        ? "text-[#7FA698] scale-110"
                        : "text-black/30 group-hover:text-black/50"
                        }`}
                    />
                    <span
                      className={`text-xl transition-all duration-500 ${activeTab === index
                        ? "text-[#2d2d2d] font-medium"
                        : "text-black/40 group-hover:text-black/60"
                        }`}
                    >
                      {tab.title}
                    </span>
                  </button>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/5 overflow-hidden">
                    <div
                      ref={(el) => {
                        progressRefs.current[index] = el;
                      }}
                      className="h-full bg-[#7FA698] origin-left"
                      style={{ transform: "scaleX(0)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* Right Column - Content */}
        <div className="space-y-8 max-w-xl w-full">
          {/* Image Figure with Crossfade */}
          <figure className="relative overflow-hidden rounded-2xl">
            <div className="relative w-full h-[600px] overflow-hidden bg-black/5">
              {/* Current Image */}
              <div
                ref={currentImageRef}
                className="absolute inset-0 w-full h-full z-[2]"
              >
                <img
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Next Image (for crossfade) */}
              <div
                ref={nextImageRef}
                className="absolute inset-0 w-full h-full z-[1]"
                style={{ opacity: 0 }}
              >
                <img
                  src={tabs[nextTab].image}
                  alt={tabs[nextTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <figcaption
              ref={captionRef}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] text-black/70 px-6 py-4 text-sm tracking-wide bg-white rounded-xl shadow-lg z-10"
              style={{ opacity: 1 }}
            >
              {tabs[activeTab].caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}