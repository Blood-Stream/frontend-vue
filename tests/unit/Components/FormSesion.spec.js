import { mount, shallowMount } from '@vue/test-utils'
import FormSesion from '@/Components/FormSesion.vue'

describe('formsesin.vue', () => {

  // test('content form and button', () => {
  //   const wrapper = mount(FormSesion, {
  //     propsData: {
  //       typeform: 'login'
  //     },
  //     data() {
  //       return {
  //         userData: {
  //           email: "",
  //           nickname: "andres",
  //           password: "test1234",
  //         },
  //       }
  //     }
  //   })
  //   expect(wrapper.find('form').trigger('submit')).toBe(true)
  // })

  test('renders props.msg when passed', () => {
    const msg = 'Login'
    const wrapper = shallowMount(FormSesion, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
