import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
  import Header from "./components/Header";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huellitas | E-commerce de Accesorios para Mascotas",
  description: "Catálogo unificado de tiendas locales con compras seguras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased bg-gray-50`}>
        <Header />   {/* El header será client-component */}

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-900 text-white py-10 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg mb-2">Huellitas - Tienda confiable de accesorios para mascotas</p>
            <p className="mt-4 text-xs">© 2025 Huellitas. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}