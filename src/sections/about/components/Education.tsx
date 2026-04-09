import { Title } from "@/src/components/ui"
import { EducationCardSlide } from "./EducationCardSlide"

export const Education = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title size="text-xl" text="education" />
            {/* Items de educación con animación de entrada */}
            <EducationCardSlide />
        </div>
    )
}
