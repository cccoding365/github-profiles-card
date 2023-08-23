import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/styles/style.css'

import router from '@/router'

import App from '@/App.vue'

const app = createApp(App)

app.use(router)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
