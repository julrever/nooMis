<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" />
    <input type="password" name="password" placeholder="password" v-model="password" />

    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    async register() {
      if (this.email !== '' || this.password !== '') {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
      })
      this.$router.push({ name: 'Users' }) }
      else {
          alert('Empty fields!')
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
