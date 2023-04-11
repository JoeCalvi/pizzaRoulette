<template>
  <nav class="navbar elevation-3 bg-danger px-3 d-flex justify-content-end align-items-center">
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

<style scoped></style>
