<template>
  <div class="app">
    <WassupWorld msg="Wassup!"/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import WassupWorld from './components/WassupWorld.vue'

export default {
  name: 'App',
  components: {
    WassupWorld
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
