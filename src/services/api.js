import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/auth";
const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});
api.defaults.showLoader = true;
// request interceptor
api.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      const token = getToken();
      config.headers["user-jwt"] = token;
    }
    if (config.showLoader) {
      store.dispatch("loader/pending");
    }
    return config;
  },
  (error) => {
    if (error.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);
// response interceptor
api.interceptors.response.use(
  (response) => {
    if (response.config.showLoader) {
      store.dispatch("loader/done");
    }
    return response;
  },
  (error) => {
    let response = error.response;
    console.log(response.data.error);
    if (response.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);

export default api;
