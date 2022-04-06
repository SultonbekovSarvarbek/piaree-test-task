<template>
  <div class="edit-user">
    <h1>Update User</h1>
    <div v-if="loading">Loading</div>
    <div v-else>
      <form class="edit-user__form" @submit.prevent="updateUserHandle">
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
          <label for="login" class="form-label">Login</label>
          <input
            type="text"
            id="login"
            class="form-input"
            v-model="form.login"
            placeholder="login"
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
        <div class="edit-user__bottom">
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
        login: "",
        name: "",
        comment: "",
      },
    };
  },
  async created() {
    await this.fetchUser(this.userId);
  },
  methods: {
    ...mapActions("users", ["updateUser"]),
    async fetchUser(userId) {
      try {
        const res = await this.$api.get(`/users/${userId}`);
        this.userInfo = res.data;
        this.form = res.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        return error;
      }
    },
    async updateUserHandle() {
      await this.updateUser(this.form);
      this.$router.push("/users");
    },
  },
};
</script>

<style lang="scss">
.edit-user {
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
