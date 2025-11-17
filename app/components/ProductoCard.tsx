"use client";

import Image from "next/image";
import Link from "next/link";
import { Producto } from "@/types";
import { useCart } from "@/app/context/CartContext";


export default function ProductoCard({ producto }: { producto: Producto }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <Link href={`/productos/${producto.idProducto}`}>
        <div className="relative h-64 bg-gray-200">
          {producto.imageneUrl ? (
            <Image
              src={producto.imageneUrl}
              alt={producto.nombre}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2">{producto.nombre}</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            ${producto.precio.toLocaleString("es-CO")}
          </p>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={() => addToCart(producto)}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}