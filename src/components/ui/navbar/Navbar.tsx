"use client"

import Link from "next/link"
import { Logo } from "../../Logo"
import { scrollToSection } from "@/src/utils";

interface Props {
    active: string;
    isLogo?: boolean;
}


export const Navbar = ({ active, isLogo = true }: Props) => {
    return (
        <div className="flex items-center justify-center gap-8 relative">
            <Link
                href="#"
                onClick={() => scrollToSection("about")}
                className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full  transition-all duration-300 ${active === "perfil" ? "bg-[#BBD5EC]/80" : "hover:underline"}`}>
                Perfil
            </Link>
            <Link
                href="#"
                onClick={() => scrollToSection("projects")}
                className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full  transition-all duration-300 ${active === "proyectos" ? "bg-[#BBD5EC]/80" : "hover:underline"}`}>
                Proyectos
            </Link>
            <Link
                href="#"
                onClick={() => scrollToSection("contact")}
                className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full  transition-all duration-300 ${active === "contacto" ? "bg-[#BBD5EC]/80" : "hover:underline"}`}>
                Contacto
            </Link>
            {isLogo && (
                <div className="absolute left-0 top-0">
                    <Logo />
                </div>
            )}
        </div>
    )
}
