"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface Props {
  user: any;
  setOpen: (open: boolean) => void;
  setUser: (user: any) => void;
}

export default function EditProfileModal({ user, setOpen, setUser }: Props) {
  const [form, setForm] = useState({
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
    direccion: user.direccion || "",
    telefono: user.telefono || "",
    username: user.username,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:8080/usuarios/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      const updated = await res.json();
      setUser(updated);

      await Swal.fire({
        icon: "success",
        title: "¡Guardado!",
        text: "Perfil actualizado correctamente",
        confirmButtonColor: "#9333ea",
      });

      setOpen(false);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Editar Perfil</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={form.apellido}
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Dirección"
            value={form.direccion}
            onChange={(e) => setForm({ ...form, direccion: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}