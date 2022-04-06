const state = {
  allStations: [],
};
const mutations = {
  SET_STATIONS(state, payload) {
    state.allStations = payload;
  },
};
const actions = {
  async fetchStations({ commit }) {
    try {
      const res = await this.$api.get("/stations");
      commit("SET_STATIONS", res.data);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async removeStation({ commit }, id) {
    try {
      await this.$api.delete(`/stations/${id}`);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async updateStation({ commit }, stationForm) {
    try {
      await this.$api.patch(`/stations/${stationForm.id}`, stationForm);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  // eslint-disable-next-line no-unused-vars
  async createStation({ commit }, newStationForm) {
    try {
      await this.$api.post("/stations", newStationForm);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
