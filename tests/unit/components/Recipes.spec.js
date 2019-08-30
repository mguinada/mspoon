import flushPromises from 'flush-promises';
import { fakeRecipes } from '../../data/fakeData';
import { mount } from "@vue/test-utils";
import api from '@/api/api.js'
import Recipes from '@/components/Recipes.vue';

describe('Recipes.vue', () => {
  beforeEach(() => {
    api.recipes = jest.fn(() => Promise.resolve(fakeRecipes.items));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders the recipe list', async () => {
    const wrapper = mount(Recipes);
    await flushPromises();

    expect(api.recipes).toHaveBeenCalledTimes(1);
    expect(wrapper.html()).toContain(`<p class=\"title\">Crispy Chicken and Rice	with Peas &amp; Arugula Salad</p>`);
    expect(wrapper.html()).toContain(`<p class=\"title\">White Cheddar Grilled Cheese with Cherry Preserves &amp; Basil</p>`)
    expect(wrapper.html()).toContain(`<p class=\"title\">Tofu Saag Paneer with Buttery Toasted Pita</p>`);
    expect(wrapper.html()).toContain(`<p class=\"title\">Grilled Steak &amp; Vegetables with Cilantro-Jalapeño Dressing</p>`)
  });
});
