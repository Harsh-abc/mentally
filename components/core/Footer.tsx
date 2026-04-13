"use client";
import { Footer } from "@/components/modem-animated-footer";
// import {
//     Twitter,
//     Linkedin,
//     Github,
//     Mail,
//     NotepadTextDashed,
// } from "lucide-react";

export default function FooterDemo() {
    const socialLinks = [
        {
            // icon: <Twitter className="w-6 h-6" />,
            href: "https://twitter.com",
            label: "Twitter",
        },
        {
            // icon: <Linkedin className="w-6 h-6" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
        },
        {
            // icon: <Github className="w-6 h-6" />,
            href: "https://github.com",
            label: "GitHub",
        },
        {
            // icon: <Mail className="w-6 h-6" />,
            href: "mailto:contact@resumegpt.com",
            label: "Email",
        },
    ];

    const navLinks = [
        { label: "About", href: "/" },
        { label: "Services", href: "/" },
        { label: "Meet The Team", href: "/" },
        { label: "Resouces", href: "/" },
        { label: "Book a Session", href: "/" },
    ];

    return (
        <Footer
            brandName="Mentally"
            brandDescription="A therapeutic space where you can slow down, understand yourself more deeply, and grow in ways that feel true to you. "
            // socialLinks={socialLinks}
            navLinks={navLinks}
            creatorName="Deepak Modi"
            creatorUrl="https://deepakmodi.tech"
        // brandIcon={<NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />}
        />
    );
}
