<template>
  <div class="ui centered grid">
    <div class="ui seven wide column" style="margin-top: 100px;">
      <h2 style="color: teal">Register</h2>
      <div class="ui segment form">
        <div class="ui two fields">
          <div class="ui field required">
            <label>First Name:</label>
            <input type="text" placeholder="First name" v-model="fnameForm">
          </div>
          <div class="ui field">
            <label>Last Name:</label>
            <input type="text" placeholder="Last name" v-model="lnameForm">
          </div>
        </div>
        <div class="ui three fields">
          <div class="ui field required">
            <label>Email: </label>
            <div class="ui icon input">
              <i class="ui mail icon"></i>
              <input type="text" placeholder="Email" v-model="emailForm">
            </div>
          </div>
          <div class="ui field required">
            <label>Password: </label>
            <div class="ui icon input">
              <i class="ui lock icon"></i>
              <input type="password" placeholder="Password" v-model="pass1Form">
            </div>
          </div>
          <div class="ui field required">
            <label>Password: </label>
            <div class="ui icon input">
              <i class="ui lock icon"></i>
              <input type="password" placeholder="Password" v-model="pass2Form">
            </div>
          </div>
        </div>
        <div class="ui field" style="margin-top: 20px;">
          <button class="ui teal small fluid button" @click="register">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '@/assets/config'
import { mapState } from 'vuex'

const { host } = config

export default {
  name: 'Register',
  data() {
    return {
      fnameForm: '',
      lnameForm: '',
      emailForm: '',
      pass1Form: '',
      pass2Form: ''
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    register() {
      if (this.pass1Form === this.pass2Form && this.pass1Form !== '') {
        axios({
          url: host + '/users/register',
          method: 'post',
          data: {
            fname: this.fnameForm,
            lname: this.lnameForm,
            email: this.emailForm,
            password: this.pass1Form
          }
        })
          .then(data => {
            console.log(data.data)
          })
          .catch(err => {
            console.log(err.response)
          })
      } else {
        console.log(`your password did'nt match`)
      }
    }
  }
}
</script>

<style>

</style>
