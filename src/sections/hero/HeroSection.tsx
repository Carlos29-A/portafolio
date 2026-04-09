import { Logo } from "@/src/components/Logo"
import { HeroImage, HeroMenu, HeroSubtitle, HeroTitle } from "./components"

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-[min(72dvh,44rem)] w-full flex-col overflow-x-clip bg-zinc-950">
            <div className="absolute left-0 top-0 z-20 p-4 md:p-6">
                <Logo />
            </div>

            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-1 w-[min(78%,42rem)] bg-[radial-gradient(ellipse_115%_85%_at_100%_42%,#002238,rgba(0,34,56,0.82)_40%,rgba(0,34,56,0.4)_58%,transparent_75%)] opacity-95"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[min(52%,20rem)] bg-[radial-gradient(ellipse_120%_90%_at_50%_100%,#002238,rgba(0,34,56,0.75)_38%,rgba(0,34,56,0.35)_58%,transparent_76%)] opacity-90"
                aria-hidden
            />

            <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-5 px-6 pb-10 pt-22 md:px-10 md:pb-14 md:pt-28 mt-35">
                <div className="relative max-w-7xl flex w-full items-center gap-10 md:gap-14">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-[calc(50%-50vw)] z-0 w-[min(40vw,22rem)] rounded-r-md bg-[#9b0f1f]"
                        aria-hidden
                    />
                    <div className="relative z-10 ml-16 shrink-0 md:ml-24">
                        <HeroImage />
                    </div>
                    <HeroTitle />
                </div>

                <HeroSubtitle />
                <HeroMenu />
            </div>
        </section>
    )
}
