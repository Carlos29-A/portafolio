import { HeroSection, AboutSection, ProjectSection } from "@/src/sections"

export default function Home() {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </div>
    )
}
