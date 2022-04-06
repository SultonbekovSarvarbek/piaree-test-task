<template>
  <div class="create-new-station">
    <h1>Create new station</h1>
    <form @submit.prevent="createNewStationHandle" class="form-group">
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

      <button class="btn btn-primary" type="submit">Create</button>
      <router-link to="/stations" class="btn btn-primary--dark-outlined"
        >Back</router-link
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NewStationPage",
  data() {
    return {
      form: {
        name: "",
        comment: "",
      },
    };
  },
  methods: {
    ...mapActions("stations", ["createStation"]),
    async createNewStationHandle() {
      try {
        await this.createStation(this.form);
        alert("Station was successfully created");
        this.$router.push("/stations");
      } catch (error) {
        alert("Error");
        return error;
      }
    },
  },
};
</script>

<style lang="scss">
.create-new-station {
  margin-top: 2rem;
}
</style>
