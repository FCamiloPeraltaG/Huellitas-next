"use client";

import { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default function PerfilPage() {
  const [user, setUser] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:8080/usuarios/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Error al cargar perfil");
          return;
        }

        const data = await res.json();
        setUser(data);

      } catch (error) {
        console.error("Error del servidor:", error);
      }
    };

    loadProfile();
  }, []);

  if (!user) return <p className="p-10">Cargando perfil...</p>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Mi Perfil</h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Dirección:</strong> {user.direccion}</p>
        <p><strong>Teléfono:</strong> {user.telefono}</p>
        <p><strong>Username:</strong> {user.username}</p>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-5 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Editar perfil
        </button>
      </div>

      {openModal && (
        <EditProfileModal 
          user={user} 
          setOpen={setOpenModal} 
          setUser={setUser} 
        />
      )}
    </main>
  );
}