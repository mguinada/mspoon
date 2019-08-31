import flushPromises from 'flush-promises';
import { mount } from "@vue/test-utils"
import { fakeRecipe } from '../../data/fakeData'
import api from '@/api/api.js'
import Recipe from '@/views/Recipe.vue';

describe('Recipe.vue', () => {
  let view

  beforeEach(async () => {
    api.recipe = jest.fn(() => Promise.resolve(fakeRecipe.items))

    view = mount(
      Recipe,
      {
        mocks: {
          $route: {
            path: '/recipe/:id',
            name: 'recipe',
            params: { id: '437eO3ORCME46i02SeCW46' }
          }
        },
        stubs: ['vue-simple-markdown']
      }
    )

    await flushPromises()
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Calls the API', () => {
    expect(api.recipe).toHaveBeenCalledTimes(1)
    expect(api.recipe).toHaveBeenCalledWith('437eO3ORCME46i02SeCW46')
  });

  it('Renders the recipe detail', () => {
    expect(view.html()).toContain(`<p class=\"title\">Crispy Chicken and Rice with Peas &amp; Arugula Salad</p>`)
  });
});
