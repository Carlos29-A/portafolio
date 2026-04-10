"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import type { SocialLinkItem } from "../constants"

const rowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
}

type Props = {
    item: SocialLinkItem
}

const linkClass =
    "text-sm text-gray-400 font-bold transition-all duration-300 hover:text-white"

export const ContactSocialLinkRow = ({ item }: Props) => {
    const { href, label, Icon } = item
    const isMailto = href.startsWith("mailto:")

    return (
        <motion.div variants={rowVariants} className="flex w-full items-center justify-start gap-3 sm:justify-center sm:gap-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                <Icon className="text-2xl text-black" aria-hidden />
            </div>
            {isMailto ? (
                <a href={href} className={linkClass}>
                    {label}
                </a>
            ) : (
                <Link
                    className={linkClass}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </Link>
            )}
        </motion.div>
    )
}
