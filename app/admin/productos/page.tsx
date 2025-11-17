"use client";

import { useEffect, useState } from "react";
import CrearProductoModal from "./CrearProductoModal";
import EditarProductoModal from "./EditarProductoModal";

export default function AdminProductosPage() {
  const [productos, setProductos] = useState([]);

  const [openCrear, setOpenCrear] = useState(false);
  const [productoEditar, setProductoEditar] = useState<any>(null);

  // ===========================
  // CARGAR PRODUCTOS
  // ===========================
  const cargarProductos = async () => {
    const res = await fetch("http://localhost:8080/productos");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // ===========================
  // ELIMINAR
  // ===========================
  const eliminarProducto = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    const res = await fetch(`http://localhost:8080/productos/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Error al eliminar producto");
      return;
    }

    alert("Producto eliminado");
    cargarProductos();
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Administrar Productos</h1>

        <button
          onClick={() => setOpenCrear(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          + Nuevo Producto
        </button>
      </div>

      {/* TABLA */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
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

              <td className="p-2 space-x-3">
                <button
                  className="text-blue-600"
                  onClick={() => setProductoEditar(p)}
                >
                  Editar
                </button>

                <button
                  className="text-red-500"
                  onClick={() => eliminarProducto(p.idProducto)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL CREAR */}
      {openCrear && (
        <CrearProductoModal
          setOpen={setOpenCrear}
          reload={cargarProductos}
        />
      )}

      {/* MODAL EDITAR */}
      {productoEditar && (
        <EditarProductoModal
          producto={productoEditar}
          setProducto={setProductoEditar}
          reload={cargarProductos}
        />
      )}
    </div>
  );
}