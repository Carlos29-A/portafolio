"use client"

import { Title } from "@/src/components/ui"
import { motion, useInView, type Variants } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const skills = [
    "/skills/javascript.svg",
    "/skills/jwt-io.svg",
    "/skills/mongodb.svg",
    "/skills/nextjs.svg",
    "/skills/nodejs.svg",
    "/skills/postgresql.svg",
    "/skills/python.svg",
    "/skills/reactjs.svg",
    "/skills/supabase.svg",
    "/skills/tailwind.svg",
]

const outerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
}

const rowVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
}

const fromLeft: Variants = {
    hidden: { opacity: 0, x: -36 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}

export const Skills = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.45,
        margin: "0px 0px -180px 0px",
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={outerVariants}
        >
            <motion.div variants={fromLeft}>
                <Title size="text-2xl" text="Tecnologías que he utilizado" />
            </motion.div>
            <motion.div
                className="mt-10 flex flex-wrap gap-4"
                variants={rowVariants}
            >
                {skills.map((skill) => (
                    <motion.span
                        key={skill}
                        variants={fromLeft}
                        className="rounded  py-2"
                    >
                        <Image src={skill} alt={skill} width={100} height={100} className="w-10 h-10" />
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    )
}
