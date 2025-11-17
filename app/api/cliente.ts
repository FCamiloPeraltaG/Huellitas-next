const API_URL = "http://localhost:8080";

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const config = { ...options, headers };

  const res = await fetch(`${API_URL}${endpoint}`, config);

  if (!res.ok) {
    let message = `Error: ${res.status}`;
    try {
      const data = await res.json();
      message = data.message || message;
    } catch (_) {}

    throw new Error(message);
  }

  return res.json();
}