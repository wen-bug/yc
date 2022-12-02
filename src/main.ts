import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import{store,key } from './store/index'
import Previewer from 'virtual:vue-component-preview';
const app = createApp(App)

app.use(router).use(store,key).use(Previewer)

app.mount('#app')
