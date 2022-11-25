<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button-vue
        @click="$router.push(`/post/${post.id}`)"
      >
        Открыть</my-button-vue>
      <my-button-vue
        @click="$emit('remove', post)"
      >
        Удалить</my-button-vue>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>