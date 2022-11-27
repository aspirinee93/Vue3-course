<template>
  <div>
    <h1>Страница с поставми</h1>

    <my-input-vue v-focus v-model="searchQuery" placeholder="Поиск..." />

    <div class="app__btns">
      <my-button-vue @click="showDialog">Создать пост
      </my-button-vue>
      <my-select-vue v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog-vue v-model:show="dialogVisible">
      <post-form-vue @create="createPost" />
    </my-dialog-vue>

    <post-list-vue v-if="!isPostsLoading" :posts="sortedAndSearchedPost" @remove="removePost" />

    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePost" class="observer"></div>

  </div>
</template>

<script>
import PostListVue from "@/components/PostList.vue";
import PostFormVue from "@/components/PostForm.vue";
import MyDialogVue from "@/components/UI/MyDialog.vue";
import MyButtonVue from "@/components/UI/MyButton.vue";
import axios from 'axios';

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
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ]
    };
  },
  setup(props) {

  }
}
</script>

<style scoped>

</style>