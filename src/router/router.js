import TheMain from '@/pages/TheMain'
import PostPage from '@/pages/PostPage'
import MyAbout from '@/pages/MyAbout'
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
  ]
})

export default routers