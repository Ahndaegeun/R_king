<template>
  <div class="hello">
    <h1>Login</h1>
    <div>
      <label>
        ID:
        <input type="text" v-model="userId">
      </label>
      <label>
        PW:
        <input type="password" v-model="userPw">
      </label>
      <button type="button" @click="onLogin">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      userPw: ''
    }
  },
  methods: {
    ...mapMutations({
      setUserToken: 'userInfo/setUserToken',
      setIsLogin: 'userInfo/setIsLogin'
    }),
    onLogin() {
        const form = new FormData()
        form.append("userId", this.userId)
        form.append("userPw", this.userPw)

        axios.post('/member/login', form)
        .then(res => {
          const token = res.data.token
          this.setUserToken(token)
          this.setIsLogin(true)
        })
    }
  }
}
</script>

<style scoped>

</style>
