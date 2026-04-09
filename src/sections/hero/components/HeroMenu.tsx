"use client"

import { scrollToSection } from "@/src/utils"
import Link from "next/link"

export const HeroMenu = () => {



    return (
        <nav className="flex flex-col items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 mt-10">
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("hero")}>Inicio</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("about")}>Sobre mí</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("projects")}>Proyectos</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("contact")}>Contacto</Link>
        </nav>
    )
}
