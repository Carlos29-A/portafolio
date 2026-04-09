import { Hero } from "@/src/components/hero";
import PortfolioSection from "@/src/features/portfolio/sections/PortfolioSection";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-10">
        <Hero />
        <PortfolioSection />
      </div>
    </>
  )
}
