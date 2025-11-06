import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "La Novena-1 | 6 de Diciembre 2025",
  description:
    "La fusión épica del underground: Asado Místico x 808 Fest. El evento más esperado del año llega el 6 de diciembre al Puente de la 4 Sur.",
  keywords: [
    "La Novena-1",
    "Asado Místico",
    "808 Fest",
    "underground",
    "hip hop",
    "evento",
    "Medellín",
  ],
  openGraph: {
    title: "La Novena-1 | La Fusión del Underground",
    description:
      "Asado Místico x 808 Fest - 6 de Diciembre 2025 en el Puente de la 4 Sur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${teko.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
