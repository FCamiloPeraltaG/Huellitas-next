"use client";

import { useCart } from "../context/CartContext";

export default function CarritoPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mi Carrito 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.idProducto}
              className="flex items-center gap-4 border p-4 rounded-lg mb-4 bg-white shadow"
            >
              {/* IMAGEN */}
              <img
                src={item.imageneUrl}
                alt={item.nombre}
                className="w-24 h-24 object-cover rounded"
              />

              {/* INFO */}
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.nombre}</h2>
                <p className="text-gray-600">
                  Precio: <span className="font-semibold">${item.precio}</span>
                </p>

                {/* CANTIDAD */}
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => decreaseQuantity(item.idProducto)}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.cantidad}</span>
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => increaseQuantity(item.idProducto)}
                  >
                    +
                  </button>
                </div>

                <p className="mt-2 font-semibold">
                  Subtotal: ${item.precio * item.cantidad}
                </p>
              </div>

              {/* ELIMINAR */}
              <button
                className="text-red-500 font-semibold hover:underline"
                onClick={() => removeFromCart(item.idProducto)}
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="text-2xl font-bold mt-4">
            Total: <span className="text-green-600">${total}</span>
          </h2>

          {/* ACCIONES */}
          <button
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-green-700"
            onClick={() => alert("Acá luego conectamos la compra 😎")}
          >
            Finalizar compra
          </button>

          <button
            className="mt-3 bg-gray-500 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-gray-600"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}