import { mount } from '@vue/test-utils'
import detail  from './detail'

test('detail页面包含img', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(detail)

  // console.log('template ->\n\n', wrapper.html())
  // console.log('img tag ->', wrapper.find('img').html())
  
  expect(wrapper.find('img').html()).toBe('<img>')
})