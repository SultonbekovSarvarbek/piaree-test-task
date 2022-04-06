<template>
  <div class="create-new-user">
    <h1>Create new user</h1>
    <form @submit.prevent="createNewUserHandle" class="form-group">
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
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          for="password"
          class="form-input"
          v-model="form.password"
          placeholder="password"
        />
      </div>

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
      <router-link to="/users" class="btn btn-primary--dark-outlined"
        >Back</router-link
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NewUserPage",
  data() {
    return {
      form: {
        login: "",
        password: "",
        name: "",
        comment: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["createUser"]),
    async createNewUserHandle() {
      try {
        await this.createUser(this.form);
        alert("User was successfully created");
        this.$router.push("/users");
      } catch (error) {
        alert(error);
        return error;
      }
    },
  },
};
</script>

<style lang="scss">
.create-new-user {
  margin-top: 2rem;
}
</style>
