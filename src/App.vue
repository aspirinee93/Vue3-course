<template>
  <div class="app">
    <h1>Страница с поставми</h1>
    <my-button-vue @click="showDialog">Создать пост</my-button-vue>
    <my-dialog-vue v-model:show="dialogVisible">
      <post-form-vue @create="createPost" />
    </my-dialog-vue>
    <post-list-vue :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostListVue from "@/components/PostList.vue";
import PostFormVue from "@/components/PostForm.vue";
import MyDialogVue from "@/components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";

export default {
  components: {
    PostFormVue,
    PostListVue,
    MyDialogVue,
    MyButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "JS -  язык програмирования" },
        { id: 2, title: "JavaScript2", body: "JS2 -  язык програмирования" },
        { id: 3, title: "JavaScript3", body: "JS3 -  язык програмирования" },
      ],
      dialogVisible: false,
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
  },
};
</script>

<style scoped>

</style>