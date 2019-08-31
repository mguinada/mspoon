import { mount } from "@vue/test-utils";
import Recipe from '@/components/Recipe.vue';

describe('Recipe.vue', () => {
  let component;

  beforeEach(() => {
    component = mount(
      Recipe,
      {
        stubs: ['router-link'],
        propsData: {
          recipe: {
            sys: {
              id: '1'
            },
            fields: {
              title: 'Bacon & eggs',
              photo: {
                fields: {
                  file: {
                    url: 'https://cdn.example.org/bacon-and-eggs.png'
                  }
                }
              }
            }
          }
        }
      }
    )
  })

  it('Renders the recipe', () => {
    expect(component.html()).toContain(`<p class=\"title\">Bacon &amp; eggs</p>`);
    expect(component.html()).toContain(`<img src="https://cdn.example.org/bacon-and-eggs.png">`);
  });
});
