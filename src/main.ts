import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css' // tailwind 初始配置
import router from './router'

createApp(App)
  .use(router) // 初始化vue-router
  .mount('#app') // 挂载
