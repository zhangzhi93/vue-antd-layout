<template>
  <a-layout>
    <Slider :data="menuData" :theme="theme" :logo="logo" :title="title" :breakpoint="breakpoint"
      :collapsed="collapsed" :width="siderWidth" :collapsible="collapsible"
      :defaultCollapsed="defaultCollapsed" :trigger="trigger" :reverseArrow="reverseArrow"
      :collapsedWidth="collapsedWidth" @breakpoint="onBreakpoint">
      <slot name="menuHeader" slot="menuHeader"></slot>
      <slot name="asideExtra" slot="asideExtra"></slot>
    </Slider>
    <a-layout class="container">
      <Header :collapsible="collapsible" :collapsed="collapsed" :height="headerHeight"
        :theme="theme" @trigger="toggle">
        <slot name="header" slot="header"></slot>
        <slot name="collapsedButton" slot="collapsedButton"></slot>
        <slot name="rightContent" slot="rightContent"></slot>
        <slot name="navTabs" slot="navTabs"></slot>
      </Header>
      <a-layout-content :class="['main',$slots.navTabs?'has-tabs':'']">
        <slot></slot>
        <div class="footer" v-if="showFooter">
          <slot name="footer">
            <p>Vue-Antd-Layout</p>
            <a href="https://github.com/zhangzhi93"
              target="_blank">https://github.com/zhangzhi93</a>
          </slot>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header.vue';
import Slider from './Slider/Slider.vue';
import setting from './setting';

export default {
  name: 'vue-antd-layout',
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: setting.theme,
    },
    // style: {
    //   type: [Object, String],
    // },
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
      type: String
    },
    reverseArrow: {
      type: Boolean
    },
    showFooter: {
      type: Boolean,
      default: setting.showFooter,
    }
  },
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    Header,
    Slider,
  },
  watch: {
    collapse: {
      handler(val) {
        this.expand = val;
      },
      immediate: true
    },
    expand(val) {
      this.$emit('update:collapse', val);
    },
  },
  methods: {
    onMenuHeaderClick() {
      this.$emit('onMenuHeaderClick');
    },
    toggle(bol) {
      this.collapsed = bol;
    },
    onBreakpoint(broken) {
      this.$emit('breakpoint', broken);
    }
  },
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
