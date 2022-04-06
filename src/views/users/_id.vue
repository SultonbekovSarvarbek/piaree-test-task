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
        <div class="form-item">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-input"
            v-model="form.password"
            placeholder="password"
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
          <button
            class="btn btn-primary--dark-outlined"
            @click="$router.push('/users')"
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
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
        password: "",
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.form.password) {
          delete this.form["password"];
        }
        try {
          await this.updateUser(this.form);
          this.$router.push("/users");
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
      name: {
        required,
      },
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
    .btn-primary--dark-outlined {
      margin-top: 1rem;
    }
  }
}
</style>
