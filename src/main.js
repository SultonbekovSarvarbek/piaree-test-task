import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import Vuelidate from "vuelidate";

import api from "./services/api";
import "./validToken";

import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

Vue.use(Vuelidate);
Vue.component("default-layout", DefaultLayout);
Vue.component("auth-layout", AuthLayout);

// Importing the global scss file
import "@/assets/scss/main.scss";
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  store,
  render: (h) => h(App),
}).$mount("#app");
