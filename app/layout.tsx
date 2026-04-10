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
    <html lang="es" className={`${orbitron.className} h-full overflow-x-hidden antialiased bg-[linear-gradient(135deg,#0d2b45_0%,#031523_50%,#010c18_100%)]`}>
      <body className="flex min-h-full min-w-0 flex-col">{children}</body>
    </html>
  );
}
