<template>
  <div class="layout-tabs">
    <div v-if="type === 'flex'" class="flex-tabs">
      <ul>
        <li
          v-for="item in tabsData"
          :key="item.key"
          :class="{ 'active': activeKey == item.key, 'closable': !item.closable }"
          @click="onClick(item)"
          @contextmenu.prevent="(e) => onContextmenu(e, item)"
        >
          <span :title="item.title">{{ item.title }}</span>
          <close-outlined v-if="!item.permanent" class="close-btn" @click.stop="removeTab(item)" />
        </li>
      </ul>
      <!-- <template #tabBarExtraContent>
        <slot name="tabBarExtraContent" />
      </template> -->
    </div>
    <a-tabs
      v-else
      v-model="activeKey"
      type="editable-card"
      hideAdd
      size="small"
      :animated="animated"
      class="scroll-tabs"
      @tab-click="onTabClick"
      @edit="onTabEdit"
      @contextmenu.prevent="onTabContextmenu"
    >
      <a-tab-pane v-for="item in tabsData" :key="item.key" :tab="item.title" :closable="!item.permanent" />
      <template #tabBarExtraContent>
        <slot name="tabBarExtraContent" />
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue';
import { CloseOutlined } from '@ant-design/icons-vue';

const emit = defineEmits(['tabClick', 'tabRemove', 'contextmenu']);

const props = defineProps({
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
    default: 'scroll',
    validator: (value) => {
      return ['scroll', 'flex'].indexOf(value) !== -1;
    }
  },
  animated: {
    type: Boolean,
    default: false
  },
});

// 查询当前节点的所有同级前面的节点
function prevAll(elem) {
  const previousSiblings = [];
  while ((elem = elem.previousSibling) && elem.nodeType !== 9) {
    if (elem.nodeType === 1) {
      previousSiblings.push(elem);
    }
  }
  return previousSiblings;
}

// methods

const onClick = (data) => {
  emit('tabClick', { ...data });
};

const onTabClick = (targetKey) => {
  const data = this.tabsData.find(item => item.key === targetKey) || {};
  emit('tabClick', { ...data });
};

const removeTab = (data) => {
  emit('tabRemove', { ...data });
};

const onTabEdit = (targetKey, action) => {
  if (action === 'remove') {
    const data = this.tabsData.find(item => item.key === targetKey) || {};
    emit('tabRemove', { ...data });
  }
};

const onTabContextmenu = (e) => {
  let tabElem = null;
  if (e.target.classList.contains('ant-tabs-tab')) {
    tabElem = e.target;
  } else {
    tabElem = e.target.parentNode;
  }
  const index = prevAll(tabElem).length;
  const data = this.tabsData[index];
  emit('contextmenu', e, { ...data });
};

const onContextmenu = (e, data) => {
  emit('contextmenu', e, { ...data });
};
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
  :deep(.ant-tabs-bar.ant-tabs-card-bar) {
    margin-bottom: 0;
    border-bottom: 0;

    .ant-tabs-nav-container {
      height: 30px;
    }

    .ant-tabs-tab {
      height: 30px;
      line-height: 28px;
      border: none;
      border-right: 1px solid #e8e8e8;
      font-size: 13px;
      margin-right: 0;
      border-radius: 0;

      .anticon-close {
        opacity: 0;
        font-size: 10px;
      }
    }

    .ant-tabs-tab-active {
      border-bottom: none;
      font-weight: normal;

      .anticon-close {
        opacity: 1;
      }

      // &:after {
      //   content: "";
      //   display: block;
      //   width: 100%;
      //   border-bottom: 2px solid @primary-color;
      // }
    }

    .ant-tabs-ink-bar {
      visibility: visible;
    }
  }
}

.flex-tabs {
  height: 30px;
  border-bottom: 1px solid @border-color-base;

  ul {
    display: flex;
    margin: 0;

    li {
      position: relative;
      width: 100px;
      list-style: none;
      flex: 0 1 100px;
      border-bottom: 1px solid @border-color-base;
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
        background-color: @border-color-base;
      }

      &:first-child::before {
        display: none;
      }

      span {
        display: block;
        font-size: 13px;
        padding-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
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

.contextmenu-container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: tnum;
  position: fixed;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  display: block;
}

.contextmenu-content {
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  list-style-type: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 2px 8px #00000026;

  ul {
    margin-bottom: 0;
  }

  li {
    list-style: none;
    font-size: 12px;
  }
}

.contextmenu-menu-item {
  line-height: 26px;
  padding: 0 10px;
  width: 80px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
