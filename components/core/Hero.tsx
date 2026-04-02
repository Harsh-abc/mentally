import Link from "next/link";
import CTA from "../common/CTA";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label"


export default function Hero() {
    return (
        <section className="relative">

            <div className="w-full relative top-80 left-20">
                <h1 className="text-9xl text-white w-[55%] font-crimson font-semibold">
                    Your Ally In Mental Health And Beyond.
                </h1>
            </div>
            <div className="w-full h-auto relative top-20 left-260">
                <p className="w-[30%] text-white text-start">
                    We offer therapy and coaching to help you navigate life’s challenges with confidence and care. Together, we’ll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace.
                </p>
                <Button className={'bg-(--cta-button) py-5 rounded-full mt-10 absolute z-99'}>
                    <CTA text={'START YOUR JOURNEY'} className={'bg-cta-button'} className1={'group-hover:text-[#fff]'} dotClassName={'bg-white'} />
                </Button>
            </div>

            <div className="absolute -top-20 left-[50%] transform translate-x-[-50%] w-180">
                <div className="w-full h-screen opacity-90">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 780 1140"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M 568.5 0 C -446.766 669.726 420.757 754.867 688 543.5 C 955.243 332.133 149.225 460.324 381 1140"
                                stroke="white"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="2423.35"
                                strokeDashoffset="138.174"
                            />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-2 left-3 w-full h-[50vh] opacity-[0.4]">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 780 1140"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M 568.5 0 C -446.766 669.726 420.757 754.867 688 543.5 C 955.243 332.133 149.225 460.324 381 1140"
                                stroke="white"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="2423.35"
                                strokeDashoffset="138.174"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative h-[100vh]">
                <div className="absolute top-100 left-[50%] transform translate-x-[-50%] flex items-center justify-center gap-2 ">
                    <Label className="text-2xl text-white">Mentally</Label>
                    <Link href={'#aboutScroll'}>
                        <div className="hk-toggle hk-tg-5">
                            <input type="checkbox" id="tg5" />
                            <label htmlFor="tg5"></label>
                        </div>
                    </Link>
                </div>
                <div className="absolute top-115 flex items-center justify-center">
                    <p className="text-6xl w-[60%] font-semibold text-white font-crimson">Where curiosity replaces judgment, and healing happens in connection.</p>
                </div>
            </div>
        </section>
    )
}


