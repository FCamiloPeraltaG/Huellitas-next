export default function Carrito() {
  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Carrito de Compras</h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        <div className="mt-6 text-center">
          <a href="/productos" className="text-purple-600 hover:underline font-medium">Continuar comprando</a>
        </div>
      </div>
    </div>
  );
}