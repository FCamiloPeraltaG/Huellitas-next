import Link from "next/link";

export default function TiendaCard({ tienda }: { tienda: any }) {
  return (
    <Link href={`/tiendas/${tienda.id_tienda}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-bold text-purple-600">
          {tienda.nombre}
        </h2>

        <p className="text-gray-600 mt-2">{tienda.descripcion}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            📍 {tienda.direccion}
          </p>
          <p className="text-sm text-gray-500">
            📞 {tienda.telefono}
          </p>
          <p className="text-sm text-gray-500">
            ✉️ {tienda.correo}
          </p>
        </div>

        <p className="mt-4 text-purple-600 font-semibold">
          Ver detalles →
        </p>
      </div>
    </Link>
  );
}
