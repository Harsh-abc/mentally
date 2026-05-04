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
        { label: "About Us", url: "/" },
        { label: "Services", url: "#" },
        { label: "Meet the team", url: "#" },
        { label: "Resources", url: "/" },
        { label: "Book a session", url: "/" }
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
        <footer className="bg-bronze px-0 py-10 relative rounded-t-[25px] z-10">
            <div className="px-10 py-10">
                <div className="grid grid-cols-5 gap-10 ">
                    <div className="col-span-2">
                        <h2 className="font-heading text-3xl tracking-[2px] mb-2 text-grey-soft font-bold">ment(ally)</h2>
                        {/* <p>your <span>ally</span> in mental health and beyond</p> */}
                        <p className="text-md text-grey-soft tracking-wide mb-5">Healing happens in connection. You don't need to have it figured out - you just need a starting point.</p>

                        <ul className="space-y-2">
                            {contactDetails.map(({ label: Label, value }, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Label className="w-5 h-5 text-sm text-fawn tracking-wide" />
                                    <span className="text-sm text-grey-soft tracking-wide">{value}</span>
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
                                        className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full hover:opacity-70 transition-opacity"
                                    >
                                        <Icon className="w-4 h-4 text-grey-soft" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-grey-soft text-xl  mb-4 font-heading">Quick LInks</h3>
                        <ul className="flex flex-col gap-2">
                            {navigateTo.map(({ label, url }, index) => (
                                <li key={index}>
                                    <a href={url} className="text-sm text-black/50 tracking-wide hover:underline text-grey-soft">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-grey-soft text-xl  mb-4 font-heading">We Support</h3>
                        <ul className="flex flex-col gap-2">
                            {weSupport.map(({ label }, index) => (
                                <li key={index}>
                                    <span className="text-sm text-black/50 tracking-wide text-grey-soft">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-grey-soft text-xl  mb-4 font-heading">How We Work</h3>
                        <ul className="flex flex-col gap-2 ">
                            {howWeWork.map(({ label }, index) => (
                                <li key={index}>
                                    <span className="text-sm text-black/50 tracking-wide text-grey-soft">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* <div className="pb-5 border-b border-black/10">
                    <p className="text-sm text-center text-black/50 mt-5">Healing happens in connection. You don't need to have it figured out - you just need a starting point.</p>
                </div> */}

                {/* <ul className="flex justify-around gap-6 mt-10">
                    <li><p className="text-sm text-black/50 tracking-wide">© 2025 Ment(ally). All rights reserved.</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide">Privacy Policy</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide">Terms of Service</p></li>
                    <li><p className="text-sm text-black/50 tracking-wide flex items-center"><LucideShield /> Confidential & safe space</p></li>
                </ul> */}
            </div>

        </footer>
    );
}