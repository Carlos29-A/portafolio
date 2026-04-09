import Link from "next/link"
import { Logo } from "../../Logo"

interface Props {
    active: string;
}


export const Navbar = ({ active }: Props) => {
    return (
        <div className="flex items-center justify-center gap-8 relative">
            <Link href="#" className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300 ${active === "perfil" ? "bg-[#BBD5EC]/80" : ""}`}>
                Perfil
            </Link>
            <Link href="#" className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300 ${active === "proyectos" ? "bg-[#BBD5EC]/80" : ""}`}>
                Proyectos
            </Link>
            <Link href="#" className={`text-sm text-white font-bold hover:text-white px-4 py-2 rounded-full hover:bg-[#BBD5EC]/80 transition-all duration-300 ${active === "contacto" ? "bg-[#BBD5EC]/80" : ""}`}>
                Contacto
            </Link>
            <div className="absolute left-0 top-0">
                <Logo />
            </div>
        </div>
    )
}
