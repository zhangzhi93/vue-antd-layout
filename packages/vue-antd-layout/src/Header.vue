<template>
  <div class="header">
    <a-layout-header :style="styleObject">
      <div class="trigger" @click="toggle" v-if="collapsible">
        <slot name="collapsedButton">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </slot>
      </div>
      <div class="right-content">
        <slot name="rightContent"></slot>
      </div>
    </a-layout-header>
    <slot name="navTabs"></slot>
  </div>

</template>
<script>

export default {
  name: 'Header',
  props: ['collapsible', 'collapsed', 'height', 'theme'],
  data() {
    return {
      trigger: false,
    };
  },
  computed: {
    styleObject() {
      const styleList = {
        height: this.height,
        lineHeight: this.height
      }
      let background = '#fff';
      let extraStyle = {};
      if (this.theme === 'dark') {
        background = '#000';
      } else if (this.theme === 'light') {
        background = '#fff';
      }
      if (this.theme === 'light') {
        if (this.$slots.navTabs) {
          extraStyle = { borderBottom: '1px solid #efefef' }
        } else {
          extraStyle = { boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)' }
        }
      }
      return {
        ...styleList,
        background,
        ...extraStyle
      }
    }
  },
  watch: {
    collapsed: {
      handler(val) {
        this.trigger = val;
      },
      immediate: true
    },
  },
  methods: {
    toggle() {
      this.trigger = !this.trigger;
      this.$emit('trigger', this.trigger);
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  /deep/.ant-layout-header {
    padding: 0;
  }
  .trigger {
    display: inline-block;
    box-sizing: border-box;
    height: 64px;
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
