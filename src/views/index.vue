<template>
  <div class="container">
    <div class="main-page">
      <h1 class="main-page__heading">Welcome</h1>

      <div class="welcome-block">
        <p>Some information about this app</p>
        <p>You can create, edit and delete - users and stations</p>
        <p>ENJOY!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss">
.main-page {
  margin-top: 2rem;
  &__heading {
    font-weight: 700;
    margin-bottom: 1rem;
  }
}
.welcome-block {
  background: #cfe2ff;
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  gap: 10px;
}
</style>
