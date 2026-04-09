import { About, Education, Experience, Skills } from "../components/About";
import { Lenguages } from "../components/About/lenguages/Lenguages";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Nav/Navbar";

export default function PortfolioSection() {
    return (
        <>
            <div className="p-10 bg-black flex flex-col gap-10">
                { /* Navegación */}
                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    { /* Izquierda */}
                    <Hero />
                    { /* Derecha */}
                    <div className="flex flex-col gap-2 text-[#676767]">
                        <About />
                        <Skills />
                        <div className="grid md:grid-cols-2 gap-10 mt-5">
                            { /* Educacion */}
                            <Education />
                            {/* Experiencia */}
                            <Experience />
                        </div>
                        {/* Languages */}
                        <Lenguages />
                    </div>
                </div>
            </div>
        </>
    )
}
