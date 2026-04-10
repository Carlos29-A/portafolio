interface Props {
    project: {
        id: string;
        name: string;
        category: string;
        size: string;
        tone: string;
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.22),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,0.7)_100%)] opacity-90" />
                    <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/35" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-0 px-3 pb-2.5 text-white/90 opacity-100 transition-all duration-300 sm:px-4 sm:pb-3 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <p className="text-[10px] tracking-[0.2em] text-white/60 uppercase">{project.category}</p>
                        <h3 className="text-sm font-semibold">{project.name}</h3>
                    </div>
                </article>
            </div>

        </>
    )
}
