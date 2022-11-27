<template>
  <div>

    <h1>Страница с поставми</h1>

    <my-input-vue v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..." />

    <div class="app__btns">
      <my-button-vue @click="showDialog">Создать пост </my-button-vue>
      <my-select-vue :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>

    <my-dialog-vue v-model:show="dialogVisible">
      <post-form-vue @create="createPost" />
    </my-dialog-vue>

    <post-list-vue v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>

  </div>
</template>

<script>
import axios from 'axios';
import PostListVue from "@/components/PostList.vue";
import PostFormVue from "@/components/PostForm.vue";
import MyDialogVue from "@/components/UI/MyDialog.vue";
import MyButtonVue from "@/components/UI/MyButton.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostFormVue,
    PostListVue,
    MyDialogVue,
    MyButtonVue,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style scoped>

</style>