"use client";

import { useState } from "react";

export default function EditarProductoModal({ producto, setProducto, reload }: any) {
  const [form, setForm] = useState({
    nombre: producto.nombre,
    precio: producto.precio,
    descripcion: producto.descripcion,
    stock: producto.stock,
    categoria: producto.categoria,
    imageneUrl: producto.imageneUrl,
  });

  const onChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const actualizar = async () => {
    const res = await fetch(
      `http://localhost:8080/productos/${producto.idProducto}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) return alert("Error al actualizar");

    alert("Producto actualizado ✔");
    reload();
    setProducto(null);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>

        <div className="space-y-3">
          {Object.keys(form).map((campo) => (
            <input
              key={campo}
              name={campo}
              value={(form as any)[campo]}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setProducto(null)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={actualizar}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}