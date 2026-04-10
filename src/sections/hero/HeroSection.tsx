import { Logo } from "@/src/components/Logo"
import { HeroImage, HeroMenu, HeroSubtitle, HeroTitle } from "./components"

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-[min(88dvh,38rem)] w-full flex-col overflow-x-clip bg-zinc-950 md:min-h-[min(72dvh,44rem)]">
            <div className="absolute left-0 top-0 z-20 p-3 sm:p-4 md:p-6">
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

            <div className="relative z-10 mt-35 flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-5 px-6 pb-10 pt-22 max-md:gap-7 max-md:px-4 max-md:pb-8 max-md:pt-20 md:px-10 md:pb-14 md:pt-28">
                <div className="relative flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-14">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-[calc(50%-50vw)] z-0 hidden w-[min(40vw,22rem)] rounded-r-md bg-[#9b0f1f] md:block"
                        aria-hidden
                    />
                    <div className="relative z-10 mx-auto shrink-0 md:mx-0 md:ml-24">
                        <HeroImage />
                    </div>
                    <div className="relative z-10 flex w-full justify-center md:contents">
                        <HeroTitle />
                    </div>
                </div>

                <HeroSubtitle />
                <HeroMenu />
            </div>
        </section>
    )
}
