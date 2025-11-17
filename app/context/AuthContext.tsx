"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../../lib/api";     
import { Usuario } from "../../types/index";    

interface AuthContextType {
  user: Usuario | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const perfil = await api.get<Usuario>("/usuarios/perfil");
        setUser(perfil);
      } catch (error) {
        console.error("Error cargando perfil:", error);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await api.post<{ token: string }>("/auth/login", { email, password }, false);
      localStorage.setItem("token", data.token);
      const perfil = await api.get<Usuario>("/usuarios/perfil");
      setUser(perfil);
    } catch (error) {
      throw new Error("Credenciales inválidas");
    }
  };

  const register = async (data: any) => {
    await api.post("/auth/register", data, false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};