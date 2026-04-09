"use client"

import { scrollToSection } from "@/src/utils"
import Link from "next/link"
import { motion } from "framer-motion"

export const HeroMenu = () => {

    return (
        <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 mt-10">
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("hero")}>Inicio</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("about")}>Sobre mí</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("projects")}>Proyectos</Link>
            <Link href="/" className="transition-colors hover:text-white" onClick={() => scrollToSection("contact")}>Contacto</Link>
        </motion.nav>
    )
}
