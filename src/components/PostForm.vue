<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input v-model="post.title" class="input" type="text" placeholder="Название" />
      <input v-model="post.body" class="input" type="text" placeholder="Описание" />
      <my-button-vue @click="createPost">Создать</my-button-vue>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>

</style>