<template>
  <div class="container">
    <div class="profile-page">
      <h1 class="profile-page__heading">Profile Info</h1>
      <p>Name: {{ userInfo.name }}</p>
      <p>Comment: {{ userInfo.comment }}</p>

      <button class="btn btn-primary logout" @click="logoutHandle">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProfilPage",
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    logoutHandle() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
.profile-page {
  &__heading {
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .logout {
    display: none;
    margin-top: 1rem;
    @media (max-width: 576px) {
      display: block;
    }
  }
}
</style>
