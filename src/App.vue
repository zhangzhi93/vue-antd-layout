<template>
  <vue-antd-layout
    v-model:collapsed="expand"
    v-model:selected-keys="selectedKeys"
    v-model:open-keys="openKeys"
    :menu-data="data"
    :trigger="null"
    @menu-header-click="goHome"
    @menu-click="onMenuClick"
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
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
    </template>
    <div class="content">
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
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
import { markRaw } from 'vue';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';
export default {
  name: 'App',
  data() {
    return {
      expand: false,
      selectedKeys: ['one'],
      openKeys: ['dashboard', 'status'],
      activeTabKey: 'a',
      tabs: [{
        title: 'Tab 1',
        key: 'a',
        permanent: true
      }, {
        title: 'Tab 2',
        key: 'b',
        url: 'www.baidu.com'
      }, {
        title: 'Tab 3',
        key: 'c',
      }, {
        title: 'Tab 4',
        key: 'd',
      }, {
        title: 'Tab 5',
        key: 'e',
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
      }],
      data: [{
        name: 'dashboard',
        title: '状态概览',
        icon: SmileOutlined,
        children: [{
          name: 'status',
          title: '状态概览',
          icon: HomeOutlined,
          children: [{
            name: 'one',
            title: '状态概览',
            icon: HomeOutlined,
          }, {
            name: 'two',
            title: '更新日志',
            icon: HomeOutlined,
            hide: true
          }],
        }, {
          name: 'update',
          title: '更新日志',
          icon: HomeOutlined,
          hide: true
        }],
      }, {
        name: 'wechat',
        title: '微信配置',
        icon: HomeOutlined,
        children: [{
          name: 'menu',
          title: '菜单管理',
          icon: HomeOutlined,
        }, {
          name: 'reply',
          title: '关键词回复',
          icon: HomeOutlined,
        }],
      }, {
        name: 'plugin',
        title: '插件测试',
        icon: HomeOutlined,
        children: [{
          name: 'venn',
          title: '韦恩图',
          icon: HomeOutlined,
        }, {
          name: 'tree-select',
          title: '树选择',
          icon: HomeOutlined,
        }, {
          name: 'calendar',
          title: '日历',
          icon: HomeOutlined,
        }],
      }, {
        name: 'function',
        title: '自定义功能',
        icon: SettingFilled,
        children: [{
          name: 'diy-tree-select',
          title: '自定义树选择',
          icon: HomeOutlined,
        }, {
          name: 'moveable',
          title: '拖动布局',
          icon: HomeOutlined,
        }, {
          name: 'fullscreen1',
          title: '自定义全屏',
          icon: HomeOutlined,
        }],
      }, {
        name: 'fullscreen',
        title: '自定义全屏',
        icon: HomeOutlined,
      }],
    };
  },
  watch: {
    expand(val) {
      console.log(val);
    },
    active(val) {
      console.log('v-model', val);
    },
    selectedKeys(val) {
      console.log(val);
    }
  },
  mounted() {
    this.active = 'd';
  },
  methods: {
    goHome() {
      window.open('https://www.baidu.com');
    },
    onTabClick(data) {
      console.log('click', data);
      console.log(this.activeTabKey);
      // this.active = data.name;
    },
    onTabRemove(data) {
      console.log('remove', data);
    },
    onContextmenu(e, data) {
      console.log(e, data);
    },
    onMenuClick(data) {
      console.log(data);
      this.selectedKeys = [data.key];
    }
  }
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
