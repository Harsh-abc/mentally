'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Loader({ onComplete }: { onComplete?: () => void }) {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const textPaths = document.querySelectorAll("textPath");

            const startTextLengths = Array.from(textPaths).map((tp: any) =>
                parseFloat(tp.getAttribute("textLength") || "300")
            );

            const startTextOffsets = Array.from(textPaths).map((tp: any) =>
                parseFloat(tp.getAttribute("startOffset") || "30")
            );

            const targetTextLengths = [4000, 3500, 3250, 3000, 2500, 2000, 1500, 1250];
            const orbitRadii = [775, 700, 625, 550, 475, 400, 325, 250];

            const maxOrbitRadius = orbitRadii[0];
            const maxAnimDuration = 1.25;
            const minAnimDuration = 1;

            textPaths.forEach((textPath: any, index) => {
                const animationDelay = (textPaths.length - 1 - index) * 0.1;

                const currentOrbitRadius = orbitRadii[index];

                const currentDuration =
                    minAnimDuration +
                    (currentOrbitRadius / maxOrbitRadius) *
                    (maxAnimDuration - minAnimDuration);

                const pathLength = 2 * Math.PI * currentOrbitRadius * 3;

                const textLengthIncrease =
                    targetTextLengths[index] - startTextLengths[index];

                const offsetAdjustment =
                    (textLengthIncrease / 2 / pathLength) * 100;

                const targetOffset =
                    startTextOffsets[index] - offsetAdjustment;

                gsap.to(textPath, {
                    attr: {
                        textLength: targetTextLengths[index],
                        startOffset: targetOffset + "%",
                    },
                    duration: currentDuration,
                    delay: animationDelay,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            });

            // 🔄 Rotation Animation
            let loaderRotation = 0;

            function animateRotation() {
                const spinDirection = Math.random() < 0.5 ? 1 : -1;

                loaderRotation += 25 * spinDirection;

                gsap.to("svg", {
                    rotation: loaderRotation,
                    duration: 2,
                    ease: "power2.inOut",
                    onComplete: animateRotation,
                });
            }

            animateRotation();

            // 🔢 Counter
            const counterText = document.querySelector(".counter p");

            const count = { value: 0 };

            gsap.to(count, {
                value: 100,
                duration: 4,
                delay: 1.5,
                ease: "power1.out",
                onUpdate: function () {
                    if (counterText) {
                        counterText.textContent = Math.floor(count.value).toString();
                    }
                },
                onComplete: function () {
                    gsap.to(".counter", {
                        opacity: 0,
                        duration: 0.5,
                        delay: 0,
                    });
                },
            });

            const orbitTextElements = document.querySelectorAll(".orbit-text");

            gsap.set(orbitTextElements, { opacity: 0 });

            const orbitTextsReversed = Array.from(orbitTextElements).reverse();

            gsap.to(orbitTextsReversed, {
                opacity: 1,
                duration: 0.75,
                stagger: 0.125,
                ease: "power1.out",
            });

            gsap.to(orbitTextsReversed, {
                opacity: 0,
                duration: 0.75,
                stagger: 0.1,
                delay: 5,
                ease: "power1.out",
                onComplete: function () {
                    gsap.to(".loader", {
                        opacity: 0,
                        duration: 1,
                        delay: 0,
                        onComplete: () => {
                            onComplete?.();
                        },
                    });
                },
            });

        }, loaderRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="loader">
            <svg viewBox="-425 -425 1850 1850" xmlns="http://www.w3.org/2000/svg">

                <path id="loader-orbit-1"
                    d="M 500,-275 A 775,775 0 0,0 500,1275 A 775,775 0 0,0 500,-275" />

                <path id="loader-orbit-2"
                    d="M 500,-200 A 700,700 0 0,0 500,1200 A 700,700 0 0,0 500,-200" />

                <path id="loader-orbit-3"
                    d="M 500,-125 A 625,625 0 0,0 500,1125 A 625,625 0 0,0 500,-125" />

                <path id="loader-orbit-4"
                    d="M 500,-50 A 550,550 0 0,0 500,1050 A 550,550 0 0,0 500,-50" />

                <path id="loader-orbit-5"
                    d="M 500,25 A 475,475 0 0,0 500,975 A 475,475 0 0,0 500,25" />

                <path id="loader-orbit-6"
                    d="M 500,100 A 400,400 0 0,0 500,900 A 400,400 0 0,0 500,100" />

                <path id="loader-orbit-7"
                    d="M 500,175 A 325,325 0 0,0 500,825 A 325,325 0 0,0 500,175" />

                <path id="loader-orbit-8"
                    d="M 500,250 A 250,250 0 0,0 500,750 A 250,250 0 0,0 500,250" />


                <text className="orbit-text">
                    <textPath href="#loader-orbit-1" startOffset="30%" textLength="500">Ment(ally)</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-2" startOffset="31%" textLength="360">Natasha Irani</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-3" startOffset="33%" textLength="340">reflect allyship</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-4" startOffset="32%" textLength="340">destigmatize</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-5" startOffset="30%" textLength="380">psychotherapy </textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-6" startOffset="31%" textLength="420">Mental Health</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-7" startOffset="33%" textLength="460">Natasha Irani</textPath>
                </text>

                <text className="orbit-text">
                    <textPath href="#loader-orbit-8" startOffset="32%" textLength="500">Ment(ally)</textPath>
                </text>

            </svg>
            <div className="counter">
                <p>0</p>
            </div>
        </div>
    )
}