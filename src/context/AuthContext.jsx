// src/store/AuthContext.jsx
import { create } from "zustand";
import { login, register, logout, getProfile } from "../services/authService";

export const AuthContext = create((set) => ({
  isLoggingIn: false,
  isSigningUp: false,
  user: null,

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await login(data);
      set({ user: response.data });
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const response = await register(data);
      set({ user: response.data });
    } catch (err) {
      console.error("Signup failed", err);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await logout();
      set({ user: null });
    } catch (err) {
      console.error("Logout failed", err);
    }
  },

  fetchProfile: async () => {
    try {
      const response = await getProfile();
      set({ user: response.data });
    } catch (err) {
      console.error("Fetch profile failed", err);
    }
  },
}));