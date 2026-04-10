interface Props {
    size: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl' | 'text-10xl';
    text: string;
}

const sizeScale: Props["size"][] = [
    "text-sm",
    "text-md",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
    "text-10xl",
];

const getReducedSize = (size: Props["size"]): Props["size"] => {
    const index = sizeScale.indexOf(size);

    if (index <= 0) return sizeScale[0];

    return sizeScale[index - 1];
}

/** Títulos un poco más compactos en móvil */
const responsiveHeading: Partial<Record<Props["size"], string>> = {
    "text-xl": "text-lg sm:text-xl",
    "text-2xl": "text-xl sm:text-2xl",
}

const responsiveRest: Partial<Record<Props["size"], string>> = {
    "text-lg": "max-sm:text-base sm:text-lg",
    "text-xl": "max-sm:text-lg sm:text-xl",
    "text-2xl": "max-sm:text-xl sm:text-2xl",
}

export const Title = ({ size, text }: Props) => {

    //Obtener la Primera letra por ejemplo: ABOUT ME -> A
    const firstLetter = text.charAt(0);

    //Obtener el resto del texto por ejemplo: ABOUT ME -> BOUT ME
    const restOfText = text.slice(1);
    const restSize = getReducedSize(size);
    const firstClass = responsiveHeading[size] ?? size
    const restClass = responsiveRest[restSize] ?? restSize

    return (
        <h2 className={`${firstClass} mb-3 font-bold uppercase text-gray-300 transform-[scaleY(1.25)] sm:mb-4 sm:transform-[scaleY(1.5)]`}>
            {firstLetter}
            <span className={restClass}>{restOfText}</span>
        </h2>
    )
}
