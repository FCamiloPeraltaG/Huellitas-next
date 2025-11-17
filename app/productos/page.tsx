"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  tienda: string;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:8080/productos", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!res.ok) throw new Error("Error al cargar productos");

        const data = await res.json();
        setProductos(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los productos. Intenta más tarde.",
          confirmButtonColor: "#ef4444",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-purple-600">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-4">
          Catálogo de Productos
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explora accesorios de calidad para tu mascota, traídos directamente desde nuestras tiendas asociadas.
        </p>

        {productos.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No hay productos disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Imagen del producto</span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-purple-700 line-clamp-1">
                    {producto.nombre}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Tienda: {producto.tienda}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {producto.descripcion || "Sin descripción"}
                  </p>
                  <p className="text-2xl font-bold text-pink-600 mt-3">
                    ${producto.precio.toLocaleString("es-CO")}
                  </p>

                  <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}