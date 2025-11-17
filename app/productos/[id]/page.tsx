"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState<any>(null);

  const cargarProducto = async () => {
    const res = await fetch(`http://localhost:8080/productos/${id}`);
    const data = await res.json();
    setProducto(data);
  };

  const agregarCarrito = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const existe = carrito.find((p: any) => p.idProducto === producto.idProducto);

    if (existe) {
      existe.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
  };

  useEffect(() => {
    cargarProducto();
  }, []);

  if (!producto) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={producto.imageneUrl}
        className="w-full h-80 object-cover rounded-lg shadow"
      />

      <h1 className="text-3xl font-bold mt-4">{producto.nombre}</h1>
      <p className="text-gray-700 mt-2">{producto.descripcion}</p>
      <p className="text-purple-700 text-2xl font-bold mt-4">
        ${producto.precio}
      </p>

      <button
        onClick={agregarCarrito}
        className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}