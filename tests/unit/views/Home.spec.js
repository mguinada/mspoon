import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Home)
  })

  it('Renders the Home view', () => {
    expect(component.html()).toContain(`<div class=\"home\">`)
  });
});
