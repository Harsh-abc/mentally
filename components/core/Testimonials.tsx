import Marquee from "../common/Marquee";

export default function Testimonials() {
    return (
        <section className="h-auto px-20 py-20 relative z-100">
            <div className="flex items-center justify-between">
                <h1 className="text-7xl font-heading text-start text-bronze">Testimonials</h1>
                <p className="text-start text-md mt-5 capitalize w-2xl text-black/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate itaque fuga asperiores natus aspernatur neque omnis ratione sunt ipsa?</p>
            </div>
            <Marquee />
        </section>
    )
}