"use client"

import { scrollToSection } from "@/src/utils"
import { motion, type Variants } from "framer-motion"
import { FiChevronDown, FiDownload } from "react-icons/fi"

const menuContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.12 },
    },
}

const menuItem: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
}

export const HeroMenu = () => {
    return (
        <motion.div
            className="flex flex-col items-center"
            variants={menuContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={menuItem} className="relative mt-6 inline-flex items-center justify-center max-md:mt-5 sm:mt-10">
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BBD5EC]/25 blur-2xl"
                    animate={{ opacity: [0.28, 0.52, 0.28] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.button
                    type="button"
                    aria-label="Descargar currículum vitae"
                    className="group relative cursor-pointer overflow-hidden rounded-full border border-[#BBD5EC]/45 bg-zinc-950/65 px-7 py-3 text-sm font-semibold tracking-[0.12em] text-[#d4e6f3] shadow-[0_0_0_1px_rgba(0,34,56,0.5)] backdrop-blur-sm transition-colors duration-300 hover:border-[#BBD5EC] hover:bg-[#BBD5EC]/90 hover:text-zinc-950 hover:shadow-[0_0_32px_-6px_rgba(187,213,236,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBD5EC]/70 sm:px-8 sm:py-3.5 sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#9b0f1f]/70 to-transparent opacity-80"
                    />
                    <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(100% 100% at 50% 0%, rgba(187,213,236,0.18), transparent 52%)",
                        }}
                    />
                    <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] skew-x-[-18deg] bg-linear-to-r from-transparent via-[#BBD5EC]/12 to-transparent group-hover:via-white/18"
                        initial={{ x: "-100%" }}
                        animate={{ x: ["-100%", "220%"] }}
                        transition={{
                            duration: 1.25,
                            ease: [0.22, 1, 0.36, 1],
                            repeat: Infinity,
                            repeatDelay: 4.5,
                        }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2.5">
                        <motion.span
                            aria-hidden
                            className="text-[#BBD5EC] transition-colors duration-300 group-hover:text-zinc-950"
                            animate={{ y: [0, 2, 0] }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <FiDownload className="size-[1.1em] shrink-0" strokeWidth={2.1} />
                        </motion.span>
                        Descargar CV
                    </span>
                </motion.button>
            </motion.div>

            <motion.div variants={menuItem} className="mt-5 flex justify-center">
                <motion.button
                    type="button"
                    aria-label="Ir a la sección perfil"
                    onClick={() => scrollToSection("about")}
                    className="flex items-center justify-center rounded-full p-2 text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        y: {
                            repeat: Infinity,
                            duration: 2.3,
                            ease: "easeInOut",
                            delay: 0.85,
                        },
                    }}
                >
                    <FiChevronDown className="size-8" strokeWidth={1.35} aria-hidden />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
