import Link from "next/link";

export default function Productos() {
  const productos = [
    { id: 1, nombre: "Collar LED Recargable", precio: 29900, tienda: "PetShop Centro" },
    { id: 2, nombre: "Juguete Interactivo con Sonido", precio: 45900, tienda: "Mascotas VIP" },
    { id: 3, nombre: "Cama Térmica para Perros", precio: 89900, tienda: "Huellas Felices" },
    { id: 4, nombre: "Comedero Automático", precio: 129900, tienda: "PetTech" },
  ];

  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Catálogo de Productos</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explora accesorios de múltiples tiendas locales en un solo lugar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {productos.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <h3 className="text-lg font-bold text-purple-700">{p.nombre}</h3>
            <p className="text-sm text-gray-500">Tienda: {p.tienda}</p>
            <p className="text-2xl font-bold text-pink-600 mt-2">${p.precio.toLocaleString()}</p>
            <Link
              href={`/producto/${p.id}`}
              className="mt-4 block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}