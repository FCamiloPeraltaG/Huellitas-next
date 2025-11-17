import { apiClient } from "./cliente";

export const ProductosAPI = {
  listar: () => apiClient("/productos"),

  buscarPorCategoria: (categoria: string) =>
    apiClient(`/productos/categoria/${categoria}`),

  buscarPorNombre: (nombre: string) =>
    apiClient(`/productos/filtrar/${nombre}`),
};