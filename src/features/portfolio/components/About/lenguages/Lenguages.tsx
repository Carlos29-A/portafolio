import { Title } from '@/src/components/ui/title/Title'

export const Lenguages = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title
                size="text-xl"
                text="lenguages"
            />
            {/* Aca van los items de las lenguages con animacion de entrada */}
        </div>
    )
}
