import { HeroSection, AboutSection } from "@/src/sections"

export default function Home() {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <AboutSection />
        </div>
    )
}
