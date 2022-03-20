<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
  <ul>
    <li><router-link to="/">home</router-link></li>
    <li>
      <router-link v-if="!this.$store.state.userInfo.isLogin" to="/login">login</router-link>
      <button v-else @click="logout">logout</button>
    </li>
    <li><router-link to="/sign">sign</router-link></li>
    <li><router-link to="/admin">admin</router-link></li>
  </ul>
</template>

<script>
import axios from 'axios'
import { mapMutations } from "vuex"

export default {
  name: 'App',
  created() {
    if(localStorage.getItem("vuex")) {
      const form = new FormData()
      const token = JSON.parse(localStorage.getItem("vuex")).userInfo.userToken
      form.append("token", token)

      axios.post('/valid/token', form)
        .then(res => {
          console.log(res)
          if(res.data.isLogin) {
            this.setIsLogin(true)
          }
        })
    }
  },
  methods: {
    ...mapMutations({
      setIsLogin: 'userInfo/setIsLogin',
      userLogout: 'userInfo/logout'
    }),
    logout() {
      this.userLogout()
    },
  }
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
