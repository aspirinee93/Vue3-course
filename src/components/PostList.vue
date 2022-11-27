<template>

 <div v-if="posts.length > 0">
    <h3>Список постов</h3>

    <transition-group name="post-list">
      <post-item-vue v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
    </transition-group>
    
  </div>
  <div v-else>
    <h1 style="color: red">Список пустой</h1>
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