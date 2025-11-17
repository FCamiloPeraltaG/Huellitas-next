"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);



export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);

  const increaseQuantity = (idProducto: number) => {
  setCart(
    cart.map((item) =>
      item.idProducto === idProducto
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    )
  );
};

const decreaseQuantity = (idProducto: number) => {
  setCart(
    cart
      .map((item) =>
        item.idProducto === idProducto
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0) // elimina si llega a 0
  );
};

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    const exists = cart.find((p) => p.idProducto === product.idProducto);

    if (exists) {
      // Aumentar cantidad
      setCart(
        cart.map((item) =>
          item.idProducto === product.idProducto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (idProducto: number) => {
    setCart(cart.filter((item) => item.idProducto !== idProducto));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
  value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}
>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);