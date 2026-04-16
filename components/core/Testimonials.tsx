import Marquee from "../common/Marquee";

export default function Testimonials() {
    return (
        <section className="bg-white h-auto">
            <div className="py-10">
                <h1 className="font-crimson text-7xl  text-center text-(--headingText)">Testimonials</h1>
                <p className="text-center text-xl mt-2 capitalize">your ally in mental health and beyond</p>
            </div>
            <Marquee />
        </section>
    )
}