<template>
  <nav class="navbar elevation-3 bg-danger px-3 d-flex justify-content-between align-items-center">
    <router-link :to="{ name: 'Home' }">
      <span class="btn selectable text-white text-uppercase my-2 my-lg-0 login-word">Home</span>
    </router-link>
    <Login />
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.login-word {
  text-shadow: 1px 2px 2px black;
}
</style>
