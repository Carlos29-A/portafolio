import { Title } from "@/src/components/ui"

export const Languages = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title size="text-xl" text="Idiomas" />
            {/* Items de idiomas con animación de entrada */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                <h2 className="text-xl font-bold">Ingles</h2>
                <h2 className="text-xl font-bold">50%</h2>
            </div>
        </div>
    )
}
