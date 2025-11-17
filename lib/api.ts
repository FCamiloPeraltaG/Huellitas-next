// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

export const api = {
  async get<T>(url: string, auth = true): Promise<T> {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (auth) {
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${url}`, { headers });
    if (!res.ok) throw new Error(`Error ${res.status}`);

    const text = await res.text();
    return (text ? JSON.parse(text) : null) as T;
  },

  async post<T>(url: string, data?: any, auth = true): Promise<T> {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (auth) {
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!res.ok) throw new Error(`Error ${res.status}`);

    const text = await res.text();
    return (text ? JSON.parse(text) : null) as T;
  },

  async put<T>(url: string, data: any, auth = true): Promise<T> {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (auth) {
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${url}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`Error ${res.status}`);
    const text = await res.text();
    return (text ? JSON.parse(text) : null) as T;
  },

  async delete<T>(url: string, auth = true): Promise<T> {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (auth) {
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${url}`, { method: "DELETE", headers });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    const text = await res.text();
    return (text ? JSON.parse(text) : null) as T;
  },
};