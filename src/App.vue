<template>
  <div id="app">
    <img class="logo" src="@/assets/images/logo.svg" alt="PSETools">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.logo {
  display: block;
  width: 200px;
  margin: 0 auto 1rem;
}
</style>
