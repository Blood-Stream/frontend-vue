import { shallowMount, createLocalVue } from '@vue/test-utils'
import NavBar from '../../../src/Components/NavBar.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

shallowMount(NavBar, {
  localVue,
  router
})