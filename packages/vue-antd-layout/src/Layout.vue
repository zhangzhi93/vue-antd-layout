<template>
  <a-layout>
    <Slider
      :collapsed="collapsed"
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      :data="menuData"
      :theme="theme"
      :logo="logo"
      :title="title"
      :width="siderWidth"
      :collapsedWidth="collapsedWidth"
      :breakpoint="breakpoint"
      :inlineIndent="inlineIndent"
      :collapsible="collapsible"
      :defaultCollapsed="defaultCollapsed"
      :trigger="trigger"
      :reverseArrow="reverseArrow"
      @collapse="onCollapse"
      @menu-click="onMenuClick"
      @menu-header-click="onMenuHeaderClick"
      @menu-selected-keys="onMenuSelectedKeys"
      @menu-open-keys="onMenuOpenKeys"
      @breakpoint="onBreakpoint"
    >
      <template #asidePrefix>
        <slot name="asidePrefix" />
      </template>
      <template #menuHeader>
        <slot name="menuHeader" />
      </template>
      <template #asideExtra>
        <slot name="asideExtra" />
      </template>
    </Slider>
    <a-layout class="container">
      <Header
        :collapsed="collapsed"
        :collapsible="collapsible"
        :height="headerHeight"
        :theme="theme"
        @collapse="onCollapse"
      >
        <template #header>
          <slot name="header" />
        </template>
        <template #collapsedButton>
          <slot name="collapsedButton" />
        </template>
        <template #rightContent>
          <slot name="rightContent" />
        </template>
        <template #navTabs>
          <slot name="navTabs" />
        </template>
      </Header>
      <a-layout-content :class="['main', $slots.navTabs ? 'has-tabs' : '']">
        <slot />
        <div v-if="showFooter" class="footer">
          <slot name="footer">
            <p>Vue-Antd-Layout</p>
            <a href="https://github.com/zhangzhi93" target="_blank">https://github.com/zhangzhi93</a>
          </slot>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from './Header.vue';
import Slider from './Slider/Slider.vue';
import setting from './setting';

const emit = defineEmits(['update:collapsed', 'update:menuOpenKeys', 'update:menuSelectedKeys', 'menuHeaderClick', 'menuClick', 'breakpoint']);

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
  menuData: {
    type: Array,
    default: () => [],
  },
  theme: {
    type: String,
    default: setting.theme,
  },
  breakpoint: {
    type: String,
  },
  logo: {
    type: String,
    default: setting.logo,
  },
  title: {
    type: String,
    default: setting.title,
  },
  inlineIndent: {
    type: Number,
    default: setting.inlineIndent,
  },
  headerHeight: {
    type: String,
    default: setting.headerHeight,
  },
  collapsible: {
    type: Boolean,
    default: setting.collapsible,
  },
  defaultCollapsed: {
    type: Boolean,
    default: setting.defaultCollapsed,
  },
  collapsedWidth: {
    type: Number,
    default: setting.collapsedWidth,
  },
  siderWidth: {
    type: [String, Number],
    default: setting.siderWidth,
  },
  trigger: {
    type: String,
  },
  reverseArrow: {
    type: Boolean
  },
  selectedKeys: {
    type: Array
  },
  openKeys: {
    type: Array
  },
  showFooter: {
    type: Boolean,
    default: setting.showFooter,
  }
});

// methods

const onCollapse = (collapsed, type) => {
  emit('update:collapsed', collapsed, type);
};

const onMenuSelectedKeys = (selectedKeys) => {
  emit('update:menuSelectedKeys', selectedKeys);
};

const onMenuOpenKeys = (openKeys) => {
  emit('update:menuOpenKeys', openKeys);
};

const onMenuHeaderClick = () => {
  emit('menuHeaderClick');
};

const onMenuClick = (data) => {
  emit('menuClick', data);
};

const onBreakpoint = (broken) => {
  emit('breakpoint', broken);
};
</script>

<style lang="less" scoped>
.main {
  max-height: calc(~"100vh - 48px");
  overflow-y: auto;
  padding: 0;

  &.has-tabs {
    max-height: calc(~"100vh - 79px");
  }
}

.container {
  flex-direction: column;
}

.footer {
  text-align: center;
  padding: 20px 0;
  color: rgba(0, 0, 0, 0.45);
}
</style>
