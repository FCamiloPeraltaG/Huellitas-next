import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Huellitas</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="hover:text-pink-200 transition">Inicio</Link>
                <Link href="/productos" className="hover:text-pink-200 transition">Productos</Link>
                <Link href="/carrito" className="hover:text-pink-200 transition">Carrito</Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/login" className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                  Iniciar Sesión
                </Link>
                <Link href="/register" className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-700 transition">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </nav>

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