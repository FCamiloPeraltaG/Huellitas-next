"use client";

import { useEffect, useState } from "react";
import TiendaCard from "./TiendaCard";

export default function TiendasPage() {
  const [tiendas, setTiendas] = useState([]);

  const cargarTiendas = async () => {
    const res = await fetch("http://localhost:8080/tiendas/Listar");
    const data = await res.json();
    setTiendas(data);
  };

  useEffect(() => {
    cargarTiendas();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tiendas.map((p: any) => (
        <TiendaCard key={p.id_tienda} tienda={p} />
      ))}
    </div>
  );
}