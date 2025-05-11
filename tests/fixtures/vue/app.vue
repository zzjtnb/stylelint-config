<script setup>
const num = 0

const buttonClasses = computed(() => {
  // 计算基础条件
  const { type, shape, size, disabled, loading, block, text, ghost } = props
  const isDisabled = disabled || loading
  const isTagShape = shape === 'tag'
  const isCircle = shape === 'circle'

  // 得到传统色彩名称
  const colorType = 'primary'

  // 构建样式类数组
  return [

    // 2. 按钮类型样式 - 处理不同变体
    // 文本按钮
    text
      ? `btn-text-${type}`
      : isTagShape
        ? `btn-tag-${type}`
        : ghost
          ? (
              type === 'default'
                ? 'bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
                : `bg-transparent border border-${colorType} text-${colorType} hover:bg-${colorType}/10`
            )
          : `btn-${type}`,

    // 3. 形状和尺寸样式
    styles.shape[shape] || styles.shape.rounded,
    isTagShape
      ? (styles.tag[size] || styles.tag.small)
      : isCircle
        ? (styles.size[size]?.circle || styles.size.medium.circle)
        : (styles.size[size]?.normal || styles.size.medium.normal),

    // 4. 额外状态类
    block && 'w-full',
    isDisabled ? 'opacity-60 cursor-not-allowed' : '',
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <div class="grid">
    <div class="cell cell-3" />
    <div class="cell cell-3" />
    <div class="cell cell-3" />
    <button :class="buttonClasses">
      {{ num }}
    </button>

    <thead class="sticky top-0 z-10 bg-app-white/90 dark:bg-app-dark/90" />
  </div>
</template>

<style lang="scss" scoped>
.btn-primary {
  @apply rounded-lg bg-yanzhi px-4 py-2 text-white transition-colors duration-200 hover:bg-yanzhi-dark;
}

:deep(.cell) {
  font-style: italic;
  color: red;
}

.grid {
  height: 100%;
  font-size: 0;
  white-space: nowrap;

  .cell {
    position: relative;

    overflow: hidden;
    display: inline-block;

    box-sizing: border-box;
    height: 100%;
    padding: 0 10px;
    border: 2px solid #333;

    font-size: 16px;
    white-space: normal;
    vertical-align: top;

    &.is-animating {
      background-color: #fffdec;
    }

    .cell-1 {
      width: 10%;
    }

    .cell-2 {
      width: 20%;
    }

    .cell-3 {
      width: 30%;
    }

    .cell-4 {
      width: 40%;
    }

    .cell-5 {
      width: 50%;
    }
  }
}
</style>
