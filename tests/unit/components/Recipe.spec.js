import { mount } from "@vue/test-utils";
import { fakeRecipes } from '../../data/fakeData';
import api from '@/api/api.js'
import Recipe from '@/components/Recipe.vue';

describe('Recipe.vue', () => {
  it('Renders the recipe', () => {
    const wrapper = mount(
      Recipe,
      {
        propsData: {
          recipe: {
            sys: {id: '1'},
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

    expect(wrapper.html()).toContain(`<p class=\"title\">Bacon &amp; eggs</p>`);
    expect(wrapper.html()).toContain(`<img src="https://cdn.example.org/bacon-and-eggs.png">`);
  });
});
