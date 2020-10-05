import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import './registerServiceWorker'
import router from './Routers'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NavBar from "@/Components/NavBar.vue";

const app = createApp(App)
app.component('Nav-bar', NavBar)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router).mount('#app')
