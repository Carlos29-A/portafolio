import { bebasNeue, bungee } from "@/src/styles/font"

export const Title = () => {
    return (
        <div className="inline-flex items-baseline gap-14 leading-none transform-[scaleY(1.2)] origin-[center_bottom]">
            <h1
                className={`${bungee.className} text-8xl font-bold -tracking-wide leading-none`}
            >
                P<span className="text-7xl -tracking-wider">ortafolio</span>
            </h1>
            <h2
                className={`${bebasNeue.className} -translate-y-2 text-5xl font-bold leading-none tabular-nums`}
            >
                {new Date().getFullYear()}
            </h2>
        </div>
    )
}
