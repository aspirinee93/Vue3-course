<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: '',
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
        this.post = response.data;
      } catch (e) {
        alert('Ошибка')
      } 
    },
  },
  created() {
    this.fetchPosts()
  }
}

</script>


<style scoped>

</style>