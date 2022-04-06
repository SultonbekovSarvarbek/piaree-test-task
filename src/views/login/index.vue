<template>
  <div class="login-card">
    <h2 class="login-card__heading">Piar</h2>
    <h2 class="login-card__card-name">Login</h2>
    <form @submit.prevent="loginHandle" class="form-group">
      <div
        class="form-item"
        :class="{ 'form-item--error': $v.form.login.$error }"
      >
        <label for="login" class="form-label">Login</label>
        <input
          type="text"
          id="login"
          class="form-input"
          v-model.trim="$v.form.login.$model"
          placeholder="login"
        />

        <div
          class="error"
          v-if="!$v.form.login.required && $v.form.login.$dirty"
        >
          Field is required
        </div>
      </div>
      <div
        class="form-item"
        :class="{ 'form-item--error': $v.form.password.$error }"
      >
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          for="password"
          class="form-input"
          v-model.trim="$v.form.password.$model"
          placeholder="password"
        />
        <div
          class="error"
          v-if="!$v.form.password.required && $v.form.password.$dirty"
        >
          Field is required
        </div>
      </div>
      <p>Don’t have a account?</p>
      <router-link to="/register" class="btn btn-primary--dark-outlined"
        >Create account</router-link
      >
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "Login",
  layout: "empty",
  data() {
    return {
      loading: false,
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async loginHandle() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.login(this.form).then(() => {
            this.$router.push("/");
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
      login: {
        required,
      },
      password: {
        required,
      },
    },
  },
};
</script>
