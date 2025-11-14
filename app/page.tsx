import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-6">
            🐾 Huellitas
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            La primera plataforma que <span className="text-purple-600 font-bold">unifica tiendas locales</span> 
            y te da <span className="text-pink-600 font-bold">seguimiento en tiempo real</span> de tus pedidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-lg"
            >
              Comprar Ahora
            </Link>
            <Link
              href="/seguimiento"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition"
            >
              Seguimiento de Pedidos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            ¿Por qué elegir Huellitas?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚚", title: "Entregas Rápidas", desc: "Rutas optimizadas con tiendas locales" },
              { icon: "📍", title: "Seguimiento en Tiempo Real", desc: "Sabe exactamente dónde está tu pedido" },
              { icon: "🔒", title: "100% Seguro", desc: "Datos protegidos y transacciones confiables" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}