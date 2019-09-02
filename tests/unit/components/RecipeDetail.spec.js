import { mount } from '@vue/test-utils'
import RecipeDetail from '@/components/RecipeDetail.vue'

describe('Recipe.vue', () => {
  let component

  beforeEach(async () => {
    component = mount(
      RecipeDetail,
      {
        propsData: {
          recipe: {
            sys: {
              id: '1'
            },
            fields: {
              title: 'Bacon & eggs',
              description: 'Lorem ipsum dolor sit amet...',
              chef: {
                fields: {
                  name: 'Jay Oliver'
                }
              },
              tags: [
                {
                  fields: {
                    name: 'Breakfast'
                  }
                },
                {
                  fields: {
                    name: 'Fast meal'
                  }
                }
              ],
              photo: {
                fields: {
                  file: {
                    url: 'https://cdn.example.org/bacon-and-eggs.png'
                  }
                }
              }
            }
          }
        },
        stubs: ['vue-simple-markdown']
      }
    )
  })

  it('Renders the recipe detail', () => {
    expect(component.html()).toContain(`<p class=\"title\">Bacon &amp; eggs</p>`)
    expect(component.html()).toContain(`<p class=\"description\"><vue-simple-markdown-stub source=\"Lorem ipsum dolor sit amet...\"></vue-simple-markdown-stub></p>`)
    expect(component.html()).toContain(`<li class=\"tag\">Breakfast</li>`)
    expect(component.html()).toContain(`<li class=\"tag\">Fast meal</li>`)
    expect(component.html()).toContain(`<p class=\"chef\">by <span>Jay Oliver</span></p></div>`)
    expect(component.html()).toContain(`<img src="https://cdn.example.org/bacon-and-eggs.png">`)
  })
})
