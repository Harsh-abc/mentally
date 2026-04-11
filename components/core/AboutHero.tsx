import assets from "@/src/assets/assets";
import Image from "next/image";
import CTA from "../common/CTA";
import { Button } from "../ui/button";


export default function AboutHero() {
    return (
        <section id="aboutScroll" className="bg-white h-auto">

            <div className="w-full px-10 py-10">
                <div className="flex justify-between gap-10">
                    <div className="px-10 py-10">
                        <h2 className="text-7xl font-crimson text-(--headingText)">Meet Natasha Irani</h2>
                        <div className="py-3">
                            <p className="text-lg mt-3">A therapeutic space where you can slow down, understand yourself more deeply, and grow in ways that feel true to you.
                            </p>
                            <p className="text-lg mt-3">Ment(ally) is a group psychotherapy practice based in Mumbai, offering both in-person and online therapy across the globe. </p>
                            <p className="text-lg mt-3">A collaborative, multispecialty practice supporting people across age groups, identities, and lived experiences. A space to grow, heal, and understand more deeply.
                            </p>
                            <p className="text-lg mt-3">Our approach is trauma-informed, culturally responsive, and client centered. We believe therapy should feel safe, thoughtful, and non-judgmental — a space where you can slow down and understand yourself more clearly.
                            </p>
                            <p className="text-lg mt-3">We build therapy around the person — not just the concern.
                            </p>
                        </div>
                        <div className="py-10">
                            <Button className={'bg-(--cta-button) py-5 rounded-full'}>
                                <CTA text={'ABOUT NATASHA'} className={'bg-(--btnBG) w-[170px]'} dotClassName={'bg-white'} />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image src={assets.aboutProfile} alt="about profile" className="max-w-xl h-[600px] object-cover object-center rounded-3xl"></Image>
                    </div>
                </div>
            </div>

        </section>
    )
}   