<template functional>
  <a-menu-item :key="props.menuInfo.name" :title="props.menuInfo.title">
    <a-icon :type="props.menuInfo.icon" v-if="props.menuInfo.icon" />
    <a-icon :component="props.menuInfo.iconComponent" v-if="props.menuInfo.iconComponent"></a-icon>
    <span>{{props.menuInfo.title}}</span>
  </a-menu-item>
</template>
