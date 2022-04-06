<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/stations">Stations</router-link></li>
        </ul>
        <div class="nav-left">
          <div class="user-name">Welcome, {{ userInfo.name }}</div>
          <span>
            <button class="btn btn-primary" @click="logoutHandle">
              Logout
            </button>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
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
.nav {
  color: #fff;
  background: #1e88e5;
  text-transform: uppercase;
  &-wrapper {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-links {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &-links li:hover a {
    color: #333;
  }
  &-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 576px) {
      display: none;
    }
  }
  .user-name {
    color: #fff;
    font-weight: 700;
  }
}
</style>
