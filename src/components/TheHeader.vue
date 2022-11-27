<template>
  <div class="header">
    <div v-for="link in links" :key="link.alies">
      <router-link class="header-router-link" :to="link.url">
        <my-button-vue class="h__btns">{{link.title}}</my-button-vue>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          alies: 'home',
          url: '/',
        },
        {
          title: 'About',
          alies: 'about',
          url: '/about',
        },
        {
          title: 'Posts',
          alies: 'posts',
          url: '/posts',
        },
        {
          title: 'Store',
          alies: 'store',
          url: '/store',
        },
        {
          title: 'Composition',
          alies: 'composition',
          url: '/composition',
        },
      ]
    }
  },
}
</script>

<style scoped>
.h__btns {
  margin-top: 0; 
  color: aliceblue;
  font-size: 20px;
}
.h__btns:hover {
background-color: rgb(27, 49, 27);
}
</style>