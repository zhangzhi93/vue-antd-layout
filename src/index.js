import VueAntdLayout from '../packages/vue-antd-layout';
import LayoutTabs from '../packages/layout-tabs';

const components = [
  VueAntdLayout,
  LayoutTabs,
];

const install = function (Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  VueAntdLayout,
  LayoutTabs,
};
