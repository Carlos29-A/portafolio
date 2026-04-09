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

export const Title = ({ size, text }: Props) => {

    //Obtener la Primera letra por ejemplo: ABOUT ME -> A
    const firstLetter = text.charAt(0);

    //Obtener el resto del texto por ejemplo: ABOUT ME -> BOUT ME
    const restOfText = text.slice(1);
    const restSize = getReducedSize(size);

    return (
        <h2 className={`${size} font-bold mb-4 scale-y-150 uppercase`}>
            {firstLetter}
            <span className={restSize}>{restOfText}</span>
        </h2>
    )
}
