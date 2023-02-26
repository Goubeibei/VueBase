<template>
  <div>
    <h2>goubei</h2>
    <button @click="count++">笑了{{count}}</button>
  </div>
</template>

<script>
  export default {
    name:'',
    data() {
      return {
        count:0
      }
    },
  }
</script>

<style scoped>
h2{
  color:aqua
}
</style>