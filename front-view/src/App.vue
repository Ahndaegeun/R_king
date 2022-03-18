<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
  <ul>
    <li><router-link to="/">home</router-link></li>
    <li><router-link to="/login">login</router-link></li>
    <li><router-link to="/sign">sign</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  display: flex;
  border: 1px solid red;
  justify-content: space-around;
}
</style>
