<template>
  <a-sub-menu :key="menuInfo.name">
    <template #title>
      <component :is="menuInfo.icon" v-if="menuInfo.icon" />
      <span>{{ menuInfo.title }}</span>
    </template>

    <template v-for="child in menuInfo.children" :key="child.name">
      <sub-menu v-if="child.children && child.children.length !== 0" :menu-info="child" />
      <menu-item v-else :menu-info="child" />
    </template>
  </a-sub-menu>
</template>

<script setup>
import { defineProps } from 'vue';
import MenuItem from './MenuItem.vue';

const props = defineProps({
  menuInfo: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>

<script>
export default {
  name: 'SubMenu'
};
</script>
