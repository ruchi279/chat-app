import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatify-44zc.onrender.com/api" : "/api",
  withCredentials: true,
});
