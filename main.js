import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueAntdLayout from './packages/vue-antd-layout';
import LayoutTabs from './packages/layout-tabs';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueAntdLayout);
Vue.use(LayoutTabs);


new Vue({
  render: h => h(App),
}).$mount("#app");
