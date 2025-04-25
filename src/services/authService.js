import { axiosInstance } from "../services/axios";

export const login = (data) => axiosInstance.post("/auth/login", data);
export const register = (data) => axiosInstance.post("/auth/signup", data);
export const logout = () => axiosInstance.post("/auth/logout");
export const getProfile = () => axiosInstance.get("/auth/check");