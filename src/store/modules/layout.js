const state = {
  layout: "default-layout",
};
const mutations = {
  SET_LAYOUT(state, payload) {
    state.layout = payload;
  },
};
const getters = {
  layout(state) {
    return state.layout;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
