<template>
  <div id="app">
    <h1>NHL</h1>
    <hr />
    <router-link to="/Search">Search Player * </router-link>
    <router-link to="/SwedishPlayersOnly">Swedish Players * </router-link>
    <router-link to="/DatabasePage">Database Page</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
