import type { Metadata } from "next";
import { orbitron } from "@/src/styles/font";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de mis proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${orbitron.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
