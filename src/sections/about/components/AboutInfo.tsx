"use client"

import { Title } from "@/src/components/ui"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const AboutInfo = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
        margin: "0px 0px -180px 0px",
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 28 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
        >
            <Title size="text-2xl" text="Sobre mí" />
            <div className="p-5">
                <p className="text-gray-400 uppercase text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi odit iure reprehenderit dolor nisi, totam nihil voluptate excepturi,
                    eum provident aut atque molestiae recusandae numquam modi minima, sunt doloribus ipsum.
                </p>
            </div>
        </motion.div>
    )
}
