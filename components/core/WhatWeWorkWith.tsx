import Link from 'next/link'

export default function WhatWeWorkWith() {
    const areas = [
        {
            title: "Anxiety & Emotional Overwhelm",
            description:
                "Overthinking, racing thoughts, constant stress, difficulty switching off.",
            img: "/assets/WhatWeWorkWith/anxiety.jpg",
        },
        {
            title: "Trauma & Attachment Patterns",
            description:
                "Childhood experiences, relational wounds, and repeating emotional patterns in relationships.",
            img: "/assets/WhatWeWorkWith/trauma.jpg",
        },
        {
            title: "Relationships & Intimacy",
            description:
                "Communication struggles, conflict, trust concerns, and fear of disconnection.",
            img: "/assets/WhatWeWorkWith/relationships.jpg",
        },
        {
            title: "Life Transitions",
            description:
                "Marriage, breakups, relocation, career shifts, parenthood, and identity changes.",
            img: "/assets/WhatWeWorkWith/life-transitions.jpg",
        },
        {
            title: "Couples Therapy",
            description:
                "Strengthening communication, rebuilding trust, and navigating commitment together.",
            img: "/assets/WhatWeWorkWith/couples-therapy.jpg",
        },
        {
            title: "Family Therapy",
            description:
                "Reducing conflict, improving communication, and supporting healthier family dynamics.",
            img: "/assets/WhatWeWorkWith/family-therapy.jpg",
        },
        {
            title: "Relocation & Cultural Adjustment",
            description:
                "Moving abroad, adapting to new environments, and navigating identity and belonging.",
            img: "/assets/WhatWeWorkWith/relocation.jpg",
        },
        {
            title: "Work Stress & Burnout",
            description:
                "High responsibility, invisible pressure, emotional exhaustion, and loss of balance.",
            img: "/assets/WhatWeWorkWith/work-stress.jpg",
        },
        {
            title: "Adolescence Struggles",
            description:
                "Identity exploration, peer pressure, emotional ups and downs, and self-esteem challenges.",
            img: "/assets/WhatWeWorkWith/adolescence.jpg",
        },
        {
            title: "Body Image",
            description:
                "Concerns around appearance, self-perception, and developing a healthier relationship with your body.",
            img: "/assets/WhatWeWorkWith/body-image.jpg",
        },
        {
            title: "Self Worth",
            description:
                "Building confidence, overcoming self-doubt, and developing a stronger sense of self-value.",
            img: "/assets/WhatWeWorkWith/self-worth.jpg",
        }
    ];
    return (
        <section className="bg-[#faf9f7] px-20 py-24">
            <header className="max-w-4xl mb-16">
                <h3 className="text-sm font-normal text-black/40 tracking-wide uppercase">
                    What we work with
                </h3>
                <h2
                    className="text-6xl font-normal text-[#2d2d2d] mt-4 leading-17"
                    style={{ fontFamily: "var(--font-myfont)" }}
                >
                    areas we <span className="italic font-light text-(--headingText)">support</span>.
                </h2>
                <p className="text-left text-lg text-black/60 tracking-wide mt-1 leading-relaxed max-w-2xl">
                    You don't need the right words. Whatever feels difficult — we begin there.
                </p>
            </header>
            <div className="max-w-max w-full">
                <ul className="grid grid-cols-4 gap-8">
                    {areas.map((area, index) => (
                        <li key={index} className="relative w-full h-96 group rounded-2xl overflow-hidden">
                            {/* Image Container */}
                            <div className="w-full h-full rounded-2xl overflow-hidden">
                                <img 
                                    src={area.img} 
                                    alt={area.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
                                />
                            </div>
                            
                            {/* Glassmorphism Overlay */}
                            <div className="absolute top-[80%] group-hover:top-0 left-0 w-full h-full p-4 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md transition-all duration-500 ease-out">
                                <h3 className="text-lg font-semibold text-white/90 mb-1.5 font-heading">{area.title}</h3>
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                    <p className="text-sm text-white/70 tracking-wide leading-5 mb-2">{area.description}</p>
                                    <Link href="/" className="link-flash capitalize text-sm leading-5 tracking-wide text-white no-underline inline-block border-b border-white/50 hover:border-white transition-colors">
                                        more information
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}