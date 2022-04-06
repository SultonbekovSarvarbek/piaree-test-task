<template>
  <div class="auth-wrapper">
    <transition name="fade">
      <loader v-if="loading" />
    </transition>
    <slot />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "../components/loader.vue";
export default {
  components: { Loader },
  name: "AuthLayout",
  computed: {
    ...mapState("loader", ["loading"]),
  },
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #004d40, #00bfa5);
}
</style>
