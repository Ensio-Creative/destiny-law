import { createApp } from 'vue'
import router from './router'
import 'vue3-carousel/dist/carousel.css';
import './styles/main.scss'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')