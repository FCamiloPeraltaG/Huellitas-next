"use client";

import { useEffect, useState } from "react";

export default function ProductosCategoria({ params }: any) {
  const { categoria } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`http://localhost:8080/productos/categoria/${categoria}`);
      const data = await res.json();
      setProductos(data);
    };

    loadData();
  }, [categoria]);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Productos categoría: {categoria}
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {productos.map((p: any) => (
          <div key={p.idProducto} className="p-4 border shadow rounded">
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}