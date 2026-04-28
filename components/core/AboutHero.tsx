"use client";
import { BookSession } from "../common/BookSession";
import CTA from "../common/CTA";

export default function AboutHero() {
    return (
        <section className="bg-[#faf9f7] px-20 py-24">
            <div className="grid grid-cols-3 gap-8">
                <div>
                    <header className="max-w-4xl w-full mb-6">
                        <h3 className="text-sm font-normal text-black/40 tracking-wide uppercase">
                            Meet Natasha Irani
                        </h3>
                        <h2
                            className="text-6xl font-normal text-[#2d2d2d] mt-4 leading-tight"
                            style={{ fontFamily: "var(--font-myfont)" }}
                        >
                            <span className="font-crimson">A</span> therapist who believes <span className="italic font-light text-(--headingText)">in the power of connection.</span>
                        </h2>
                    </header>
                    <div className="max-w-3xl w-full">
                        <p className="text-sm text-black/50 tracking-wide leading-5">Natasha Irani is a psychotherapist and the founder of Ment(ally), a group practice built on the belief that healing happens in relationship — not in isolation. With over [X] years of experience, she works with individuals, couples, and families navigating a wide range of emotional and relational challenges.</p>
                    </div>
                </div>
                <div>
                    <figure className="w-full h-125 relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50 after:rounded-4xl">
                        <img src="https://themindclan.com/images/smaller/professionals/online-offline-natasha-irani-therapist-mumbai-952023.webp" alt="Natasha Irani" className="rounded-4xl w-full h-full object-cover" />
                    </figure>
                </div>
                <div>
                        <p className="text-sm text-black/50 tracking-wide leading-5 mb-5">Her work is grounded in a trauma-informed, attachment-based approach, drawing from psychodynamic and integrative frameworks. She brings warmth, curiosity, and deep respect for each person's unique story to every session.</p>
                    <h3 className="text-lg font-semibold text-black/70 mb-1.5 font-heading"><span className="font-crimson">A</span>reas of focus</h3>
                    <ul className="grid grid-cols-2 list-disc list-outside text-sm leading-5 tracking-wide text-black/50 ml-4">
                        <li>Trauma & attachment patterns</li>
                        <li>Relationships & intimacy</li>
                        <li>Life transitions & identity</li>
                        <li>Anxiety & emotional overwhelm</li>
                        <li>Couples therapy</li>
                        <li>Relocation & cultural adjustment</li>
                    </ul>
                    
                    {/* <CTA text={"Send Message"} className={"bg-(--cta-button) max-w-min py-3 px-6 rounded-full mt-4"} dotClassName={"bg-white"} /> */}

                    <div className="mt-28 relative z-10">
                        <div className="text-3xl font-bold font-heading text-(--headingText) tracking-[20px]">"</div>
                        <p className="text-sm text-black/50 tracking-wide leading-5 italic font-heading">Therapy is not about fixing you — it's about helping you understand yourself so deeply that you become your own source of clarity, compassion, and strength.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
