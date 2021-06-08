<template>
  <a-layout>
    <Slider
      :collapsed.sync="expand"
      :data="menuData"
      :theme="theme"
      :logo="logo"
      :title="title"
      :width="siderWidth"
      :collapsedWidth="collapsedWidth"
      :breakpoint="breakpoint"
      :inlineIndent="inlineIndent"
      :selectedKeys.sync="sliderSelectedKeys"
      :openKeys.sync="sliderOpenKeys"
      :collapsible="collapsible"
      :defaultCollapsed="defaultCollapsed"
      :trigger="trigger"
      :reverseArrow="reverseArrow"
      @breakpoint="onBreakpoint"
      @menuClick="onMenuClick"
      @menuHeaderClick="onMenuHeaderClick"
    >
      <slot
        name="asidePrefix"
        slot="asidePrefix"
      ></slot>
      <slot
        name="menuHeader"
        slot="menuHeader"
      ></slot>
      <slot
        name="asideExtra"
        slot="asideExtra"
      ></slot>
    </Slider>
    <a-layout class="container">
      <Header
        :collapsible="collapsible"
        :collapsed.sync="expand"
        :height="headerHeight"
        :theme="theme"
      >
        <slot
          name="header"
          slot="header"
        ></slot>
        <slot
          name="collapsedButton"
          slot="collapsedButton"
        ></slot>
        <slot
          name="rightContent"
          slot="rightContent"
        ></slot>
        <slot
          name="navTabs"
          slot="navTabs"
        ></slot>
      </Header>
      <a-layout-content :class="['main',$slots.navTabs?'has-tabs':'']">
        <slot></slot>
        <div
          class="footer"
          v-if="showFooter"
        >
          <slot name="footer">
            <p>Vue-Antd-Layout</p>
            <a
              href="https://github.com/zhangzhi93"
              target="_blank"
            >https://github.com/zhangzhi93</a>
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
  },
  data() {
    return {
      expand: false,
      sliderOpenKeys: [],
      sliderSelectedKeys: []
    };
  },
  components: {
    Header,
    Slider,
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
    },
    toggle(bol) {
      this.expand = bol;
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
