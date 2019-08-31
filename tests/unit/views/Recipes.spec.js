import flushPromises from 'flush-promises';
import { fakeRecipes } from '../../data/fakeData';
import { mount } from "@vue/test-utils";
import api from '@/api/api.js'
import Recipes from '@/views/Recipes.vue';

describe('Recipes.vue', () => {
  let view;

  beforeEach(async () => {
    api.recipes = jest.fn(() => Promise.resolve(fakeRecipes.items))
    view = mount(Recipes)
    await flushPromises();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Calls the API', () => {
    expect(api.recipes).toHaveBeenCalledTimes(1);
  });

  it('Renders the recipe list', async () => {
    expect(view.html()).toContain(`<p class=\"title\">Crispy Chicken and Rice with Peas &amp; Arugula Salad</p>`);
    expect(view.html()).toContain(`<p class=\"title\">White Cheddar Grilled Cheese with Cherry Preserves &amp; Basil</p>`)
    expect(view.html()).toContain(`<p class=\"title\">Tofu Saag Paneer with Buttery Toasted Pita</p>`);
    expect(view.html()).toContain(`<p class=\"title\">Grilled Steak &amp; Vegetables with Cilantro-Jalapeño Dressing</p>`)
  });
});
