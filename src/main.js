import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import './registerServiceWorker'
import router from './Routers'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NavBar from "@/Components/NavBar.vue";
import MenuWrap from '@/Components/MenuWrap.vue'
import Load from '@/Assets/animations/lotie.vue'

const app = createApp(App)
app.component('Nav-bar', NavBar)
app.component('Load', Load)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Menu-wrap', MenuWrap)
app.use(store)
app.use(router).mount('#app')
