'use client'
import { useEffect, useState } from "react";

type CTAProps = {
    text: String,
    className?: String,
    className1?: String,
    dotClassName?: String,

}

export default function CTA({ text, className, className1, dotClassName }: CTAProps) {
   
    return (
        <div className={`${className} relative group cursor-pointer overflow-hidden `}>
            <div className="flex items-center gap-5 transition-transform duration-300  -translate-x-2.5  group-hover:translate-x-6">
                <span className={` w-1 h-1 rounded-full bg-black ${className1} ${dotClassName}`}></span>
                <span className={` rounded-full whitespace-nowrap ${className1}`}>{text}</span>
                <span className={` w-1 h-1 rounded-full bg-black ${className1} ${dotClassName}`}></span>
            </div>
        </div>
    )
}