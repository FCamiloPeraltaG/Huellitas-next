"use client";

import { useState } from "react";

export default function CrearProductoModal({ setOpen, reload }: any) {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    categoria: "",
    imageneUrl: "",
  });

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const crear = async () => {
    const res = await fetch("http://localhost:8080/productos/Registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Error al crear producto");
      return;
    }

    alert("Producto creado 🎉");
    reload();
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Crear Producto</h2>

        <div className="space-y-3">
          {Object.keys(form).map((campo) => (
            <input
              key={campo}
              name={campo}
              placeholder={campo}
              value={(form as any)[campo]}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={crear}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}