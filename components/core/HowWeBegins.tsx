import HWBSvg from "../icons/HWBSvg";

export default function HowWeBegins() {
    return (
        <section className="bg-[#faf9f7] px-20 py-24 relative overflow-hidden">
            <header className="max-w-4xl w-full mb-6">
                <h2 className="text-6xl font-semibold font-heading text-[#2d2d2d] mt-4 leading-tight tracking-wide uppercase">How we <span className="italic font-light text-(--headingText)">begin together</span></h2>
            </header>

            <div className="relative h-[90vh]">
                <div className="absolute left-1/2 -translate-x-1/2 -top-19  z-0"><HWBSvg /></div>
                <div className="p-4 max-w-sm bg-transparent z-10 absolute left-[185px] top-[73px]">
                    <h2 className="text-xl font-semibold font-heading tracking-wide leading-6 text-right pr-[3px]">Reach out</h2>
                    <p className="mt-2 text-sm leading-5 text-black/50 tracking-wide text-right">Send us a message or book a free consultation call. There's no wrong way to start.</p>
                </div>
                <div className="p-4 max-w-sm bg-transparent z-10 absolute left-[599px] top-[254px]">
                    <h2 className="text-xl font-semibold font-heading tracking-wide leading-6">Reach out</h2>
                    <p className="mt-2 text-sm leading-5 text-black/50 tracking-wide">Send us a message or book a free consultation call. There's no wrong way to start.</p>
                </div>
                <div className="p-4 max-w-sm bg-transparent z-10 absolute left-[400px] top-[377px]">
                    <h2 className="text-xl font-semibold font-heading tracking-wide leading-6">Reach out</h2>
                    <p className="mt-2 text-sm leading-5 text-black/50 tracking-wide">Send us a message or book a free consultation call. There's no wrong way to start.</p>
                </div>
                <div className="p-4 max-w-sm bg-transparent z-10 absolute left-[460px] top-[569px]">
                    <h2 className="text-xl font-semibold font-heading tracking-wide leading-6 text-center">Reach out</h2>
                    <p className="mt-2 text-sm leading-5 text-black/50 tracking-wide text-center">Send us a message or book a free consultation call. There's no wrong way to start.</p>
                </div>
            </div>
        </section>
    );
}