"use client";

import { useEffect, useState } from "react";

export default function CompraExitosaPage() {
  const [pedido, setPedido] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("ultimoPedido");

    if (stored) {
      setPedido(JSON.parse(stored));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Cargando...
      </div>
    );
  }

  if (!pedido) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center p-6">
        <h1 className="text-3xl font-bold mb-4">No hay pedido disponible</h1>
        <p className="text-gray-600">Parece que no has realizado ninguna compra recientemente.</p>

        <a
          href="/productos"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Ir a la tienda
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-green-100 border border-green-300 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-700">¡Compra Exitosa! 🎉</h1>
        <p className="text-lg mt-2 text-green-700">Gracias por tu compra.</p>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Detalles del Pedido</h2>

        <p><strong>ID del Pedido:</strong> {pedido.idPedidos}</p>
        <p><strong>Fecha:</strong> {pedido.fecha}</p>
        <p><strong>Estado:</strong> {pedido.estado}</p>

        <hr className="my-4" />

        <h3 className="text-xl font-bold mb-2">Productos:</h3>

        <div className="space-y-4">
          {pedido.detalles?.map((item: any) => (
            <div key={item.idDetalle} className="border p-4 rounded-lg shadow-sm bg-gray-50">
              <p><strong>Producto:</strong> {item.producto?.nombre}</p>
              <p><strong>Precio:</strong> ${item.precioUnitario}</p>
              <p><strong>Cantidad:</strong> {item.cantidad}</p>
              <p><strong>Subtotal:</strong> ${item.subtotal}</p>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <h3 className="text-xl font-bold">
          Total: <span className="text-green-600">${pedido.total}</span>
        </h3>

        <div className="mt-6 flex justify-center">
          <a
            href="/productos"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Seguir comprando
          </a>
        </div>
      </div>
    </div>
  );
}