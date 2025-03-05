import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/profile', component: ProfileView },
  ]
})

export default router