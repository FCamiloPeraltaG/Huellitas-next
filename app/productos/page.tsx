import { ProductosAPI } from "../api/productos"

export default async function ProductosPage() {
  const productos = await ProductosAPI.listar();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((p: any) => (
          <div key={p.idProducto} className="bg-white p-6 rounded-xl shadow">
            <img
              src={p.imageneUrl}
              className="w-full h-48 rounded object-cover"
            />
            <h2 className="text-xl font-semibold mt-3">{p.nombre}</h2>
            <p className="text-gray-600 text-sm">{p.descripcion}</p>
            <p className="text-green-600 font-bold text-xl mt-3">
              ${p.precio.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}