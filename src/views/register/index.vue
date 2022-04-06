<template>
  <div class="register-card">
    <h2 class="register-card__heading">Piar</h2>
    <h2 class="register-card__card-name">Register Account</h2>
    <form @submit.prevent="registerHandle" class="form-group">
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

        <div class="error" v-if="!$v.form.name.required && $v.form.name.$dirty">
          Field is required
        </div>
      </div>

      <div
        class="form-item"
        :class="{ 'form-item--error': $v.form.comment.$error }"
      >
        <label for="comment" class="form-label">Comment</label>
        <textarea
          type="text"
          id="comment"
          class="form-textarea"
          v-model.trim="$v.form.comment.$model"
          placeholder="comment"
        />
        <div
          class="error"
          v-if="!$v.form.comment.required && $v.form.comment.$dirty"
        >
          Field is required
        </div>
      </div>

      <button class="btn btn-primary" type="submit">Register</button>
      <router-link to="/login" class="btn btn-primary--dark-outlined"
        >Login</router-link
      >
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.createUser(this.form).then(() => {
          alert(
            "Thank you for your registration. You have successfully registered"
          );
          this.$router.push("/login");
        });
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
      name: {
        required,
      },
      comment: {
        required,
      },
    },
  },
};
</script>
