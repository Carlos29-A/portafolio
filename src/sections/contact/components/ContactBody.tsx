"use client"

import { Title } from "@/src/components/ui"
import Image from "next/image"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { CONTACT_SOCIAL_LINKS } from "../constants"
import { ContactSocialLinkRow } from "./ContactSocialLinkRow"

const sectionViewport = {
    once: true,
    amount: 0.35,
    margin: "0px 0px -120px 0px",
} as const

const columnVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
}

const socialListVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.12 },
    },
}

const thankYouLineVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}

const thankYouContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.05 },
    },
}

export const ContactBody = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, sectionViewport)

    return (
        <motion.div
            ref={ref}
            className="relative z-10 flex flex-wrap justify-center gap-12 lg:gap-20"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.18, delayChildren: 0.06 },
                },
            }}
        >
            <motion.div
                variants={columnVariants}
                className="flex flex-col items-center justify-center gap-2"
            >
                <div className="overflow-hidden rounded-4xl">
                    <Image
                        src="/favicon.ico"
                        alt="Carlos Aguilar Villanueva"
                        width={400}
                        height={400}
                        className="rounded-4xl object-cover"
                        priority={false}
                    />
                </div>
                <p className="text-center text-sm font-bold text-[#676767]">Carlos Aguilar Villanueva</p>
                <p className="text-center text-sm font-bold text-[#676767]">24 años</p>
            </motion.div>

            <motion.div variants={columnVariants} className="space-y-4 text-[#676767]">
                <Title size="text-2xl" text="Contactame" />
                <motion.div
                    variants={socialListVariants}
                    className="mt-10 flex flex-col gap-5"
                >
                    {CONTACT_SOCIAL_LINKS.map((item) => (
                        <ContactSocialLinkRow key={item.id} item={item} />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                variants={columnVariants}
                className="space-y-4 text-center text-[#676767] flex flex-col items-center justify-center"
            >
                <motion.div variants={thankYouContainerVariants} className="space-y-4">
                    <motion.h3
                        variants={thankYouLineVariants}
                        className="text-4xl font-bold uppercase scale-y-150"
                    >
                        Gracias por visitar
                    </motion.h3>
                    <motion.h3
                        variants={thankYouLineVariants}
                        className="text-4xl font-bold uppercase scale-y-150"
                    >
                        {new Date().getFullYear()}
                    </motion.h3>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
