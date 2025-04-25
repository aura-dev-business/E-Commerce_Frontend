import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// axiosInstance.interceptors.request.use((config) => {
//   // Inject auth token if needed
//   return config;
// });

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    return Promise.reject(err);
  }
);

export { axiosInstance };