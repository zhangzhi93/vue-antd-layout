<template>
  <a-menu-item :key="menuInfo.name" :title="menuInfo.title" :value="menuInfo">
    <component :is="menuInfo.icon" v-if="menuInfo.icon" />
    <span>{{ menuInfo.title }}</span>
  </a-menu-item>
</template>

<script setup>
const props = defineProps({
  menuInfo: {
    type: Object,
    default: () => ({})
  }
});
</script>
