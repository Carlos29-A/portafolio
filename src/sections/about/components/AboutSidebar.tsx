import Image from "next/image"

export const AboutSidebar = () => {
    return (
        <section className="flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col gap-2 text-[#676767] text-center">
                <p className="uppercase text-2xl">Hola, soy</p>
                <h1 className="text-3xl font-bold transform scale-y-150">Carlos Aguilar Villanueva</h1>
            </div>
            <div className="relative z-10 shrink-0">
                <Image
                    src="/favicon.ico"
                    alt="Foto de perfil"
                    width={100}
                    height={100}
                    className="w-72 h-auto object-cover"
                />
            </div>
        </section>
    )
}
