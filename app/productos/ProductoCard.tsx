"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductoCard({ producto }: any) {
  const { addToCart } = useCart();

  const agregarCarrito = () => {
    addToCart(producto);
    alert("Producto agregado al carrito");
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <Link href={`/productos/${producto.idProducto}`}>
        <img
          src={producto.imageneUrl}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-3">{producto.nombre}</h2>
      </Link>

      <p className="text-gray-600">${producto.precio}</p>

      <button
        onClick={agregarCarrito}
        className="mt-4 bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}