const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function apiClient<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const isBrowser = typeof window !== "undefined";

  const token = isBrowser ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),

    ...options.headers,
  };

  const config: RequestInit = {
    ...options,
    headers,
    cache: "no-store",
  };

  const res = await fetch(`${API_URL}${endpoint}`, config);

  if (!res.ok) {
    let message = `Error: ${res.status} ${res.statusText}`;
    try {
      const errorBody = await res.json();
      message = errorBody.message || errorBody.error || message;
    } catch {
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}