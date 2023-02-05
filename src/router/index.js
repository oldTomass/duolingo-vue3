import { createRouter, createWebHistory } from 'vue-router'
// import Login from '@/views/Login'
// import Home from '@/views/Home'


const routes = [
  {
    path:'/',
    // name:'登录注册',
    component:()=>import('@/views/Login/user.vue')
  },
  {
    path:'/home',
    // name:'首页',
    component:()=>import('@/views/Home/home.vue')
  },
  {
  path:'/openai',
  component:()=>import('@/views/OpenAI/openai.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router