<template>
  <div class="app">
    <post-form-vue @create="createPost" />
    <post-list-vue :posts="posts" />
  </div>
</template>

<script>
import PostListVue from "@/components/PostList.vue";
import PostFormVue from "@/components/PostForm.vue";

export default {
  components: {
    PostFormVue,
    PostListVue,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "JS -  язык програмирования" },
        { id: 2, title: "JavaScript2", body: "JS2 -  язык програмирования" },
        { id: 3, title: "JavaScript3", body: "JS3 -  язык програмирования" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
};
</script>

<style scoped>

</style>