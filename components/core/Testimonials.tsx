import Marquee from "../common/Marquee";

export default function Testimonials() {
    return (
        <section className="bg-white h-auto">
            <div className="py-10 flex flex-col items-center">
                <h1 className="text-7xl font-semibold  text-center text-(--headingText)">Testi<span className="text-black">monials</span></h1>
                <p className="text-center text-xl mt-5 capitalize w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate itaque fuga asperiores natus aspernatur neque omnis ratione sunt ipsa?</p>
            </div>
            <Marquee />
        </section>
    )
}