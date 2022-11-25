<template>
  <div>
    <h1>Страница с поставми</h1>

    <my-input-vue
      v-model="searchQuery"
      placeholder="Поиск..."
    />

    <div class="app__btns">
      <my-button-vue
        @click="showDialog"
        >Создать пост
      </my-button-vue>
      <my-select-vue 
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog-vue v-model:show="dialogVisible">
      <post-form-vue @create="createPost" />
    </my-dialog-vue>

    <post-list-vue 
      v-if="!isPostsLoading" 
      :posts="sortedAndSearchedPost" 
      @remove="removePost" 
      />

    <div v-else>Идет загрузка...</div>

    <div ref="observer" class="observer"></div>

    <!-- <div class="page__wrapper">
      <div 
        class="page" 
        v-for="pageNumber in totalPage" 
        :key="pageNumber"
        :class="{'current-page': page === pageNumber}"
        @click="changePage(pageNumber)"
        >
        {{pageNumber}}
      </div>
    </div> -->

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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
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
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert ('Ошибка')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePost() {
      try {
        this.page += 1;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert ('Ошибка')
      } 
    },
    // changePage(page) {
    //   this.page = page
    //   this.fetchPosts()
    // }
  },
  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer)
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPage) {
        this.loadMorePost()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPost() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  // watch: {
  //   page() {
  //     this.fetchPosts()
  //   }
  // }
}
</script>

<style scoped>

</style>