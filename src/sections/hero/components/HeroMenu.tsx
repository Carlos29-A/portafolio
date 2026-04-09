"use client"

import { scrollToSection } from "@/src/utils"
import { motion, type Variants } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

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
            <motion.div variants={menuItem} className="flex items-center justify-center">
                <button
                    type="button"
                    className="mt-10 cursor-pointer rounded border border-white px-4 py-2 text-gray-300 transition-colors hover:bg-white hover:text-black"
                >
                    Descargar CV
                </button>
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
