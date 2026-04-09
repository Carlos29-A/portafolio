"use client"

import { motion } from "framer-motion"

export const HeroSubtitle = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5">
            <span className="inline-block h-3 w-3 shrink-0 bg-zinc-300" aria-hidden />
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-300">
                Desarrollador Web Fullstack
            </p>
        </motion.div>
    )
}
