import { mount } from '@vue/test-utils'
import VuexView from '../src/views/vuex.vue'

test('views/vuex.vue', async () => {
  const wrapper = mount(VuexView)
  const p = wrapper.find('p')
  expect(p.text()).toBe('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(p.text()).toBe('count is: 1')
})
