<template>
  <div class="register-card">
    <h2 class="register-card__heading">Piar</h2>
    <h2 class="register-card__card-name">Register Account</h2>
    <form @submit.prevent="registerHandle" class="form-group">
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

      <button class="btn btn-primary" type="submit">Register</button>
      <router-link to="/login" class="btn btn-primary--dark-outlined"
        >Login</router-link
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterPage",
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
    ...mapActions("user", ["createUser", "login"]),
    async registerHandle() {
      await this.createUser(this.form).then(() => {
        alert(
          "Thank you for your registration. You have successfully registered"
        );
        this.$router.push("/login");
      });
    },
  },
};
</script>
