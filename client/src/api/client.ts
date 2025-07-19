// src/api/client.ts
const API_URL = "http://192.168.0.103:3000";

export const api = async <T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || "API error");
  }

  return res.json();
};
