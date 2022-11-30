<template>
  <a-layout-sider
    :collapsed="collapsed"
    :collapsible="collapsible"
    :theme="theme"
    :width="width"
    :trigger="trigger"
    :collapsed-width="collapsedWidth"
    :breakpoint="breakpoint"
    class="layout-slider"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <slot name="menuHeader">
      <div class="logo" @click="onMenuHeaderClick">
        <img :src="logo" :alt="title">
        <transition name="collapse">
          <h1 v-if="!collapsed">{{ title }}</h1>
        </transition>
      </div>
    </slot>
    <div class="slider-menu">
      <slot name="asidePrefix" />
      <a-menu
        mode="inline"
        :selected-keys="selectedKeys"
        :open-keys="openKeys"
        :theme="theme"
        :collapsed="collapsed"
        :inline-indent="inlineIndent"
        @click="onMenuClick"
        @open-change="onOpenChange"
        @select="onMenuSelect"
      >
        <template v-for="menu in data" :key="menu.name">
          <sub-menu v-if="menu.children && menu.children.length !== 0" :menu-info="menu" />
          <menu-item v-else :menu-info="menu" />
        </template>
      </a-menu>
    </div>
    <slot name="asideExtra" />
  </a-layout-sider>
</template>

<script setup>
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';

const emit = defineEmits(['collapse', 'menuOpenKeys', 'menuSelectedKeys', 'menuHeaderClick', 'menuClick', 'breakpoint']);

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['data', 'theme', 'width', 'logo', 'title', 'trigger', 'collapsible', 'collapsed', 'collapsedWidth', 'breakpoint', 'inlineIndent', 'selectedKeys', 'openKeys']);

// watch


// methods 

const onCollapse = (collapsed, type) => {
  emit('collapse', collapsed, type);
};

const onMenuHeaderClick = () => {
  emit('menuHeaderClick');
};
const onMenuClick = (data) => {
  emit('menuClick', data);
};

const onOpenChange = (openKeys) => {
  emit('menuOpenKeys', openKeys);
};

const onMenuSelect = ({ selectedKeys }) => {
  emit('menuSelectedKeys', selectedKeys);
};

const onBreakpoint = (broken) => {
  emit('breakpoint', broken);
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
