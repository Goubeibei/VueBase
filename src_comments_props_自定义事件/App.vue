<template>
  <div id="app">
    <div>
      <Header></Header>
      <div class="container">
        <!-- props -->
        <!-- <Add :addComment="addComment"></Add> -->
        <!-- 自定义事件 麻烦写法-->
        <Add ref="aa"></Add>
        <!-- 简单写法 -->
        <!-- <Add @addComment="addComment"></Add> -->

        <List :comments='comments' :deleteComment="deleteComment"></List>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Add from './components/Add.vue';
import List from './components/List.vue';

export default {
  name: '',
  components: {
    Header,
    Add,
    List
  },
  // 自定义事件 麻烦写法
  mounted(){
    // 对add组件对象绑定自定义事件
    this.$refs.aa.$on('addComment',this.addComment)
    // 使用$once绑定的事件只能被触发一次
    // this.$refs.aa.$once('addComment',this.addComment)
  },
  data() {
    return {
      comments:[
        {id:1,content:'vue666',username:'goubei1'},
        {id:2,content:'vue777',username:'goubei2'},
        {id:3,content:'vue888',username:'goubei3'}
      ]
    }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },
      deleteComment(index){
        this.comments.splice(index,1)
      }
    }
  }

</script>
<!-- scoped将当前的style限定在这个组件中  -->
<style  scoped>


</style>