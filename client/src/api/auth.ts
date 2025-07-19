// src/api/auth.ts
import { api } from "./client";

export const register = (data: {
  fullName: string;
  email: string;
  password: string;
  role: string;
}) => {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const login = (email: string, password: string) => {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
