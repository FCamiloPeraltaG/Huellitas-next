"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminProductosPage() {
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
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Administrar Productos</h1>

        <Link
          href="/admin/products/crear"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          + Nuevo Producto
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p: any) => (
            <tr key={p.idProducto} className="border-b">
              <td className="p-2">{p.idProducto}</td>
              <td className="p-2">{p.nombre}</td>
              <td className="p-2">${p.precio}</td>
              <td className="p-2">{p.stock}</td>
              <td className="p-2 space-x-2">
                <Link
                  href={`/admin/products/editar/${p.idProducto}`}
                  className="text-blue-600"
                >
                  Editar
                </Link>
                <button className="text-red-500">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}