<template>
  <div id="app">
    <vue-antd-layout
      :collapsed.sync="expand"
      :menu-data="data"
      :selected-keys.sync="selectedKeys"
      :open-keys="['dashboard','status']"
      @onMenuHeaderClick="goHome"
      @menu-click="onMenuClick"
    >
      <layout-tabs
        slot="navTabs"
        animated
        :tabs-data="tabs"
        v-model="active"
        @tab-click="onTabClick"
        @tab-remove="onTabRemove"
        @contextmenu="onContextmenu"
        type="scroll"
      ></layout-tabs>
      <p slot="asidePrefix">dddd</p>
      <div
        slot="rightContent"
        class="avatar"
      >
        <a-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
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
      <div slot="footer">
        <p>这是页脚</p>
      </div>
    </vue-antd-layout>
  </div>
</template>

<script>
const FullScreen = {
  template: `<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
              </svg>`
}
export default {
  name: 'app',
  data() {
    return {
      expand: false,
      selectedKeys: ['one'],
      active: '',
      tabs: [{
        title: 'Tab 1',
        name: 'a',
        closable: 'false'
      }, {
        title: 'Tab 2',
        name: 'b',
        url: 'www.baidu.com'
      }, {
        title: 'Tab 3',
        name: 'c',
      }, {
        title: 'Tab 4',
        name: 'd',
      }, {
        title: 'Tab 5',
        name: 'e',
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
        icon: 'pie-chart',
        children: [{
          name: 'status',
          title: '状态概览',
          icon: 'copy',
          children: [{
            name: 'one',
            title: '状态概览',
            icon: 'copy',
          }, {
            name: 'two',
            title: '更新日志',
            icon: 'copy',
            hide: true
          }],
        }, {
          name: 'update',
          title: '更新日志',
          icon: 'el-icon-menu',
          hide: true
        }],
      }, {
        name: 'wechat',
        title: '微信配置',
        icon: 'wechat',
        children: [{
          // name: 'menu',
          // title: '菜单管理',
          // icon: 'medium',
        }, {
          name: 'reply',
          title: '关键词回复',
          icon: 'alipay',
        }],
      }, {
        name: 'plugin',
        title: '插件测试',
        icon: 'github',
        children: [{
          name: 'venn',
          title: '韦恩图',
          icon: 'el-icon-menu',
        }, {
          name: 'tree-select',
          title: '树选择',
          icon: 'el-icon-menu',
        }, {
          name: 'calendar',
          title: '日历',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'function',
        title: '自定义功能',
        icon: 'menu',
        children: [{
          name: 'diy-tree-select',
          title: '自定义树选择',
          icon: 'el-icon-menu',
        }, {
          name: 'moveable',
          title: '拖动布局',
          icon: 'el-icon-menu',
        }, {
          name: 'fullscreen1',
          title: '自定义全屏',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'fullscreen',
        title: '自定义全屏',
        iconComponent: FullScreen,
      }],
    };
  },
  watch: {
    expand(val) {
      console.log(val)
    },
    active(val) {
      console.log('v-model', val)
    },
    selectedKeys(val) {
      console.log(val)
    }
  },
  methods: {
    goHome() {
      window.open('https://www.baidu.com');
    },
    onTabClick(data) {
      console.log('click', data)
      // this.active = data.name;
    },
    onTabRemove(data) {
      console.log(data);
    },
    onContextmenu(e, data) {
      console.log(e, data);
    },
    onMenuClick(data) {
      console.log(data);
    }
  },
  mounted() {
    this.active = 'd'
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
