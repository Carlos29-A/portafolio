import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Props {
    project: {
        id: string;
        name: string;
        category: string;
        description?: string;
        size: string;
        tone?: string;
        image?: string;
        demoUrl?: string;
        repoUrl?: string;
        teach?: string[];
    }
}


export const ProjectCard = ({ project }: Props) => {
    return (
        <>
            <div
                key={project.id}
                data-swapy-slot={project.id}
                className={project.size}
            >
                <article
                    data-swapy-item={project.id}
                    className={`group relative h-full overflow-hidden rounded-md border border-white/10 bg-linear-to-br ${project.tone} touch-auto cursor-grab select-none will-change-transform active:cursor-grabbing md:touch-none`}
                >
                    {/* Fondo negro con opacidad*/}
                    <div className="absolute z-20 inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {
                        project.image && (
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover z-10"
                            />
                        )
                    }
                    <div className="flex justify-between absolute inset-x-0 bottom-0 translate-y-0 px-3 pb-2.5 text-white/90 opacity-100 transition-all duration-300 sm:px-4 sm:pb-3 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 z-30">
                        <div className="flex flex-col ">
                            <p className="text-[12px] tracking-[0.2em] text-white uppercase">{project.category}</p>
                            <h3 className="text-sm font-semibold text-white">{project.name}</h3>
                        </div>

                        {/* Enlaces de demostración y repositorio */}
                        {
                            project.demoUrl && project.repoUrl && (
                                <div className="flex gap-2">
                                    <Link
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt className="text-white hover:text-gray-300" />
                                    </Link>
                                    <Link
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="text-white hover:text-gray-300" />
                                    </Link>
                                </div>
                            )
                        }

                    </div>
                </article>
            </div>

        </>
    )
}
