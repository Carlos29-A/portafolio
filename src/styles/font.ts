import { Bebas_Neue } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Bungee } from "next/font/google";

export const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas-neue",
});

export const orbitron = Orbitron({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-orbitron",
});

export const bungee = Bungee({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bungee",
});