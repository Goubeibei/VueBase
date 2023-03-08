<template>
  <div>
    <h2>狗贝</h2>
    <slot>
      <!-- 默认插槽 -->
      <!-- slot内部的东西 是等待父组件使用的时候传过来 -->
      <span>heihei</span>
    </slot>

    <slot name="xxx">
      <!-- 具名插槽 -->
    </slot>

    <slot name="yyy">
      <ul>
        <li>11</li>
        <li>22</li>
        <li>33</li>
      </ul>
    </slot>


  </div>
</template>

<script>

  export default {
    
  }
</script>

<style scoped>

</style>