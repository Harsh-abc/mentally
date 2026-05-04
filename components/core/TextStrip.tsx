'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextStrip({ text }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const el = containerRef.current;
            if (!el) return;

            requestAnimationFrame(() => {
                const width = el.scrollWidth / 2;

                tweenRef.current = gsap.to(el, {
                    x: -width,
                    duration: 20,
                    ease: "linear",
                    repeat: -1,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        tweenRef.current?.pause();
    };

    const handleMouseLeave = () => {
        tweenRef.current?.resume();
    };

    return (
        <section
            className="textStrip h-16 bg-fawn overflow-hidden flex items-center relative z-100 hover:cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                className="flex whitespace-nowrap"
            >
                {/* <span className="text-6xl uppercase font-bold text-grey-soft mr-20">
                    Where curiosity replaces judgment, and healing happens in connection.
                </span> */}

                <span className="text-3xl uppercase font-bold text-black/80 mr-1">
                    {text}
                </span>
                <span className="text-3xl uppercase font-bold text-black/80 mr-1">
                    {text}
                </span>
                <span className="text-3xl uppercase font-bold text-black/80 mr-1">
                    {text}
                </span>
            </div>
        </section>
    );
}