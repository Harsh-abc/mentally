
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CTA from "../common/CTA";

export default function ReachOut() {

    return (
        <section className="px-20 py-20 relative h-auto z-100">
            <div>
                <h1 className="text-6xl font-normal capitalize font-heading text-bronze"><span className="text-6xl text-black">How </span>  We Begin?</h1>
            </div>

            <div className="flex justify-between gap-40 items-start">
                <div className="flex-3 mt-5">
                    <div className="sticky top-20">
                        <div className="flex flex-col  gap-25">
                            <div>
                                <p className="text-2xl font-heading text-bronze">Starting therapy can feel uncertain.</p>
                                <p className="text-md text-black/40 mt-2">When you reach out, we take time to understand what you’re looking for and thoughtfully match you with a therapist from our team.</p>
                                <p className="text-md text-black/40 mt-2">Fit matters. Pace matters. Context matters.</p>
                            </div>
                            <div className="">
                                <p className="text-md text-black/40 mt-2">We offer online and in-person sessions.
                                </p>
                                <p className="text-md text-black/40 mt-2"> Consultation calls are available if you’d like to explore whether this feels right.
                                </p>
                                <p className="text-md text-black/40 mt-2"> You don’t need to have everything figured out before you begin.</p>
                                <p className="text-md text-black/40 mt-2">You just need a starting point.</p>

                                <div className="flex gap-5 mt-10" >
                                    <a href="#" className="social-link text-2xl text-bronze"><FaInstagram /></a>
                                    <a href="#" className="social-link text-2xl text-bronze"><FaLinkedin /></a>
                                    <a href="#" className="social-link text-2xl text-bronze"><FaTwitter /></a>
                                    <a href="#" className="social-link text-2xl text-bronze"><FaFacebook /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-2">
                    <div className="w-full max-w-md">
                        <h6 className="text-2xl mb-6 text-bronze font-heading">Tell us about you.</h6>

                        <form className="flex flex-col gap-6">
                            <div className={`transition-all duration-500`}>
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="border-b w-full py-2 outline-none"

                                />
                            </div>

                            <div className={`transition-all duration-500`}>
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="border-b w-full py-2 outline-none"

                                />
                            </div>
                            <div className={`transition-all duration-500`}>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="border-b w-full py-2 outline-none"

                                />
                            </div>

                            <div className={`transition-all duration-500`}>
                                <select
                                    className="border-b w-full py-2 outline-none text-black/60"

                                >
                                    <option value="">Preferred Pronouns *</option>
                                    <option>He / Him</option>
                                    <option>She / Her</option>
                                    <option>They / Them</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>

                            <div className={`transition-all duration-500`}>
                                <label className="text-sm text-black/50">How can we help?</label>
                                <textarea
                                    placeholder="Feel free to share anything that helps us understand your needs"
                                    className="border-b w-full py-2 outline-none resize-none"
                                    rows={3}

                                />
                            </div>

                            <div className={`transition-all duration-500`}>
                                <label className="text-sm text-black/50 mb-2 block">
                                    What kind of support are you looking for?
                                </label>

                                <div className="flex flex-col gap-2 text-sm text-black/70">
                                    {[
                                        "Individual Therapy",
                                        "Life Coaching",
                                        "Stress & Mindfulness Support",
                                        "Clarity Session / One-Time Consult",
                                        "Not sure yet — just exploring"
                                    ].map((item, i) => (
                                        <label key={i} className="flex items-center gap-2">
                                            <input type="checkbox" className="accent-black" />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={`transition-all duration-500 `}>
                                <select className="border-b w-full py-2 outline-none text-black/60">
                                    <option value="">Where did you hear about us?</option>
                                    <option>Instagram</option>
                                    <option>Google</option>
                                    <option>Friend / Referral</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className={`transition-all duration-500`}>
                                <label className="flex items-start gap-2 text-sm text-black/60">
                                    <input type="checkbox" className="mt-1 accent-black" />
                                    <span>
                                        Would you like to receive updates via email?
                                        <br />
                                        <span className="text-xs text-black/40">
                                            We send occasional emails. You can unsubscribe anytime.
                                        </span>
                                    </span>
                                </label>
                            </div>

                            <div className="flex mt-3">
                                <CTA text={'Book a session'} className={'bg-grey-soft py-2 px-1 rounded-[25px]'} className1={'uppercase text-sm text-bronze'} dotClassName={'bg-bronze'} />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}