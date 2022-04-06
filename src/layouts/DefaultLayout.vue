<template>
  <div class="default-layout">
    <transition name="fade"> <loader v-if="loading" /> </transition>
    <app-header />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import Loader from "../components/loader.vue";
export default {
  components: { AppHeader, Loader },
  name: "DefaultLayout",
  computed: {
    ...mapState("loader", ["loading"]),
  },
};
</script>
