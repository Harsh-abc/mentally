'use client'
// import { useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
import CTA from "../common/CTA"

type CardsProps = {
    title: string,
    copy: string,
    img: string,
    index: number
}



const Card = ({ title, copy, index, img }: CardsProps) => {
    return (
        <div className="card relative " id={`card-${index + 1}`}>
            <div className="card-inner relative will-change-transform w-full h-full p-[2em] flex gap-[4em] hover:cursor-pointer">
                <div className="card-content flex flex-col justify-between flex-3 px-5">
                    <h1 className="text-5xl text-white font-normal font-heading">{title}</h1>
                    <p className="text-md text-black/40">{copy}</p>
                </div>
                <div className="card-img flex-1 aspect-video rounded-[0.75em] overflow-hidden object-bottom">
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    )
}




export default function WhatWeWork() {
    const cards = [
        {
            title: 'Life Transitions',
            copy: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatum ullam tempore dolores vitae laboriosam animi assumenda obcaecati, corporis quos atque blanditiis exercitationem sapiente culpa explicabo incidunt itaque voluptatem nostrum aliquam porro accusamus? Alias et corrupti laudantium hic animi quisquam?',
            img: '/assets/WhatWeWorkWith/Life-Transitions.jpg'
        },
        {
            title: 'Couples Therapy',
            copy: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatum ullam tempore dolores vitae laboriosam animi assumenda obcaecati, corporis quos atque blanditiis exercitationem sapiente culpa explicabo incidunt itaque voluptatem nostrum aliquam porro accusamus? Alias et corrupti laudantium hic animi quisquam?',
            img: '/assets/WhatWeWorkWith/Couples-Therapy.jpg'
        },
        {
            title: 'Family Therapy',
            copy: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatum ullam tempore dolores vitae laboriosam animi assumenda obcaecati, corporis quos atque blanditiis exercitationem sapiente culpa explicabo incidunt itaque voluptatem nostrum aliquam porro accusamus? Alias et corrupti laudantium hic animi quisquam?',
            img: '/assets/WhatWeWorkWith/anxiety.jpg'

        },
        {
            title: 'Work Stress & Burnout',
            copy: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatum ullam tempore dolores vitae laboriosam animi assumenda obcaecati, corporis quos atque blanditiis exercitationem sapiente culpa explicabo incidunt itaque voluptatem nostrum aliquam porro accusamus? Alias et corrupti laudantium hic animi quisquam?',
            img: '/assets/WhatWeWorkWith/Work-Stress-Burnout.jpg'
        },
    ]




    return (

        <section className="cards mt-10 relative z-1" >
            <div className="px-20 mb-10 pin flex items-center justify-between">
                <h1 className="text-6xl capitalize font-heading text-bronze"><span className="text-black">what we</span> work with?</h1>
                <div className="flex items-center justify-center mt-8">
                    <CTA text={'Explore more services'} className={'bg-grey-soft py-2 px-1 rounded-[25px]'} className1={'uppercase text-sm text-bronze'} dotClassName={'bg-bronze'} href={'/book-session'} />
                </div>
            </div>

            {
                cards.map((card, index) => (
                    <Card key={index} {...card} index={index} />
                ))
            }
        </section>

    )
}