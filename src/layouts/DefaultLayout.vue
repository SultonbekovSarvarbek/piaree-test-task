<template>
  <div class="default-layout">
    <app-header />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "DefaultLayout",
};
</script>
