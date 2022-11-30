<template>
  <div class="header">
    <a-layout-header :style="styleObject">
      <div v-if="collapsible" class="trigger" @click="onToggle">
        <slot name="collapsedButton">
          <menu-unfold-outlined v-if="collapsed" />
          <menu-fold-outlined v-else />
        </slot>
      </div>
      <div class="right-content">
        <slot name="rightContent" />
      </div>
    </a-layout-header>
    <slot name="navTabs" />
  </div>
</template>


<script setup>
import { computed, useSlots } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

const emit = defineEmits(['collapse']);

const slots = useSlots();

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['collapsible', 'collapsed', 'height', 'theme']);

// computed
const styleObject = computed(() => {
  const styleList = {
    height: props.height,
    lineHeight: props.height
  };
  let background = '#fff';
  let extraStyle = {};
  if (props.theme === 'dark') {
    background = '#000';
  } else if (props.theme === 'light') {
    background = '#fff';
  }
  if (props.theme === 'light') {
    if (slots.navTabs) {
      extraStyle = { borderBottom: '1px solid #efefef' };
    } else {
      extraStyle = { boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)' };
    }
  }
  return {
    ...styleList,
    background,
    ...extraStyle
  };
});

// methods

const onToggle = () => {
  emit('collapse', !props.collapsed);
};
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;

  :deep(.ant-layout-header) {
    padding: 0;
  }

  .trigger {
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    padding: 0 15px;
    font-size: 20px;
    cursor: pointer;
  }
}

.right-content {
  float: right;
  margin-right: 10px;
}
</style>
