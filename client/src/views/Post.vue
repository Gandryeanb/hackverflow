<template>
  <div class="ui centered grid">
    <div class="ui two wide column">
      <div class="ui segment">

      </div>
    </div>
    <div class="ui seven wide column">
      <router-view @reload="getAllPost" :postList="postList"/>
    </div>
    <div class="ui two wide column">
      <div class="ui segment">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '@/assets/config'

const { host } = config

export default {
  name: 'Post',
  data() {
    return {
      postList: []
    }
  },
  created() {
    this.getAllPost()
  },
  methods: {
    getAllPost() {
      axios({
        url: host + '/post',
        method: 'get'
      })
        .then(data => {
          this.postList = data.data.data
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  components: {}
}
</script>

<style>

</style>
