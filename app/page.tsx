import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-6">
            Huellitas
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            La plataforma que unifica tiendas locales de accesorios para mascotas en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-lg"
            >
              Explorar Productos
            </Link>
            <Link
              href="/register"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition"
            >
              Crear Cuenta
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Ventajas de Comprar en Huellitas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Catálogo Unificado", desc: "Accede a productos de múltiples tiendas locales" },
              { title: "Compras Seguras", desc: "Transacciones protegidas con encriptación" },
              { title: "Entregas Confiables", desc: "Rutas optimizadas y tiempos reales" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-purple-50 rounded-xl">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}