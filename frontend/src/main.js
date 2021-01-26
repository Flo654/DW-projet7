import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFinalModal from 'vue-final-modal'

// import global css
import './assets/main.css'

createApp(App).use(router).use(VueFinalModal()).mount('#app')