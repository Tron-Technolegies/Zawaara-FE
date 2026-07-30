import axios from "axios"

const api = axios.create({
  baseURL: "https://zawara-backend.onrender.com"

});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");

    if (token && !config.url.includes("signup") && !config.url.includes("login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
