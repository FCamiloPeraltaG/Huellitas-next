import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-24 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Logo/Icono decorativo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
            Huellitas
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-purple-100 mb-4 max-w-4xl mx-auto font-light">
            La plataforma que conecta tiendas locales de accesorios para mascotas
          </p>
          <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-3xl mx-auto">
            Encuentra todo lo que tu mascota necesita en un solo lugar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/productos"
              className="group bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-purple-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 transform duration-300 flex items-center gap-2"
            >
              Explorar Productos
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/register"
              className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all shadow-lg backdrop-blur-sm"
            >
              Crear Cuenta
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Tiendas" },
              { number: "500+", label: "Productos" },
              { number: "1000+", label: "Clientes" },
              { number: "4.8★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-purple-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Huellitas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos la mejor experiencia de compra para ti y tu mascota
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "Múltiples Tiendas",
                desc: "Accede a productos de todas las tiendas locales en un solo lugar",
                color: "purple",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Compras Seguras",
                desc: "Transacciones protegidas con la más alta encriptación",
                color: "green",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Entregas Rápidas",
                desc: "Rutas optimizadas para entregas en tiempo real",
                color: "blue",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`text-${item.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Comprar es muy fácil, solo sigue estos pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Explora",
                desc: "Navega por nuestro catálogo de productos",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Selecciona",
                desc: "Añade productos a tu carrito",
                icon: "🛒",
              },
              {
                step: "3",
                title: "Paga",
                desc: "Realiza tu pago de forma segura",
                icon: "💳",
              },
              {
                step: "4",
                title: "Recibe",
                desc: "Recibe tu pedido en casa",
                icon: "📦",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-purple-200 -z-10"></div>
                )}

                <div className="text-center">
                  <div className="bg-purple-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="bg-purple-100 text-purple-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedidos y Tiendas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gestiona tu negocio
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas poderosas para vendedores y compradores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pedidos Card */}
            <Link href="/pedidos" className="group block"> {/* FIXED: Redirects to /api/pedidos */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Gestión de Pedidos
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Administra todos los pedidos de tu tienda en tiempo real.
                  Actualiza estados, gestiona entregas y mantén a tus clientes
                  informados.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Estados en tiempo real
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Seguimiento
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Notificaciones
                  </span>
                </div>
              </div>
            </Link>

            {/* Tiendas Card */}
            <Link href="/tiendas" className="group block"> {/* FIXED: Changed /admin/tiendas to /tiendas */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Gestión de Tiendas
                </h3>
                <p className="text-purple-100 text-lg mb-6">
                  Administra tu tienda, productos, horarios y toda la
                  información. Mantén tu negocio siempre actualizado y visible
                  para tus clientes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Gestión completa
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Estadísticas
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Multi-tienda
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Únete a nuestra comunidad y descubre todo lo que Huellitas tiene para
            ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-purple-50 transition-all shadow-xl hover:scale-105 transform duration-300"
            >
              Crear Cuenta Gratis
            </Link>
            <Link
              href="/productos"
              className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              Explorar Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Huellitas</h3>
              <p className="text-sm">
                La plataforma líder en accesorios para mascotas en Colombia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/productos" className="hover:text-white transition">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/tiendas" className="hover:text-white transition">
                    Tiendas
                  </Link>
                </li>
                <li>
                  <Link href="/pedidos" className="hover:text-white transition"> {/* FIXED: Redirects to /api/pedidos */}
                    Pedidos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Huellitas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}