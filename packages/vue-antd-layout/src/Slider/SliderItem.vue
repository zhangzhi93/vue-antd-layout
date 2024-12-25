<template>
  <template v-if="!data.meta.hidden">
    <a-menu-item
      v-if="isShowMenuItem(data)"
      :key="uiData.onlyOneChild.name"
      :value="toRaw(uiData.onlyOneChild)"
    >
      <component
        :is="uiData.onlyOneChild.meta?.icon"
        v-if="uiData.onlyOneChild.meta?.icon"
      />
      <span>{{ uiData.onlyOneChild.meta.title }}</span>
    </a-menu-item>
    <a-sub-menu v-else :key="data.name">
      <template #title>
        <component :is="data.meta.icon" v-if="data.meta?.icon" />
        <span>{{ data.meta.title }}-{{ data.name }}</span>
      </template>

      <slider-item
        v-for="child in data.children"
        :key="child.name"
        :data="child"
      />
    </a-sub-menu>
  </template>
</template>

<script>
export default {
  name: "SliderItem",
};
</script>

<script setup>
import { reactive, toRaw } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const uiData = reactive({
  onlyOneChild: {},
});

function isExternal(path) {
  return /^(http?:|https?:|mailto:|tel:)/.test(path);
}

const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }

  if (routePath) {
    return `${props.basePath}/${routePath}`;
  } else {
    return props.basePath;
  }
};

const hasOneShowingChild = (data) => {};

const isShowMenuItem = (menu) => {
  const showingChildren = (menu?.children || []).filter(
    (child) => !child.meta.hidden
  );

  // 如果只有一个子菜单
  if (showingChildren.length === 1) {
    uiData.onlyOneChild = toRaw(showingChildren[0]);

    // 如果强制需要展示父菜单，那么就渲染层级结构
    if (menu.meta?.alwaysShow) {
      return false;
    } else {
      if (
        !uiData.onlyOneChild?.children ||
        uiData.onlyOneChild.children.length === 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  // 如果没有子菜单，则显示父菜单
  if (showingChildren.length === 0) {
    uiData.onlyOneChild = toRaw(menu);
    return true;
  }

  return false;
};
</script>
