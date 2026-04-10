import Image from "next/image"

export const AboutSidebar = () => {
    return (
        <section className="flex flex-col items-center justify-start gap-4 md:gap-5">
            <div className="-mb-1 flex flex-col gap-1.5 text-center text-gray-300 sm:gap-2 md:-mb-2">
                <p className="text-lg uppercase sm:text-xl md:text-2xl">Hola, soy</p>
                <h1 className="text-2xl font-bold transform-[scaleY(1.35)] sm:text-3xl sm:transform-[scaleY(1.45)] md:transform-[scaleY(1.5)]">
                    Carlos Aguilar Villanueva
                </h1>
            </div>
            <div className="relative mt-12 flex shrink-0 items-center justify-center overflow-visible sm:mt-16 md:mt-32">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[min(22rem,76vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#025380] opacity-65 blur-[5.5rem] sm:blur-[6.5rem] md:blur-[7rem]"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[min(40rem,min(115vw,44rem))] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(2,83,128,0.42)_0%,rgba(2,83,128,0.14)_48%,rgba(2,83,128,0.05)_62%,transparent_78%)]"
                />
                <div className="relative z-10">
                    <Image
                        src="/favicon.ico"
                        alt="Foto de perfil"
                        width={100}
                        height={100}
                        className="h-auto w-[min(100%,16rem)] max-w-[85vw] rounded-full object-cover sm:w-60 md:w-72"
                    />
                </div>
            </div>
        </section>
    )
}
