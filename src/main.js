import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import VueAntdLayout from '../packages/vue-antd-layout';
// import LayoutTabs from '../packages/layout-tabs';
import App from './App.vue';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(Antd).use(VueAntdLayout);
// app.use(VueAntdLayout);
// app.use(LayoutTabs);


app.mount('#app');
