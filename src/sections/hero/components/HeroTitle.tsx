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
            className="inline-flex items-baseline gap-14 leading-none transform-[scaleY(1.2)] origin-[center_bottom]"
        >
            <motion.h1
                variants={titleItem}
                className={`${bungee.className} text-8xl font-bold -tracking-wide leading-none text-white`}
            >
                P<span className="text-7xl -tracking-wider">ortafolio</span>
            </motion.h1>
            <motion.h2
                variants={titleItem}
                className={`${bebasNeue.className} -translate-y-2 text-5xl font-bold leading-none tabular-nums text-white`}
            >
                {new Date().getFullYear()}
            </motion.h2>
        </motion.div>
    )
}
