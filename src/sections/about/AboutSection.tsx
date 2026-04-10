import { AboutSidebar, AboutInfo, Skills, Education, Experience, Languages } from "./components"
import { Navbar } from "@/src/components/ui"

export const AboutSection = () => {
    return (
        <div className="flex flex-col gap-6 bg-black px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 md:p-10" id="about">
            <Navbar active="perfil" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <AboutSidebar />
                <div className="flex flex-col gap-2 text-[#676767]">
                    <AboutInfo />
                    <Skills />
                    <div className="grid md:grid-cols-2 gap-10 mt-5 mb-3">
                        <Education />
                        <Experience />
                    </div>
                    <Languages />
                </div>
            </div>
        </div>
    )
}
