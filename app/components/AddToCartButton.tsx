"use client";

import { useCart } from "../context/CartContext";
import type { Producto } from "@/types";

export default function AddToCartButton({ producto }: { producto: Producto }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(producto)}
      className="bg-purple-600 text-white text-xl font-semibold py-4 px-12 rounded-xl hover:bg-purple-700 transition shadow-lg w-full md:w-auto"
    >
      Agregar al carrito
    </button>
  );
}