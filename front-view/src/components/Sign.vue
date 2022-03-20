<template>
  <div>
    id: <input type="text" v-model="memId"><br/>
    pw: <input type="password" v-model="memPw"><br/>
    name: <input type="text" v-model="memNm"><br/>
    email: <input type="email" v-model="memEmail"><br/>
    age: <input type="text" v-model="memAge"><br/>
    <button @click="onSign">sign</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Sign",
  data() {
    return {
      memId: '',
      memPw: '',
      memNm: '',
      memEmail: '',
      memAge: ''
    }
  },
  methods: {
    onSign() {

      const form = new FormData()
      form.append("memId", this.memId)
      form.append("memPw", this.memPw)
      form.append("memNm", this.memNm)
      form.append("memEmail", this.memEmail)
      form.append("age", this.memAge)

      axios.post('/member/sign', form)
        .then(res => {
          console.log(res)
          this.$router.push({path:"/login"})
        })
    }
  }
}
</script>

<style scoped>

</style>