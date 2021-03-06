<template>
  <a-layout-sider
    v-model="expand"
    :collapsible="collapsible"
    :theme="theme"
    :width="width"
    :trigger="trigger"
    :collapsedWidth="collapsedWidth"
    class="layout-slider"
  >
    <slot name="menuHeader">
      <div
        class="logo"
        @click="onMenuHeaderClick"
      >
        <img
          :src="logo"
          :alt="title"
        >
        <transition name="collapse">
          <h1 v-if="!collapsed">{{title}}</h1>
        </transition>
      </div>
    </slot>
    <div class="slider-menu">
      <slot name="asidePrefix"></slot>
      <a-menu
        mode="inline"
        v-model="sliderSelectedKeys"
        :theme="theme"
        :inline-collapsed="collapsed"
        :inlineIndent="inlineIndent"
        :openKeys.sync="sliderOpenKeys"
        @click="onMenuClick"
      >
        <template v-for="menu in data">
          <sub-menu
            v-if="menu.children && menu.children.length!==0"
            :key="menu.name"
            :menu-info="menu"
          />
          <menu-item
            v-else
            :key="menu.name"
            :menu-info="menu"
          />
        </template>
      </a-menu>
    </div>
    <slot name="asideExtra"></slot>
  </a-layout-sider>
</template>

<script>
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';

export default {
  name: 'Slider',
  props: ['data', 'theme', 'width', 'logo', 'title', 'trigger', 'collapsible', 'collapsed', 'collapsedWidth', 'inlineIndent', 'selectedKeys', 'openKeys'],
  data() {
    return {
      expand: false,
      sliderOpenKeys: [],
      sliderSelectedKeys: [],
    };
  },
  components: {
    SubMenu,
    MenuItem,
  },
  watch: {
    collapsed: {
      handler(val) {
        this.expand = val;
      },
      immediate: true
    },
    expand(val) {
      this.$emit('update:collapsed', val);
    },
    openKeys: {
      handler(vals) {
        this.sliderOpenKeys = vals;
      },
      immediate: true
    },
    sliderOpenKeys(vals) {
      this.$emit('update:openKeys', vals);
    },
    selectedKeys: {
      handler(vals) {
        this.sliderSelectedKeys = vals;
      },
      immediate: true
    },
    sliderSelectedKeys(vals) {
      this.$emit('update:selectedKeys', vals);
    }
  },
  methods: {
    onMenuHeaderClick() {
      this.$emit('menuHeaderClick');
    },
    onMenuClick(data) {
      this.$emit('menuClick', data);
    }
  },
};
</script>

<style lang="less">
.layout-slider {
  z-index: 100;
  text-align: left;
  background-color: #fff;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  height: 100vh;
  position: relative;
  .logo {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px;
    max-width: 208px;
    z-index: 1;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    background-color: #409eff;
    box-shadow: 0 2px 6px rgb(0 21 41 / 35%);
    img {
      display: inline-block;
      height: 32px;
      vertical-align: middle;
    }
    h1 {
      display: inline-block;
      height: 32px;
      margin: 0 0 0 12px;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      vertical-align: middle;
    }
  }
}
.slider-menu {
  max-height: calc(~"100vh - 64px");
  overflow-y: auto;
  overflow-x: hidden;
  /deep/.ant-menu-inline,
  .ant-menu-vertical {
    border-right: 1px solid #fff;
  }
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-inline-collapsed > .ant-menu-item {
    padding: 0 16px !important;
    text-align: center;
    font-size: 18px;
  }
  .ant-menu-inline-collapsed {
    width: 100%;
  }
  .ant-menu-inline-collapsed
    > .ant-menu-submenu
    > .ant-menu-submenu-title
    .anticon,
  .ant-menu-inline-collapsed > .ant-menu-item .anticon {
    font-size: 20px;
  }
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all cubic-bezier(0.55, 0, 0.1, 1) 0.15s;
}
.collapse-enter,
.collapse-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
