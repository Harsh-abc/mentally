"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!navRef.current) return;

        const ctx = gsap.context(() => {
            const navToggle = document.querySelector(".nav-toggle") as HTMLElement | null;
            const navToggleMenu = document.querySelector(".nav-toggle-menu") as HTMLElement | null;
            const navToggleClose = document.querySelector(".nav-toggle-close") as HTMLElement | null;

            const menu = document.querySelector(".menu") as HTMLElement | null;
            const menuBg = document.getElementById("menu-path") as SVGPathElement | null;
            const menuBgSvg = document.querySelector(".menu-bg-svg") as SVGSVGElement | null;
            const menuLogo = document.querySelector(".menu-logo") as HTMLElement | null;

            const menuLinks = document.querySelectorAll(".menu-col-links a");
            const menuInfoItems = document.querySelectorAll(
                ".menu-col-info p, .menu-col-info h3,.menu-col-info h1, .menu-col-info h6 , .menu-col-info img,.menu-col .menu-col-content .info-mail span, .menu-col .menu-col-content .info-phone span, .menu-col-address span, .info-block.social-links .info-label, .info-block.social-links .social-links-list a"
            );


            if (!menuBg || !menuBgSvg || !navToggle) return;

            const svgWidth = menuBgSvg.viewBox.baseVal.width;
            const svgHeight = menuBgSvg.viewBox.baseVal.height;
            const svgCenterX = svgWidth / 2;

            console.log(svgWidth, svgHeight, svgCenterX);

            const OPEN_HIDDEN = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,0 L${svgWidth},0 Z`;
            const OPEN_BULGE = `M${svgWidth},345 Q${svgCenterX},620 0,345 L0,0 L${svgWidth},0 Z`;
            const OPEN_FULL = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,0 L${svgWidth},0 Z`;

            const CLOSE_START = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
            const CLOSE_BULGE = `M${svgWidth},350 Q${svgCenterX},130 0,350 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
            const CLOSE_HIDDEN = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,${svgHeight} L${svgWidth},${svgHeight} Z`;

            let isAnimating = false;
            let isOpen = false;


            const splits: SplitText[] = [];
            menuLinks.forEach((link) => {
                const split = new SplitText(link as HTMLElement, {
                    type: "chars",
                    charsClass: "char",
                });
                splits.push(split);
                gsap.set(split.chars, { opacity: 0, x: "750%" });
            });

            const menuLinksChars = splits.flatMap((s) => s.chars);

            gsap.set(menuBg, { attr: { d: OPEN_HIDDEN } });
            gsap.set(menuInfoItems, { opacity: 0, y: 100 });


            const openMenu = () => {
                if (!menu) return;

                menu.classList.add("is-open");

                gsap.set(menuLinks, { opacity: 1 });
                gsap.set(menuLogo, { opacity: 1, delay: 1 });
                gsap.to(navToggleMenu, { duration: 0.25, opacity: 0 });
                gsap.to(navToggleClose, { duration: 0.25, opacity: 1, delay: 0.25 });

                const tl = gsap.timeline({
                    onComplete: () => (isAnimating = false),
                });

                tl.to(menuBg, {
                    duration: 0.5,
                    attr: { d: OPEN_BULGE },
                    ease: "power4.in",
                })
                    .to(menuBg, {
                        duration: 0.5,
                        attr: { d: OPEN_FULL },
                        ease: "power4.out",
                    })
                    .to(
                        menuInfoItems,
                        {
                            duration: 0.75,
                            opacity: 1,
                            y: 0,
                            stagger: 0.075,
                        },
                        "-=0.35"
                    )
                    .to(
                        menuLinksChars,
                        {
                            duration: 1.2,
                            x: "0%",
                            stagger: 0.01,
                            ease: "elastic.out(1, 0.25)",
                        },
                        0.45
                    )
                    .to(
                        menuLinksChars,
                        {
                            duration: 0.6,
                            opacity: 1,
                            stagger: 0.01,
                        },
                        0.45
                    );
            };


            const closeMenu = () => {
                if (!menu) return;

                gsap.set(menuBg, { attr: { d: CLOSE_START } });

                gsap.to(navToggleClose, { duration: 0.3, opacity: 0 });
                gsap.to(navToggleMenu, { duration: 0.3, opacity: 1, delay: 0.25 });

                const tl = gsap.timeline({
                    onComplete: () => {
                        menu.classList.remove("is-open");

                        gsap.set(menuBg, { attr: { d: OPEN_HIDDEN } });

                        splits.forEach((s) => {
                            gsap.set(s.chars, { opacity: 0, x: "750%" });
                        });

                        gsap.set(menuInfoItems, { opacity: 0, y: 100 });

                        isAnimating = false;
                    },
                });

                tl.to(menuLogo, { duration: 0.3, opacity: 0 })
                    .to(menuLinks, { duration: 0.3, opacity: 0 }, "<")
                    .to(menuInfoItems, { duration: 0.3, opacity: 0 }, "<")
                    .to(
                        menuBg,
                        {
                            duration: 0.5,
                            attr: { d: CLOSE_BULGE },
                            ease: "power3.in",
                        },
                        "<"
                    )
                    .to(menuBg, {
                        duration: 0.5,
                        attr: { d: CLOSE_HIDDEN },
                        ease: "power3.out",
                    });
            };

            const handleClick = () => {
                if (isAnimating) return;

                isAnimating = true;
                isOpen = !isOpen;

                isOpen ? openMenu() : closeMenu();
            };

            navToggle.addEventListener("click", handleClick);


            return () => {
                navToggle.removeEventListener("click", handleClick);
            };
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={navRef} className="nav">
            <div className="nav-logo">
                <a href="/">
                    <h1 className="text-3xl heading-font">
                        ment(ally)
                    </h1>
                </a>
            </div>

            <div className="nav-toggle">
                <p className="nav-toggle-menu heading-font">Menu</p>
                <p className="nav-toggle-close heading-font">Close</p>
            </div>

            <div className="menu">
                <svg
                    className="menu-bg-svg"
                    viewBox="0 0 1131 861"
                    preserveAspectRatio="none"
                >
                    <path id="menu-path" fill="#57401C" />
                </svg>

                <div className="menu-logo">
                    <h1 className="text-4xl heading-font">ment(ally)</h1>
                </div>

                <div className="menu-col menu-col-info">
                    <img src="https://themindclan.com/images/smaller/professionals/online-offline-natasha-irani-therapist-mumbai-952023.webp" alt="" className="w-full h-[550px] rounded-[10px]" />
                </div>

                <div className="menu-col menu-col-info">
                    <h1 className="text-5xl capitalize mb-3 font-heading">your ally in mental health and beyond</h1>
                    <h6 className="text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem soluta quo fugit, ducimus dolorum nobis. Quia, quae impedit velit labore accusantium animi eos, et blanditiis quidem exercitationem, similique esse.</h6>

                    <div className="menu-col-content">
                        <div className="info-mail">
                            <span>Get in touch</span>
                            <span>email@example.com</span>
                        </div>
                        <div className="info-phone">
                            <span>Book a Free Call</span>
                            <span>+1(555)123-4567</span>
                        </div>
                    </div>

                    <div className="menu-col-address mt-4">
                        <span>402, Serenity Heights,
                            Linking Road, Bandra West,
                            Mumbai – 400050, India</span>
                    </div>

                    <div className="info-block social-links mt-3">
                        <span className="info-label mt-3">Follow me on</span>

                        <div className="social-links-list mt-2">
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaLinkedin /></a>
                            <a href="#" className="social-link"><FaTwitter /></a>
                            <a href="#" className="social-link"><FaFacebook /></a>
                        </div>
                    </div>

                </div>

                <div className="menu-col menu-col-links">
                    <a href="/" className="heading-font">Home</a>
                    <a href="/about-us" className="heading-font">About</a>
                    <a href="/services" className="heading-font">Services</a>
                    <a href="/meet-the-team" className="heading-font">Meet the team</a>
                    <a href="/resources" className="heading-font">Resources</a>
                    <a href="/book-session" className="heading-font">Book a session</a>
                </div>
            </div>
        </div>
    );
}