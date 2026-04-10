"use client"

import Link from "next/link"
import { Logo } from "../../Logo"
import { scrollToSection } from "@/src/utils";

interface Props {
    active: string;
    isLogo?: boolean;
}


export const Navbar = ({ active, isLogo = true }: Props) => {
    const linkClass = (key: "perfil" | "proyectos" | "contacto") =>
        `rounded-full px-3 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:text-white sm:px-4 sm:py-2 sm:text-sm ${
            active === key ? "bg-[#BBD5EC]/80" : "hover:underline"
        }`

    return (
        <nav className="relative flex w-full flex-col items-center gap-4 sm:gap-5 md:block">
            {isLogo && (
                <div className="flex justify-center md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                    <Logo />
                </div>
            )}
            <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-2 sm:max-w-none sm:gap-3 md:gap-8">
                <Link href="#" onClick={() => scrollToSection("about")} className={linkClass("perfil")}>
                    Perfil
                </Link>
                <Link href="#" onClick={() => scrollToSection("projects")} className={linkClass("proyectos")}>
                    Proyectos
                </Link>
                <Link href="#" onClick={() => scrollToSection("contact")} className={linkClass("contacto")}>
                    Contacto
                </Link>
            </div>
        </nav>
    )
}
