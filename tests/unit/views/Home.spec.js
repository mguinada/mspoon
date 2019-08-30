import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('Renders the Home view', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toContain(`<div class=\"home\">`)
  });
});
