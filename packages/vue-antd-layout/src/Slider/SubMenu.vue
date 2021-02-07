<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <template slot="title">
      <a-icon :type="props.menuInfo.icon" v-if="props.menuInfo.icon" />
      <span slot="title">{{props.menuInfo.title}}</span>
    </template>

    <template v-for="child in props.menuInfo.children">
      <sub-menu v-if="child.children && child.children.length !== 0" :key="child.name"
        :menu-info="child" />
      <menu-item v-else :key="child.name" :menu-info="child" />
    </template>
  </a-sub-menu>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      required: true,
    },
  },
  components: {
    MenuItem,
  }
};
</script>
