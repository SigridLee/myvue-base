<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
@import "./assets/css/main.scss";
#app {
  height: 100%;
}
body {
  background-color: #fff;
}
</style>
