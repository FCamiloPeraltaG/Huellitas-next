"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
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
            {isLoggedIn ? (
              <>
                <Link
                  href="/perfil"
                  className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Mi Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-700 transition"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-700 transition"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}