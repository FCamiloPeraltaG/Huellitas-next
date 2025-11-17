"use client";

import { useState } from "react";

export default function EditProfileModal({ user, setOpen, setUser }: any) {
  const [form, setForm] = useState({
    nombre: user.nombre,
    apellido: user.apellido,
    direccion: user.direccion,
    telefono: user.telefono,
    email: user.email,
  });

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const actualizar = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `http://localhost:8080/usuarios/actualizar/${user.idUsuario}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) {
      alert("Error al actualizar perfil");
      return;
    }

    const updatedUser = { ...user, ...form };
    setUser(updatedUser);
    setOpen(false);

    alert("Perfil actualizado exitosamente 🎉");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Editar Perfil</h2>

        <div className="space-y-3">
          <input
            name="nombre"
            value={form.nombre}
            onChange={onChange}
            placeholder="Nombre"
            className="w-full p-2 border rounded"
          />
          <input
            name="apellido"
            value={form.apellido}
            onChange={onChange}
            placeholder="Apellido"
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Correo"
            className="w-full p-2 border rounded"
          />
          <input
            name="direccion"
            value={form.direccion}
            onChange={onChange}
            placeholder="Dirección"
            className="w-full p-2 border rounded"
          />
          <input
            name="telefono"
            value={form.telefono}
            onChange={onChange}
            placeholder="Teléfono"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={actualizar}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}