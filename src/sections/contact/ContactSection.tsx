import { Navbar, Title } from "@/src/components/ui"
import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const ContactSection = () => {
    return (
        <>
            <div className="p-10 bg-black flex flex-col gap-10 relative" id="contact">
                <div
                    className="pointer-events-none absolute top-0 left-0 z-1 h-[min(34vh,16rem)] w-[min(52%,24rem)] bg-[radial-gradient(ellipse_110%_95%_at_0%_0%,#000518,rgba(0,5,24,0.72)_36%,rgba(0,5,24,0.32)_52%,transparent_70%)] opacity-90"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute top-0 right-0 z-1 h-[min(52vh,26rem)] w-[min(78%,42rem)] bg-[radial-gradient(ellipse_120%_100%_at_100%_0%,#002238,rgba(0,34,56,0.82)_42%,rgba(0,34,56,0.4)_58%,transparent_78%)] opacity-95"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute bottom-0 right-0 z-1 h-[min(52vh,26rem)] w-[min(78%,42rem)] bg-[radial-gradient(ellipse_120%_100%_at_100%_100%,#002238,rgba(0,34,56,0.82)_42%,rgba(0,34,56,0.4)_58%,transparent_78%)] opacity-95"
                    aria-hidden
                />
                <Navbar active="contacto" isLogo={false} />
                <div className="flex justify-center items-center gap-20">
                    <div className="flex">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Image src="/favicon.ico" alt="Contact" width={400} height={400} className="rounded-4xl object-cover" />
                            <p className="text-center text-[#676767] text-sm font-bold">Carlos Aguilar Villanueva</p>
                            <p className="text-center text-[#676767] text-sm font-bold"> 24 años</p>
                        </div>
                        <div className="text-[#676767] space-y-4  ">
                            <Title size="text-2xl" text="Contactame" />
                            {/* Redes Sociales */}
                            <div className="flex flex-col gap-5 mt-10">
                                <div className="flex items-center justify-center gap-2">
                                    {/* Icono de LinkedIn dentro de un circulo blanco */}
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <FaLinkedinIn className="text-2xl text-black" />
                                    </div>
                                    <Link className="text-sm font-bold hover:text-white transition-all duration-300" href="#" target="_blank">carlosaguilarvillanueva </Link>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    {/* Icono de GitHub dentro de un circulo blanco */}
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <FaGithub className="text-2xl text-black" />
                                    </div>
                                    <Link className="text-sm font-bold hover:text-white transition-all duration-300" href="#" target="_blank">caguilarvillanueva</Link>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    {/* Icono de Instagram dentro de un circulo blanco */}
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <FaInstagram className="text-2xl text-black" />
                                    </div>
                                    <Link className="text-sm font-bold hover:text-white transition-all duration-300" href="#" target="_blank">carlosaguilarvillanueva</Link>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    {/* Icono de Email dentro de un circulo blanco */}
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-2xl text-black" />
                                    </div>
                                    <Link className="text-sm font-bold hover:text-white transition-all duration-300" href="#" target="_blank">carlosaguilarvillanueva@gmail.com</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="text-center text-[#676767] space-y-4">
                        <h3 className="text-4xl font-bold uppercase scale-y-150">Gracias por visitar</h3>
                        <h3 className="text-4xl font-bold uppercase scale-y-150">{new Date().getFullYear()}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}
