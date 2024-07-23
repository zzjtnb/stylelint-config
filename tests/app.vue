<script setup>
const num = 0
</script>

<template>
  <div class="grid">
    <div class="cell cell-3" />
    <div class="cell cell-3" />
    <div class="cell cell-3" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.cell) {
  color: red;
  font-style: italic;
}

.grid {
  height: 100%;
  font-size: 0;
  white-space: nowrap;

  .cell {
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    border: 2px solid #333;
    font-size: 16px;
    vertical-align: top;
    white-space: normal;

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
