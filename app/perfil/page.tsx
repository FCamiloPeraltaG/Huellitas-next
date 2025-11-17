"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditProfileModal from "./EditProfileModal";
import Swal from "sweetalert2";

export default function PerfilPage() {
  const [user, setUser] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(`http://localhost:8080/usuarios/id/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar el perfil",
          confirmButtonColor: "#ef4444",
        });
      }
    };

    loadUser();
  }, [router]);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-purple-600">Cargando perfil...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
          Mi Perfil
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="space-y-4 text-lg">
            <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Dirección:</strong> {user.direccion || "No especificada"}</p>
            <p><strong>Teléfono:</strong> {user.telefono || "No especificado"}</p>
            <p><strong>Username:</strong> {user.username}</p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-8 w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Editar Perfil
          </button>
        </div>

        {openModal && (
          <EditProfileModal user={user} setOpen={setOpenModal} setUser={setUser} />
        )}
      </div>
    </main>
  );
}