import axios from "axios"

const api = axios.create({
  baseURL: "https://zawara-backend-23bb.onrender.com"
  // baseURL:"http://127.0.0.1:8000/"

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
