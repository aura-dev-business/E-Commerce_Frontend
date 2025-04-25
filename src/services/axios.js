const SPRING_API_URL = import.meta.env.SPRING_API_URL || "http://localhost:8080";

import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: `${SPRING_API_URL}/api`,
  withCredentials: true,
});