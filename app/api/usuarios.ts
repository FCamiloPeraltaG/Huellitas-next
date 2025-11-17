import { apiClient } from "./cliente";

export const UsuariosAPI = {
  registrar: (data: any) =>
    apiClient("/usuarios/registro", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: async (data: any) => {
    const res = await apiClient("/usuarios/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // guardar token automáticamente
    if (typeof window !== "undefined" && res.token) {
      localStorage.setItem("token", res.token);
    }

    return res;
  },

  obtenerPorId: (id: number) => apiClient(`/usuarios/${id}`),
};