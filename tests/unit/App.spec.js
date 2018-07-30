import { shallowMount } from '@vue/test-utils';

import List from '@/App';

describe('App.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', ''];
    const wrapper = shallowMount(List, {
      propsData: { items },
    });
    expect(wrapper.findAll('li')).toHaveLength(items.length);
  });
  it('renders no li if props.items empty', () => {
    const wrapper = shallowMount(List, {});
    expect(wrapper.findAll('li')).toHaveLength(0);
  });
});
