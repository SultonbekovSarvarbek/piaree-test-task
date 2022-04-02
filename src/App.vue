<template>
  <div id="app" class="default-layout">
    <app-header />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
