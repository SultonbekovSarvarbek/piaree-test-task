import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/index"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile/index"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users/index"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import("@/views/users/_id"),
  },
  {
    path: "/create-new-user",
    name: "new-user",
    component: () => import("@/views/users/new"),
  },
  {
    path: "/stations",
    name: "stations",
    component: () => import("@/views/stations/index"),
  },
  {
    path: "/stations/:id",
    name: "station",
    component: () => import("@/views/stations/_id"),
  },
  {
    path: "/create-new-station",
    name: "new-station",
    component: () => import("@/views/stations/new"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
