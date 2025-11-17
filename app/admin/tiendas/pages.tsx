"use client";

import { useEffect, useState } from "react";
import { Tienda } from "@/types";
import { api } from "@/lib/api";

export default function TiendasAdminPage() {
  const [tiendas, setTiendas] = useState<Tienda[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarTiendas();
  }, []);

  const cargarTiendas = async () => {
    try {
      setLoading(true);
      const data = await api.get<Tienda[]>("/tiendas");
      setTiendas(data);
    } catch (error) {
      console.error("Error cargando tiendas:", error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarTienda = async (id_tienda: number) => {
    if (!confirm("¿Eliminar esta tienda?")) return;

    try {
      await api.delete(`/tiendas/${id_tienda}`);
      setTiendas(prev => prev.filter(t => t.id_tienda !== id_tienda));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Administrar Tiendas</h1>

        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tiendas.map(tienda => (
              <div key={tienda.id_tienda} className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold">{tienda.nombre}</h2>
                <p className="text-gray-700">{tienda.descripcion}</p>
                <p className="text-gray-600">📍 {tienda.direccion}</p>
                <p className="text-gray-600">📞 {tienda.telefono}</p>
                <p className="text-gray-600">📧 {tienda.correo}</p>

                <button
                  onClick={() => eliminarTienda(tienda.id_tienda)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
