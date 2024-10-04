import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://wms-be.staging.bahteraadijaya.com/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
