"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tienda } from "@/types";

export default function TiendaDetallePage() {
  const { id } = useParams();
  const [tienda, setTienda] = useState<Tienda | null>(null);
  const [loading, setLoading] = useState(true);

  const cargarTienda = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tiendas/${id}`);

      if (!res.ok) {
        setTienda(null);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setTienda(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTienda();
  }, [id]);

  if (loading) return <p className="p-6">Cargando tienda...</p>;
  if (!tienda) return <p className="p-6 text-red-500">Tienda no encontrada</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{tienda.nombre}</h1>

      <div className="border rounded-lg shadow-md p-4 bg-white">
        <p><strong>Dirección:</strong> {tienda.direccion}</p>
        <p><strong>Correo:</strong> {tienda.correo}</p>
        <p><strong>Teléfono:</strong> {tienda.telefono}</p>
        <p><strong>Descripción:</strong> {tienda.descripcion}</p>
      </div>
    </div>
  );
}
