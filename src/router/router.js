import TheMain from '@/pages/TheMain'
import PostPage from '@/pages/PostPage'
import MyAbout from '@/pages/MyAbout'
import _postIdPage from '@/pages/_postIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import { createRouter, createWebHistory } from "vue-router"

const history = createWebHistory(process.env.BASE_URL)

const routers = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: TheMain,
    },
    {
      path: '/posts',
      component: PostPage,
    },
    {
      path: '/about',
      component: MyAbout,
    },
    {
      path: '/post/:id',
      component: _postIdPage,
    },
    {
      path: '/store',
      component: PostPageWithStore,
    }
  ]
})

export default routers