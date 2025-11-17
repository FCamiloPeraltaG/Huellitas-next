"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Producto } from "../../types";

interface CartItem extends Producto {
  cantidad: number;
}

interface CartContextType {
  carrito: CartItem[];
  addToCart: (producto: Producto) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<CartItem[]>([]);

  const addToCart = (producto: Producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.idProducto === producto.idProducto);
      if (existe) return prev.map(p => p.idProducto === producto.idProducto ? { ...p, cantidad: p.cantidad + 1 } : p);
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCarrito(prev => prev.filter(p => p.idProducto !== id));
  };

  const clearCart = () => setCarrito([]);

  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};