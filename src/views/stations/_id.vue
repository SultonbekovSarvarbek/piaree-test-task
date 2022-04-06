<template>
  <div class="edit-station">
    <h1>Update Station</h1>
    <div v-if="loading">Loading</div>
    <div v-else>
      <form class="edit-station__form" @submit.prevent="updateStationHandle">
        <div
          class="form-item"
          :class="{ 'form-item--error': $v.form.name.$error }"
        >
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-input"
            v-model.trim="$v.form.name.$model"
            placeholder="name"
          />
          <div
            class="error"
            v-if="!$v.form.name.required && $v.form.name.$dirty"
          >
            Field is required
          </div>
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
          <button
            class="btn btn-primary--dark-outlined"
            @click="$router.push('/stations')"
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.updateStation(this.form).then(() => {
            this.$router.push("/stations");
          });
        } catch (error) {
          alert(error);
          return error;
        }
      }
    },
  },
  validations: {
    form: {
      name: {
        required,
      },
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
    .btn-primary--dark-outlined {
      margin-top: 1rem;
    }
  }
}
</style>
