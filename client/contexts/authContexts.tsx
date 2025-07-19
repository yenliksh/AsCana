// src/contexts/authContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem("token");
      setToken(savedToken);
      setIsLoading(false);
    };
    loadToken();
  }, []);

  const login = async (newToken: string) => {
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  const value: AuthContextType = {
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return isLoading ? null : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
