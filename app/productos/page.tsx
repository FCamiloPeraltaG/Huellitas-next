"use client";

import { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";

export default function ProductosPage() {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const res = await fetch("http://localhost:8080/productos");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productos.map((p: any) => (
        <ProductoCard key={p.idProducto} producto={p} />
      ))}
    </div>
  );
}