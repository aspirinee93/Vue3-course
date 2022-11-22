<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Опсание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button-vue>Удалить</my-button-vue>
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