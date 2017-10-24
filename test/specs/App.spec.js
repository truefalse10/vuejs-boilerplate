import {
  shallow,
  mount,
} from 'vue-test-utils';
import List from '@/App';
import {
  createRenderer,
} from 'vue-server-renderer';

describe('App.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', ''];
    const wrapper = shallow(List, {
      propsData: { items },
    });
    expect(wrapper.findAll('li')).toHaveLength(items.length);
  });

  it('matches snapshot', () => {
    const items = ['item 1', 'item 2'];
    const renderer = createRenderer();
    const wrapper = mount(List, {
      propsData: { items },
    });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
