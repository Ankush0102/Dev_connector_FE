import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiRequest.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default apiRequest;
