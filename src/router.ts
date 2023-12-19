import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: async () => await import('./pages/Index.vue') }
]

const router = createRouter({
  history: createWebHistory(), // history模式
  routes
})

export default router
