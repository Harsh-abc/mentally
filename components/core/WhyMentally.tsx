export default function WhyMentally() {
    return (
        <section className="bg-background">
            <div className="py-10">
                <h1 className="font-crimson text-7xl  text-center text-(--headingText)">Why Ment(ally)</h1>
                <p className="text-center text-xl mt-2 capitalize">your ally in mental health and beyond</p>
            </div>
            <div className="flex items-center justify-between py-10">
                <div className="flex items-center justify-between gap-20 px-20">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute -top-10 left-15 rotate-180 opacity-15">
                            <img src="/assets/mask-path.png" alt="" className="w-[450px] h-[350px]" />
                        </div>
                        <div
                            className="w-[400px] h-[300px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why-mentally-1.avif')",
                                WebkitMaskImage: "url('/assets/mask.svg')",
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskImage: "url('/assets/mask.svg')",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                        />
                        <div className="mt-10">
                            <h1 className="text-center text-xl">To destigmatize.</h1>
                            <p className="text-center text-md mt-2"> The word “mentally” has often been used carelessly or critically. We believe mental health is not a flaw or a label — it is part of being human. Seeking support is not weakness. It is awareness.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="absolute -top-10 left-15 rotate-180 opacity-15">
                            <img src="/assets/mask-path.png" alt="" className="w-[450px] h-[350px]" />
                        </div>
                        <div
                            className="w-[400px] h-[300px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why-mentally-1.avif')",

                                WebkitMaskImage: "url('/assets/mask2.svg')",
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",

                                maskImage: "url('/assets/mask2.svg')",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                        />
                        <div className="mt-10">
                            <h1 className="text-center text-xl">To reflect allyship.</h1>
                            <p className="text-center text-md mt-2">  Healing happens in relationship. Therapy is not advice-giving or fixing. It is collaboration — working alongside you with honesty, care, and respect.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="absolute -top-10 left-15 rotate-180 opacity-15">
                            <img src="/assets/mask-path.png" alt="" className="w-[450px] h-[350px]" />
                        </div>
                        <div
                            className="w-[400px] h-[300px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why-mentally-1.avif')",

                                WebkitMaskImage: "url('/assets/mask3.svg')",
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",

                                maskImage: "url('/assets/mask3.svg')",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                        />
                        <div className="mt-10">
                            <h1 className="text-center text-xl">To help you become your own ally.</h1>
                            <p className="text-center text-md mt-2">  Over time, the goal is not dependence on therapy. It is self-trust. The ability to understand your patterns, regulate your emotions, communicate your needs, and make decisions from clarity rather than fear.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}