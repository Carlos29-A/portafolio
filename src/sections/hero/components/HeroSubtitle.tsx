"use client"

import { motion } from "framer-motion"

export const HeroSubtitle = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex max-w-[min(100%,22rem)] flex-col items-center gap-2 px-2 md:max-w-none md:flex-row md:items-center md:gap-2.5 md:px-0"
        >
            <span className="inline-block h-2.5 w-2.5 shrink-0 bg-zinc-300 md:h-3 md:w-3" aria-hidden />
            <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 md:text-left md:text-sm md:tracking-[0.22em]">
                Desarrollador Web Fullstack
            </p>
        </motion.div>
    )
}
