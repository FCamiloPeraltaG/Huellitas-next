"use client";

import Link from "next/link";

export default function TiendaCard({ tienda }: any) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <Link href={`/tiendas/${tienda.id_tienda}`}>
        <h2 className="text-xl font-bold">{tienda.nombre}</h2>
      </Link>

      <p className="text-gray-600 mt-2">{tienda.descripcion}</p>

      <div className="mt-4 text-sm text-gray-500">
        <p><strong>Dirección:</strong> {tienda.direccion}</p>
        <p><strong>Correo:</strong> {tienda.correo}</p>
        <p><strong>Teléfono:</strong> {tienda.telefono}</p>
      </div>

      <Link
        href={`/tiendas/${tienda.id_tienda}`}
        className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Ver tienda
      </Link>
    </div>
  );
}
