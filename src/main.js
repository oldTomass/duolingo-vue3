import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/base.css'
import VueCookies from 'vue-cookies'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载全局分页本地化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn'
import 'dayjs/locale/zh-cn'
app.use(ElementPlus, {locale: zhCn,})

// 将cookie挂载到全局
app.provide('$cookies', VueCookies);

app.use(router).mount('#app')
