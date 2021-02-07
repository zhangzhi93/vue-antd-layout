<template>
  <div class="layout-tabs">
    <div class="flex-tabs" v-if="type==='flex'">
      <ul>
        <li v-for="item in tabsData" :key="item.name"
          :class="{'active':activeName == item.name,'closable':!item.closable}"
          @click="onClick(item)" @contextmenu.prevent="(e)=>onContextmenu(e,item)">
          <span :title="item.title">{{item.title}}</span>
          <a-icon type="close" class="close-btn" v-if="!item.permanent"
            @click.stop="removeTab(item)" />
        </li>
      </ul>
    </div>
    <a-tabs v-model="activeKey" type="editable-card" size="small" @tab-click="onClick"
      @edit="onEdit" @contextmenu.prevent.native="onTabsContextmenu" hideAdd v-else
      class="scroll-tabs">
      <a-tab-pane v-for="item in tabsData" :key="item.name" :tab="item.title" :name="item.name"
        :closable="!item.permanent" />
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'LayoutTabs',
  props: {
    tabsData: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'scroll'
    }
  },
  data() {
    return {
      activeKey: ''
    }
  },
  methods: {
    onClick(data) {
      this.$emit('tab-click', data);
    },
    removeTab(data) {
      this.$emit('tab-remove', data);
    },
    onTabsContextmenu(e) {
      const data = this.tabsData.find(item => item.name === e.target.id.split('-')[1]);
      this.$emit('contextmenu', e, data);
    },
    onContextmenu(e, data) {
      this.$emit('contextmenu', e, data);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../styles.less";
.layout-tabs {
  width: 100%;
  z-index: 2;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.scroll-tabs {
  /deep/.ant-tabs-bar.ant-tabs-card-bar {
    margin-bottom: 0;
    border-bottom: 0;
    .ant-tabs-nav-container {
      height: 30px;
    }
    .ant-tabs-tab {
      height: 30px;
      line-height: 28px;
    }
    .ant-tabs-tab-active {
      border-bottom: none;
      font-weight: normal;
    }
  }
}
.flex-tabs {
  height: 30px;
  border-bottom: 1px solid @border-color;
  ul {
    display: flex;
    margin: 0;
    li {
      position: relative;
      width: 100px;
      list-style: none;
      flex: 0 1 100px;
      border-bottom: 1px solid @border-color;
      // border-left: 1px solid @border-color;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        position: absolute;
        height: 18px;
        width: 1px;
        left: 0;
        top: 6px;
        background-color: @border-color;
      }
      &:first-child::before {
        display: none;
      }
      span {
        display: block;
        font-size: 13px;
        padding-left: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 22px;
          height: 30px;
          box-shadow: 0 0 6px 5px #fff;
          background-color: #fff;
        }
      }
      &:hover {
        span {
          color: @primary-color;
        }
      }
      &.active {
        span {
          color: @primary-color;
        }
        &::before {
          display: none;
        }
        box-shadow: inset 0px 0px 8px @background-color;
        border-bottom: 2px solid @primary-color;
      }
      &.closable.active {
        .close-btn {
          opacity: 1;
        }
      }
      &.closable:hover {
        .close-btn {
          opacity: 1;
        }
      }
    }
    .close-btn {
      opacity: 0;
      font-size: 10px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 14px;
      height: 14px;
      position: absolute;
      right: 5px;
      top: 8.5px;
      cursor: pointer;
      border-radius: 50%;
      text-align: center;
      line-height: 14px;
      &:hover {
        background-color: #c0c4cc;
        color: #fff;
      }
    }
  }
}
</style>
