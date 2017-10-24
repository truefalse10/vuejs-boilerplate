import {
  shallow,
} from 'vue-test-utils';
import {
  createRenderer,
} from 'vue-server-renderer';

import store from '@/store';
import ComponentWithStore from '@/components/ComponentWithStore';

describe('Component.vue', () => {
  it('renders the state from the store', () => {
    const { vm } = shallow(ComponentWithStore, {
      store,
    });
    expect(vm.count).toBe(0);
  });

  it('updates the store by calling the increment method', () => {
    const { vm } = shallow(ComponentWithStore, {
      store,
    });
    vm.increment();
    expect(vm.count).toBe(1);
  });

  it('matches snapshot', () => {
    store.state.count = 0; // reset state
    const renderer = createRenderer();
    const { vm } = shallow(ComponentWithStore, {
      store,
    });
    renderer.renderToString(vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
