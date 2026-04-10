"use client"

import { Navbar, Title } from "@/src/components/ui"
import { createSwapy, type Swapy } from "swapy"
import { useEffect, useRef } from "react"
import { ProjectCard } from "./components"

const PROJECTS = [
    {
        id: "profile-board",
        name: "UI Profile",
        category: "branding",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-4 lg:col-start-1 lg:row-start-1",
        tone: "from-zinc-700/75 via-zinc-900 to-black",
    },
    {
        id: "shape-kit",
        name: "Shape Kit",
        category: "assets",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-1",
        tone: "from-zinc-500/70 via-zinc-800 to-slate-950",
    },
    {
        id: "poster-paper",
        name: "Poster Paper",
        category: "editorial",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-1 lg:col-start-7 lg:row-start-1",
        tone: "from-slate-500/70 via-slate-800 to-zinc-950",
    },
    {
        id: "void-logo",
        name: "Void Logo",
        category: "identity",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-10 lg:row-start-1",
        tone: "from-blue-900/70 via-zinc-900 to-black",
    },
    {
        id: "storm-scene",
        name: "Storm Scene",
        category: "cover",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-2",
        tone: "from-sky-900/75 via-slate-900 to-zinc-950",
    },
    {
        id: "story-reel",
        name: "Story Reel",
        category: "social",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-3 lg:col-start-7 lg:row-start-2",
        tone: "from-fuchsia-700/75 via-purple-950 to-zinc-950",
    },
    {
        id: "valorant-keyart",
        name: "Valorant Keyart",
        category: "campaign",
        size: "col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-10 lg:row-start-3",
        tone: "from-red-700/70 via-red-950 to-black",
    },
]

export const ProjectSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const swapyRef = useRef<Swapy | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        swapyRef.current = createSwapy(containerRef.current, {
            animation: "spring",
            swapMode: "drop",
            dragOnHold: false,
            autoScrollOnDrag: false,
        })

        return () => {
            swapyRef.current?.destroy()
            swapyRef.current = null
        }
    }, [])

    return (
        <section className="relative flex flex-col gap-6 bg-black px-4 py-8 sm:gap-8 sm:p-6 md:gap-10 md:p-10" id="projects">
            <div
                className="pointer-events-none absolute top-0 left-0 z-1 h-[min(48vh,24rem)] w-[min(72%,36rem)] bg-[radial-gradient(ellipse_115%_100%_at_0%_0%,#004C73,rgba(0,76,115,0.75)_38%,rgba(0,76,115,0.35)_54%,transparent_74%)] opacity-90"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-1 w-[min(78%,42rem)] bg-[radial-gradient(ellipse_115%_85%_at_100%_42%,#002238,rgba(0,34,56,0.82)_40%,rgba(0,34,56,0.4)_58%,transparent_75%)] opacity-95"
                aria-hidden
            />
            <Navbar active="proyectos" isLogo={false} />
            <div className="text-center text-[#676767]">
                <Title
                    size="text-2xl"
                    text="Mis Proyectos"
                />
            </div>

            <div
                ref={containerRef}
                className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 auto-rows-[6.25rem] gap-2.5 sm:auto-rows-[6rem] sm:gap-3 md:auto-rows-[6.5rem] md:gap-4"
            >
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
