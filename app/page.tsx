import { HeroSection, AboutSection, ProjectSection, ContactSection } from "@/src/sections"

export default function Home() {
    return (
        <div className="flex min-w-0 flex-col gap-6 overflow-x-hidden sm:gap-8 md:gap-10">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}
