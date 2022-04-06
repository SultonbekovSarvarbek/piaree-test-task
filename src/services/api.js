import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/auth";
const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});
// request interceptor
api.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      const token = getToken();
      config.headers["user-jwt"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
