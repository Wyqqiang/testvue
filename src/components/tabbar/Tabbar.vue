<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Tabbar"
}
</script>

<style scoped>
  .tabbar{
    background: #f6f5f5;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
