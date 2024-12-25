<template>
  <vue-antd-layout
    v-model:collapsed="expand"
    v-model:selected-keys="selectedKeys"
    v-model:open-keys="openKeys"
    :menu-data="data"
    sider-width="235"
    :trigger="null"
    @menu-header-click="goHome"
    @menu-click="onMenuClick"
    @menu-selected-keys="onMenuSelect"
  >
    <template #navTabs>
      <layout-tabs
        v-model:activeKey="activeTabKey"
        animated
        :tabs-data="tabs"
        type="scroll"
        @tab-click="onTabClick"
        @tab-remove="onTabRemove"
        @contextmenu="onContextmenu"
      />
    </template>
    <template #asidePrefix>
      <p>dddd</p>
    </template>
    <template #rightContent>
      <div class="avatar">
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </template>
    <div class="content">
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div>
        <a-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
    <template #footer>
      <div>
        <p>这是页脚</p>
      </div>
    </template>
  </vue-antd-layout>
</template>

<script>
import { markRaw } from "vue";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "App",
  data() {
    return {
      expand: false,
      selectedKeys: ["one"],
      openKeys: ["dashboard", "status"],
      activeTabKey: "a",
      tabs: [
        {
          title: "Tab 1",
          key: "a",
          permanent: true,
        },
        {
          title: "Tab 2",
          key: "b",
          url: "www.baidu.com",
        },
        {
          title: "Tab 3",
          key: "c",
        },
        {
          title: "Tab 4",
          key: "d",
        },
        {
          title: "Tab 5",
          key: "e",
          // }, {
          //   title: 'Tab 6',
          //   name: '6',
          // }, {
          //   title: 'Tab 7',
          //   name: '7',
          // }, {
          //   title: 'Tab 8',
          //   name: '8',
          // }, {
          //   title: 'Tab 9',
          //   name: '9',
          // }, {
          //   title: 'Tab 10',
          //   name: '10',
          // }, {
          //   title: 'Tab 11',
          //   name: '11',
          // }, {
          //   title: 'Tab 12',
          //   name: '12',
          // }, {
          //   title: 'Tab 13',
          //   name: '13',
          // }, {
          //   title: 'Tab 14',
          //   name: '14',
          // }, {
          //   title: 'Tab 15',
          //   name: '15',
          // }, {
          //   title: 'Tab 16',
          //   name: '16',
          // }, {
          //   title: 'Tab 17',
          //   name: '17',
          // }, {
          //   title: 'Tab 18',
          //   name: '18',
          // }, {
          //   title: 'Tab 19',
          //   name: '19',
          // }, {
          //   title: 'Tab 20',
          //   name: '20',
          // }, {
          //   title: 'Tab 21',
          //   name: '21',
          // }, {
          //   title: 'Tab 22',
          //   name: '22',
          // }, {
          //   title: 'Tab 23',
          //   name: '23',
          // }, {
          //   title: 'Tab 24',
          //   name: '24',
          // }, {
          //   title: 'Tab 25',
          //   name: '25',
          // }, {
          //   title: 'Tab 26',
          //   name: '26',
          // }, {
          //   title: 'Tab 27',
          //   name: '27',
          // }, {
          //   title: 'Tab 28',
          //   name: '28',
          // }, {
          //   title: 'Tab 29',
          //   name: '29',
          // }, {
          //   title: 'Tab 30',
          //   name: '30',
        },
      ],
      data: [
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {
            title: "状态概览",
            nav: ["状态概览"],
            roles: ["ALL"],
          },
        },
        {
          path: "/menu1",
          name: "menu1",
          meta: {
            title: "菜单",
            nav: ["菜单"],
            roles: ["ALL"],
          },
        },
        {
          path: "/wechat",
          name: "wechat",
          meta: {
            title: "微信配置",
            nav: ["微信配置"],
            roles: ["ALL"],
          },
          children: [
            {
              path: "/wechat/menu",
              name: "menu",
              meta: {
                title: "菜单管理",
                nav: ["微信配置", "菜单管理"],
                roles: ["ALL"],
              },
            },
            {
              path: "/wechat/reply",
              name: "reply",
              meta: {
                title: "关键词回复",
                nav: ["微信配置", "关键词回复"],
                roles: ["ALL"],
              },
            },
          ],
        },
        {
          path: "/plugin",
          name: "plugin",
          meta: {
            title: "插件测试",
            nav: ["插件测试"],
            roles: ["ALL"],
          },
          children: [
            // {
            //   path: '/plugin/venn',
            //   name: 'venn',
            //   component: () => import('./views/plugin/Venn.vue'),
            //   meta: {
            //     title: '韦恩图',
            //     nav: ['插件测试', '韦恩图'],
            //     icon: AimOutlined,
            //     roles: ['ALL'],
            //   },
            // },
            {
              path: "/plugin/tree-select",
              name: "tree-select",
              meta: {
                title: "树选择",
                nav: ["插件测试", "树选择"],
                roles: ["ALL"],
              },
            },
            {
              path: "/plugin/calendar",
              name: "calendar",
              meta: {
                title: "日历",
                nav: ["插件测试", "日历"],
                roles: ["ALL"],
              },
            },
            {
              path: "/plugin/audio-player",
              name: "audio-player",
              meta: {
                title: "播放器",
                nav: ["插件测试", "播放器"],
                roles: ["ALL"],
              },
            },
            {
              path: "/plugin/baidumapvgl",
              name: "baidumapvgl",
              meta: {
                title: "百度地图",
                nav: ["插件测试", "百度地图"],
                roles: ["ALL"],
              },
            },
          ],
        },
        {
          path: "/function",
          name: "function",
          meta: {
            title: "自定义功能",
            nav: ["自定义功能"],
            roles: ["ALL"],
          },
          children: [
            {
              path: "/function/diy-tree-select",
              name: "diy-tree-select",
              meta: {
                title: "自定义树选择",
                nav: ["自定义功能", "自定义树选择"],
                roles: ["ALL"],
              },
            },
            {
              path: "/function/moveable",
              name: "moveable",
              meta: {
                title: "拖动布局",
                nav: ["自定义功能", "拖动布局"],
                roles: ["ALL"],
              },
            },
            {
              path: "/function/fullscreen",
              name: "fullscreen",
              meta: {
                title: "自定义全屏",
                nav: ["自定义功能", "自定义全屏"],
                roles: ["ALL"],
              },
            },
          ],
        },
        {
          path: "/vtk",
          name: "vtk",
          meta: {
            title: "vtk",
            nav: ["vtk"],
            roles: ["ALL"],
          },
          children: [
            {
              path: "/vtk/pointcloud",
              name: "pointcloud",
              meta: {
                title: "点云",
                nav: ["vtk", "点云"],
                roles: ["ALL"],
              },
            },
          ],
        },
      ],
    };
  },
  watch: {
    expand(val) {
      console.log(val);
    },
    active(val) {
      console.log("v-model", val);
    },
    selectedKeys(val) {
      console.log("selectedKeys:", val);
    },
  },
  mounted() {
    this.active = "d";
  },
  methods: {
    goHome() {
      window.open("https://www.baidu.com");
    },
    onTabClick(data) {
      console.log("click", data);
      console.log(this.activeTabKey);
      // this.active = data.name;
    },
    onTabRemove(data) {
      console.log("remove", data);
    },
    onContextmenu(e, data) {
      console.log(e, data);
    },
    onMenuClick(data) {
      console.log("menuClick", data);
      this.selectedKeys = [data.key];
    },
    onMenuSelect(val) {
      console.log("menuSelect", val);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 20px;
  background: #fff;
}

.expand {
  position: absolute;
  bottom: 0;
  background-color: #efefef;
  width: 100%;
}
</style>
