import Image from "next/image"

export const HeroImage = () => {
    return (
        <div className="relative size-56 shrink-0 overflow-hidden rounded-full sm:size-60 md:size-64">
            <Image
                src="/favicon.ico"
                alt="Foto de perfil"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 240px, 256px"
                priority
            />
        </div>
    )
}
