<template>
  <div class="edit-station">
    <h1>Update Station</h1>
    <div v-if="loading">Loading</div>
    <div v-else>
      <form class="edit-station__form" @submit.prevent="updateStationHandle">
        <div class="form-item">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-input"
            v-model="form.name"
            placeholder="name"
          />
        </div>
        <div class="form-item">
          <label for="comment" class="form-label">Comment</label>
          <textarea
            type="text"
            id="comment"
            class="form-textarea"
            v-model="form.comment"
            placeholder="comment"
          />
        </div>
        <div class="edit-station__bottom">
          <button class="btn btn-info" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserPage",
  data() {
    return {
      userId: this.$route.params.id,
      userInfo: {},
      loading: true,
      form: {
        name: "",
        comment: "",
      },
    };
  },
  async created() {
    await this.fetchStations(this.userId);
  },
  methods: {
    ...mapActions("stations", ["updateStation"]),
    async fetchStations(userId) {
      try {
        const res = await this.$api.get(`/stations/${userId}`);
        this.userInfo = res.data;
        this.form = res.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        return error;
      }
    },
    async updateStationHandle() {
      await this.updateStation(this.form);
      this.$router.push("/stations");
    },
  },
};
</script>

<style lang="scss">
.edit-station {
  margin-top: 2rem;
  &__form {
    display: grid;
    gap: 1.5rem;
  }
  &__bottom {
    margin-top: 1rem;
  }
}
</style>
