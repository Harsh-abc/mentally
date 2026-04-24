import { LucideLinkedin } from "../icons/LucideLinkedin";
import { LucideInstagram } from "../icons/LucideInstagram";
import { LineMdTwitterXAlt } from "../icons/LineMdTwitterXAlt";
import { LucideMapPin } from "../icons/LucideMapPin";
import { LucidePhone } from "../icons/LucidePhone";
import { LucideMail } from "./LucideMail";
import { LucideShield } from "../icons/LucideShield";

export default function Footer() {
    const socialLinks = [
        { Icon: LucideInstagram, url: "https://www.instagram.com/mentally_/" },
        { Icon: LucideLinkedin, url: "https://www.linkedin.com/company/mentally-/" },
        { Icon: LineMdTwitterXAlt, url: "https://twitter.com/mentally_" },
    ];

    const contactDetails = [
        { label: LucideMapPin, value: "123 Main Street, City, State 12345" },
        { label: LucidePhone, value: "+1 (123) 456-7890" },
        { label: LucideMail, value: "info@mentally.com" }
    ];

    const navigateTo = [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Blog", url: "/blog" },
        { label: "Contact", url: "/contact" }
    ]

    const weSupport = [
        { label: "Depression" },
        { label: "Anxiety" },
        { label: "Stress" },
        { label: "Relationship Issues" },
        { label: "Self-esteem" },
        { label: "Grief and Loss" },
        { label: "Trauma and PTSD" },
        { label: "Substance Abuse" },
    ]

    const howWeWork = [
        { label: "Online Therapy" },
        { label: "In-Person Therapy" },
        { label: "Group Therapy" },
        { label: "Workshops and Webinars" },
        { label: "Self-Help Resources" },
    ]

    return (
        <footer className="bg-white px-14 py-10">
            <div className="shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] rounded-4xl px-14 py-10">
                <div className="grid grid-cols-5 gap-10 pb-10 border-b border-black/50">
                    <div className="col-span-2">
                        <h2 className="font-crimson text-3xl tracking-[2px] mb-2">ment(ally)</h2>
                        {/* <p>your <span>ally</span> in mental health and beyond</p> */}
                        <p className="text-sm text-black/50 tracking-wide mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quia corrupti ex magni quasi molestiae iste tenetur ea eaque velit!</p>

                        <ul className="space-y-2">
                            {contactDetails.map(({ label: Label, value }, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Label className="w-5 h-5 text-sm text-black/50 tracking-wide" />
                                    <span className="text-sm text-black/50 tracking-wide">{value}</span>
                                </li>
                            ))}
                        </ul>

                        <ul className="flex gap-4 mt-4">
                            {socialLinks.map(({ Icon, url }, index) => (
                                <li key={index} className="">
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center border border-black/50 rounded-full hover:opacity-70 transition-opacity"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold text-lg mb-4">Navigate</h3>
                        <ul className="flex flex-col gap-2">
                            {navigateTo.map(({ label, url }, index) => (
                                <li key={index}>
                                    <a href={url} className="text-sm text-black/50 tracking-wide hover:underline">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold text-lg mb-4">We Support</h3>
                        <ul className="flex flex-col gap-2">
                            {weSupport.map(({ label }, index) => (
                                <li key={index}>
                                    <span className="text-sm text-black/50 tracking-wide">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold text-lg mb-4">How We Work</h3>
                        <ul className="flex flex-col gap-2">
                            {howWeWork.map(({ label }, index) => (
                                <li key={index}>
                                    <span className="text-sm text-black/50 tracking-wide">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pb-10 border-b border-black/50">
                    <p className="text-sm text-center text-black/50 mt-10">Healing happens in connection. You don't need to have it figured out - you just need a starting point.</p>
                </div>

                <ul className="flex justify-center gap-6 mt-6">
                    <li><p className="text-sm text-black/50 tracking-wide">© 2025 Ment(ally). All rights reserved.</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide">Privacy Policy</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide">Terms of Service</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide flex items-center"><LucideShield /> Confidential & safe space</p></li>
                </ul>
            </div>
        </footer>
    );
}