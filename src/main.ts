import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import{store,key } from './store/index'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(store,key)

app.mount('#app')
