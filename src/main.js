import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './Routers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NavBar from "@/Components/NavBar.vue";
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const app = createApp(App)
app.component('Nav-bar', NavBar)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
