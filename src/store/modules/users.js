const state = {
  allUsers: [],
};
const mutations = {
  SET_USERS(state, payload) {
    state.allUsers = payload;
  },
};
const actions = {
  async fetchUsers({ commit }) {
    try {
      const res = await this.$api.get("/users");
      commit("SET_USERS", res.data);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async removeUser({ commit }, id) {
    try {
      await this.$api.delete(`/users/${id}`);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async updateUser({ commit }, userForm) {
    try {
      await this.$api.patch(`/users/${userForm.id}`, userForm);
    } catch (error) {
      return error;
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
