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

export default {
  name: 'HelloWorld',
  data() {
    return {
      userId: '',
      userPw: ''
    }
  },
  methods: {
    onLogin() {
      try {
        const form = new FormData()
        form.append("userId", this.userId)
        form.append("userPw", this.userPw)

        axios.post('/member/login', form)
        .then(res => {
          console.log(res)
        })

      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
