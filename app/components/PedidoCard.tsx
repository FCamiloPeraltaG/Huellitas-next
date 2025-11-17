import Link from "next/link";

export default function PedidoCard({ pedido }: { pedido: any }) {
  const estado = pedido.estado || "PENDIENTE";

  const estadoColor: Record<string, string> = {
    PENDIENTE: "bg-yellow-100 text-yellow-800",
    EN_CAMINO: "bg-blue-100 text-blue-800",
    ENTREGADO: "bg-green-100 text-green-800"
  };

  const color = estadoColor[estado] || "bg-gray-100 text-gray-600";

  return (
    <Link href={`/pedidos/${pedido.id_pedidos}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">Pedido #{pedido.id_pedidos}</h3>
            <p className="text-gray-600">
              {new Date(pedido.fecha).toLocaleDateString("es-CO")}
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${color}`}
          >
            {estado.replace("_", " ")}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-2xl font-bold text-purple-600">
            ${pedido.total?.toLocaleString("es-CO")}
          </p>
          <span className="text-purple-600 font-medium">Ver seguimiento →</span>
        </div>
      </div>
    </Link>
  );
}
