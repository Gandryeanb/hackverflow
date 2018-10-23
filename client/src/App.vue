<template>
  <div id="app">
    <NavBarTop/>
    <router-view style="margin-top:70px;"/>
  </div>
</template>

<script>
import NavBarTop from '@/components/NavBarTop'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.getCurrentUser()
    }
  },
  methods: {
    ...mapActions(['getCurrentUser'])
  },
  components: {
    NavBarTop
  }
}
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
