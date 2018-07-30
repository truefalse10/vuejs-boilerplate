import { mount } from '@vue/test-utils';

import store from '@/store';
import ComponentWithStore from '@/components/ComponentWithStore';

describe('Component.vue', () => {
  it('renders the state from the store', () => {
    const { vm } = mount(ComponentWithStore, {
      store,
    });
    expect(vm.count).toBe(0);
  });

  it('updates the store by calling the increment method', () => {
    const { vm } = mount(ComponentWithStore, {
      store,
    });
    vm.increment();
    expect(vm.count).toBe(1);
  });
});
