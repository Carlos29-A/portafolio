import { Logo } from "@/src/components/hero"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>

            <div className="flex items-center justify-center gap-8 relative">
                { /* Menú */}
                <Link href={'#'} className="text-sm text-gray-500 hover:text-white bg-[#BBD5EC] px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300">
                    Perfil
                </Link>
                <Link href={'#'} className="text-sm text-gray-500 hover:text-white bg-[#BBD5EC] px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300">
                    Proyectos
                </Link>
                <Link href={'#'} className="text-sm text-gray-500 hover:text-white bg-[#BBD5EC] px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300">
                    Contacto
                </Link>

                <div className="absolute left-0 top-0">
                    <Logo />
                </div>
            </div>
        </>
    )
}
