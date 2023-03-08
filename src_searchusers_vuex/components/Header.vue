<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        keyword:'',
      }
    },
    methods:{
      search(){
        let keyword = this.keyword
        if(keyword.trim()){
          // this.$bus.$emit('searchAjax',keyword)
          // dispatch在触发的时候本质就是在调用actions中的方法，可以传递参数，但是只能传递一个
          // 如果要传递多个可以封装成对象再传递
          // {keyword,name:'goubei'}
          this.$store.dispatch('searchAjax',keyword)
        }else{
          alert("请输入合法数据")
        }

        this.keyword = ''
      }

      
    },
  }
</script>

<style scoped>

</style>