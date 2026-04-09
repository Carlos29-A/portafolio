import { HeroSection, AboutSection, ProjectSection, ContactSection } from "@/src/sections"

export default function Home() {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}
