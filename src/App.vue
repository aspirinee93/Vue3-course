<template>
  <div class="app">
    <h1>Страница с поставми</h1>
    <my-button-vue style="margin: 15px 0" @click="showDialog">Создать пост</my-button-vue>
    <my-dialog-vue v-model:show="dialogVisible">
      <post-form-vue @create="createPost" />
    </my-dialog-vue>
    <post-list-vue v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostListVue from "@/components/PostList.vue";
import PostFormVue from "@/components/PostForm.vue";
import MyDialogVue from "@/components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from 'axios';

export default {
  components: {
    PostFormVue,
    PostListVue,
    MyDialogVue,
    MyButton,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
      } catch (e) {
        alert ('Ошибка')
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style scoped>

</style>