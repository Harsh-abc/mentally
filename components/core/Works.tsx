export default function Works() {
    return (
        <section id="howItWork" className="whymentally w-full relative min-h-screen py-10 z-100">
            <div className="svg-container hidden">
                {/* <img src="/assets/curve-lined.svg" alt="" className="text-black transform rotate-90" /> */}
                <svg className="svg svg-left" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 680 6000" preserveAspectRatio="xMidYMid meet"><path d="M 302.5 0 C 105.666 399.076 337.423 546.046 504 585.5 C 670.577 624.954 524.895 422.451 322.5 455 C 120.105 487.549 182.88 842.381 448.853 893.147 C 714.827 943.913 432.195 879.201 400.87 1124.592 C 369.545 1369.983 436.394 1632.667 194.444 1454.439 C -47.507 1276.211 0.572 1162.574 247.425 1365.074 C 494.277 1567.574 794.407 1672.598 463.348 1872.647 C 132.289 2072.695 432.047 2164.647 352.887 2272.781 C 273.728 2380.914 41.259 2358.863 364 2208.5 C 686.741 2058.137 620.877 2188.893 381.377 2667.894 C 141.878 3146.894 252.401 3014.308 448.853 3014.308 C 645.306 3014.308 707.347 3264.748 489.339 3438.039 C 271.331 3611.329 254.271 3814.198 489.339 3833.654 C 724.407 3853.111 632.688 3747.287 503.834 3730.232 C 374.979 3713.176 315.507 3748.217 247.425 3823.613 C 179.343 3899.009 60.801 4195.552 400.87 4044.515 C 740.939 3893.478 701.01 4378.029 422.363 4344.741 C 143.715 4311.453 365.058 4286.613 448.853 4562.631 C 532.648 4838.648 192.143 5058.856 290.41 5157.56 C 388.676 5256.264 565.739 4901.845 381.377 5019.998 C 197.015 5138.152 106.35 5323.513 309.903 5441.72 C 513.456 5559.928 858.911 5528.704 448.853 5369.927 C 38.795 5211.15 -25.798 5612.896 247.425 5699.774 C 520.647 5786.652 518.765 5926.801 363.883 6000" stroke="#B7BEBC" strokeWidth="1" fill="transparent"></path></svg>

                {/* SVG 2 */}
                <svg className="svg svg-right" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 680 6000" preserveAspectRatio="xMidYMid meet"><path d="M 302.5 0 C 105.666 399.076 337.423 546.046 504 585.5 C 670.577 624.954 524.895 422.451 322.5 455 C 120.105 487.549 182.88 842.381 448.853 893.147 C 714.827 943.913 432.195 879.201 400.87 1124.592 C 369.545 1369.983 436.394 1632.667 194.444 1454.439 C -47.507 1276.211 0.572 1162.574 247.425 1365.074 C 494.277 1567.574 794.407 1672.598 463.348 1872.647 C 132.289 2072.695 432.047 2164.647 352.887 2272.781 C 273.728 2380.914 41.259 2358.863 364 2208.5 C 686.741 2058.137 620.877 2188.893 381.377 2667.894 C 141.878 3146.894 252.401 3014.308 448.853 3014.308 C 645.306 3014.308 707.347 3264.748 489.339 3438.039 C 271.331 3611.329 254.271 3814.198 489.339 3833.654 C 724.407 3853.111 632.688 3747.287 503.834 3730.232 C 374.979 3713.176 315.507 3748.217 247.425 3823.613 C 179.343 3899.009 60.801 4195.552 400.87 4044.515 C 740.939 3893.478 701.01 4378.029 422.363 4344.741 C 143.715 4311.453 365.058 4286.613 448.853 4562.631 C 532.648 4838.648 192.143 5058.856 290.41 5157.56 C 388.676 5256.264 565.739 4901.845 381.377 5019.998 C 197.015 5138.152 106.35 5323.513 309.903 5441.72 C 513.456 5559.928 858.911 5528.704 448.853 5369.927 C 38.795 5211.15 -25.798 5612.896 247.425 5699.774 C 520.647 5786.652 518.765 5926.801 363.883 6000" stroke="#57401C" strokeWidth="1" fill="transparent"></path></svg>
            </div>
            <div className="px-20">
                <div className="flex flex-col items-center justify-between gap-10">
                    <div className="w-full">
                        <h1 className="text-6xl font-normal capitalize font-heading text-bronze"><span className="text-6xl text-black">Why</span> ment(ally)?</h1>
                    </div>
                    <div className="w-full text-start pl-100">
                        <p className="text-2xl tracking-wide text-bronze font-heading font-bold">The name is intentional.</p>
                        <p className="text-md text-black/40 tracking-wide w-[70%]">
                            The word "mentally" has often been used carelessly or critically. We believe mental health is not a flaw or a label — it is part of being human. Seeking support is not weakness. It is awareness.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-20 mt-5">
                <div className="flex items-center justify-between gap-20">
                    <div className="relative flex flex-col items-center">
                        <div
                            className="w-[350px] h-[250px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why/01.jpg')",
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
                            <h2 className="text-center uppercase text-xl text-bronze tracking-wide">To destigmatize.</h2>
                            <p className="text-center text-base tracking-wide mt-2 text-black/40"> The word “mentally” has often been used carelessly or critically. We believe mental health is not a flaw or a label — it is part of being human. Seeking support is not weakness. It is awareness.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div
                            className="w-[350px] h-[250px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why/02.jpg')",

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
                            <h1 className="text-center uppercase text-xl text-bronze tracking-wide">To reflect allyship.</h1>
                            <p className="text-center text-base tracking-wide mt-2 text-black/40">  Healing happens in relationship. Therapy is not advice-giving or fixing. It is collaboration — working alongside you with honesty, care, and respect.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div
                            className="w-[350px] h-[250px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/why/03.jpg')",

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
                            <h1 className="text-center uppercase text-xl text-bronze tracking-wide">To help you become your own ally.</h1>
                            <p className="text-center text-base tracking-wide mt-2 text-black/40">  Over time, the goal is not dependence on therapy. It is self-trust. The ability to understand your patterns, regulate your emotions, communicate your needs, and make decisions from clarity rather than fear.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}