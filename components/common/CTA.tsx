
type CTAProps = {
    text: String,
    className?: String
}

export default function CTA({ text, className }: CTAProps) {
    return (
        <div className={`${className} relative group cursor-pointer overflow-hidden`}>
            <div className="flex items-center gap-5 transition-transform duration-300  -translate-x-2.5  group-hover:translate-x-6">
                <span className="text-black w-1 h-1 rounded-full bg-black group-hover:bg-[#7FA698]"></span>
                <span className="text-black rounded-full whitespace-nowrap group-hover:text-[#7FA698]">{text}</span>
                <span className="text-black w-1 h-1 rounded-full bg-black group-hover:bg-[#7FA698]"></span>
            </div>
        </div>
    )
}