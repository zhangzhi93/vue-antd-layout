import VueAntdLayout from './src/Layout.vue';

VueAntdLayout.install = function (Vue) {
  Vue.component(VueAntdLayout.name, VueAntdLayout);
};

export default VueAntdLayout;
