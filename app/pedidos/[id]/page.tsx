"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type PedidoDetail = {
  id_pedidos: number;
  estado?: string;
  fecha?: string;
  total?: number;
  envio_id?: number | null;
  id_tienda?: number | null;
  id_usuario?: number | null;
};

export default function PedidoDetallePage() {
  const { id } = useParams();
  const [pedido, setPedido] = useState<PedidoDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cargarPedido = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:8080/pedidos/${id}`);

      if (res.status === 404) {
        setPedido(null);
        setError("Pedido no encontrado");
        return;
      }

      if (!res.ok) {
        const txt = await res.text();
        console.error("Error cargando pedido:", res.status, txt);
        setError(`Error al cargar pedido (${res.status})`);
        return;
      }

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      setPedido(data);
    } catch (e: any) {
      console.error("Excepción al cargar pedido:", e);
      setError("Error de conexión al backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) cargarPedido();
  }, [id]);

  if (loading) return <p className="p-6">Cargando pedido...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!pedido) return <p className="p-6 text-gray-600">Pedido no encontrado</p>;

  const fechaTexto = pedido.fecha ? new Date(pedido.fecha).toLocaleDateString("es-CO") : "-";
  const estado = (pedido.estado || "PENDIENTE").toUpperCase();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Pedido #{pedido.id_pedidos}</h1>
          <p className="text-sm text-gray-500">{fechaTexto}</p>
        </div>
        <div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              estado === "ENTREGADO"
                ? "bg-green-100 text-green-800"
                : estado === "EN_CAMINO"
                ? "bg-blue-100 text-blue-800"
                : estado === "PENDIENTE"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {estado.replace("_", " ")}
          </span>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm p-4 bg-white space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-bold text-purple-600">${pedido.total?.toLocaleString("es-CO") ?? "0"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div>
            <h4 className="text-sm text-gray-500">Tienda</h4>
            <p className="text-sm text-gray-700">{pedido.id_tienda ?? "-"}</p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Usuario</h4>
            <p className="text-sm text-gray-700">{pedido.id_usuario ?? "-"}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-500">Envío</h4>
          <p className="text-sm text-gray-700">{pedido.envio_id ?? "Sin info"}</p>
        </div>

     

        <div className="pt-4 flex gap-2">
          <Link
            href="/pedidos"
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
          >
            Volver
          </Link>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
}
