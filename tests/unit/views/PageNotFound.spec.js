import { mount } from '@vue/test-utils'
import PageNotFound from '@/views/PageNotFound.vue'

describe('PageNotFound.vue', () => {
  let view

  beforeEach(() => {
    view = mount(PageNotFound)
  })

  it('renders', () => {
    expect(view.html()).toContain(`<div class=\"not-found\"><p>Page not found</p></div>`)
  })
})
