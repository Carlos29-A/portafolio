import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-auto w-14 md:w-20"
            priority
        />
    )
}
