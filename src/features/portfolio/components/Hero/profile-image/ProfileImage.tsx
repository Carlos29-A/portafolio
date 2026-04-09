import Image from "next/image"

export const ProfileImage = () => {
    return (
        <div className="relative z-10 shrink-0">
            <Image
                src={"/favicon.ico"}
                alt="Foto de perfil"
                width={100}
                height={100}
                className="w-72 h-auto object-cover"
            />
        </div>
    )
}
