"use client"

import { bebasNeue, bungee } from "@/src/styles/font"
import { motion, type Variants } from "framer-motion"

const titleContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.14, delayChildren: 0.08 },
    },
}

const titleItem: Variants = {
    hidden: { opacity: 0, x: -56 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
}

export const HeroTitle = () => {
    return (
        <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-2 text-center origin-[center_bottom] transform-[scaleY(1.15)] md:inline-flex md:flex-row md:items-baseline md:gap-14 md:text-left md:leading-none md:transform-[scaleY(1.2)]"
        >
            <motion.h1
                variants={titleItem}
                className={`${bungee.className} text-5xl font-bold -tracking-wide leading-none text-white md:text-8xl`}
            >
                P<span className="text-4xl -tracking-wider md:text-7xl">ortafolio</span>
            </motion.h1>
            <motion.h2
                variants={titleItem}
                className={`${bebasNeue.className} text-4xl font-bold leading-none tabular-nums text-white md:-translate-y-2 md:text-5xl`}
            >
                {new Date().getFullYear()}
            </motion.h2>
        </motion.div>
    )
}
