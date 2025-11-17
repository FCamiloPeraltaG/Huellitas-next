"use client";

import { useEffect, useState } from "react";
import PedidoCard from "../components/PedidoCard";

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState([]);

  const cargarPedidos = async () => {
    try {
      const res = await fetch("http://localhost:8080/pedidos");
      if (!res.ok) throw new Error("Error al obtener pedidos");
      const data = await res.json();
      setPedidos(data);
    } catch (error) {
      console.error("Error cargando pedidos:", error);
    }
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pedidos.map((p: any) => (
        <PedidoCard key={p.id_pedidos} pedido={p} />
      ))}
    </div>
  );
}
