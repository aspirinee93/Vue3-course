<template>

  <div>
    <h3>Список постов</h3>
    <post-item-vue 
      v-for="post in posts" 
      :key="post.id" 
      :post="post" 
      @remove="$emit('remove', post)"
    />
  </div>

</template>

<script>
import PostItemVue from '@/components/PostItem.vue';

export default {
  components: { PostItemVue },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

</style>