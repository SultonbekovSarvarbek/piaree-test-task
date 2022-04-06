import { getToken, setToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken(),
  userInfo: {},
  isAuthenticated: false,
};
const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
    state.isAuthenticated = true;
  },
  RESET_USER(state) {
    state.userInfo = {};
    state.isAuthenticated = false;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
    state.isAuthenticated = true;
  },
};
const actions = {
  async login({ commit }, userInfo) {
    try {
      const res = await this.$api.post("/users/auth", userInfo);
      const { user_jwt } = res.data;
      setToken(user_jwt);
      commit("SET_TOKEN", user_jwt);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  async getInfo({ commit }) {
    try {
      const res = await this.$api.get("/users/me");
      commit("SET_USER_INFO", res.data);
      return res;
    } catch (error) {
      removeToken(); // must remove  token  first
      commit("RESET_USER");
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async createUser({ commit }, newUserForm) {
    try {
      await this.$api.post("/users", newUserForm);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  logout({ commit }) {
    removeToken(); // must remove  token  first
    commit("RESET_USER");
  },
  resetToken({ commit }) {
    removeToken(); // must remove  token  first
    commit("RESET_USER");
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
