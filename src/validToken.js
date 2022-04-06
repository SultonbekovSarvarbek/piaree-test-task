/* eslint-disable no-prototype-builtins */
import router from "./router";
import store from "./store";
import { getToken } from "@/utils/auth";
const whiteList = ["/login", "/register"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  const userInfo = store.state.user.userInfo;
  const isAuthenticated = store.state.user.isAuthenticated;
  const hasFullInfo = isAuthenticated && Object.keys(userInfo).length > 0;
  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
    }
    if (to.path === "/register") {
      next({ path: "/" });
    }

    if (hasFullInfo) {
      next();
    } else {
      try {
        await store.dispatch("user/getInfo");
        next({ ...to, replace: true });
      } catch (error) {
        store.dispatch("user/resetToken");
        next("/login");
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1 || to.name === "register") {
      // in the free login whitelist, go directly
      next();
    } else {
      next("/login");
    }
  }
});
