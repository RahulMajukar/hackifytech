"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (email) => setUser({ email: email || "user@example.com" });
  const signOut = () => setUser(null);
  const refreshProfile = () => {};

  return (
    <AuthContext.Provider value={{
      user,
      profile: null,
      role: null,
      loading: false,
      profileLoading: false,
      profileComplete: false,
      signIn,
      signOut,
      refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
