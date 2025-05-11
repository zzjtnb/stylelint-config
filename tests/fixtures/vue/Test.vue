<script setup>
const color = 'blue'
</script>

<template>
  <div class="test-component flex-center" :class="{ 'bg-red-500': color === 'red' }">
    <div class="uno:p-4 text-center">
      <h1 class="mb-4 text-xl font-bold">
        测试组件
      </h1>
      <p class="custom-class">
        这是一个测试组件
      </p>
    </div>
  </div>
</template>

<style lang="scss">
// 使用UnoCSS的@apply指令
.test-component {

  // 使用SCSS变量
  $padding: 16px;

  padding: $padding;

  // 使用v-bind进行颜色绑定
  color: v-bind(color);

  // 使用UnoCSS主题函数
  background-color: theme('colors.gray.100');

  // 测试嵌套语法
  .custom-class {
    font-size: 14px;

    // 深度选择器
    &::v-deep(.child) {
      color: red;
    }

    // 插槽选择器
    &::v-slotted(.slot-content) {
      margin: 10px;
    }

    &:hover {
      @apply text-blue-500;
    }
  }

  @apply p-4 rounded-lg;
}
</style>
