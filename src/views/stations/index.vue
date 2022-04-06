<template>
  <div class="stations-page">
    <div class="create-station">
      <button class="btn btn-info" @click="$router.push('/create-new-station')">
        Create station
      </button>
    </div>
    <div class="stations-wrapper">
      <div
        class="station-card"
        v-for="station in allStations"
        :key="station.id"
      >
        <p>Name: {{ station.name }}</p>
        <p>Comment: {{ station.comment }}</p>
        <div class="station-card__bottom">
          <button class="btn btn-danger" @click="removeStationHandle(station)">
            Delete
          </button>
          <button class="btn btn-info" @click="editStationHandle(station.id)">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "StationsPage",
  async created() {
    await this.fetchStations();
  },
  computed: {
    ...mapState("stations", ["allStations"]),
  },
  methods: {
    ...mapActions("stations", ["fetchStations", "removeStation"]),
    async removeStationHandle(station) {
      if (
        confirm(
          `Are you sure you want to delete this station (${station.name}) ?`
        )
      ) {
        await this.removeStation(station.id);
        await this.fetchStations();
      }
    },
    editStationHandle(stationId) {
      this.$router.push(`/stations/${stationId}`);
    },
  },
};
</script>
<style lang="scss">
.stations {
  &-page {
    margin-top: 2rem;
  }
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.create-station {
  padding-bottom: 2rem;
}
.station {
  &-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #33333326;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: rgb(50 134 255 / 24%) 0px 4px 6px -1px,
      rgb(255 255 255 / 0%) 0px 2px 4px -1px;
  }
  &-card__bottom {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
