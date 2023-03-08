<template>
  <div>
    <Child>
      <template>
        <button>点我</button>
      </template>
      <!-- 默认插槽只能有一个，剩下的都是具名插槽 -->
      <template name="xxx">
        <a href="https:www.baidu.com">点我去百度</a>
      </template>
    </Child>

    <Child>
      <template>
        <p>pp</p>
      </template>

      <template name="xxx">
        <span>哇哈哈</span>
      </template>
    </Child>

    <!-- 作用域插槽 -->
    <!-- 数据是由父传子去展示
    子组件展示数据的过程中，数据的结构是由父确定的 -->

    <!-- 如果isOver是true改样式 -->
    <ScopedChild :todos="todos">
      <!-- <template slot-scope="scopeProps"> -->
      <template slot-scope="{todo}">
        <!-- <span v-if="scopeProps.todo.isOver" style="color:aquamarine">🐕{{ scopeProps.todo.content }}</span> -->
        <span v-if="todo.isOver" style="color:aquamarine">🐕{{ todo.content }}</span>
      </template>
    </ScopedChild>

  </div>
</template>

<script>
import ScopedChild from './components/ScopedChild.vue';
import Child from '@/components/Child'
  export default {
    name:'',
    components:{
      Child,
      ScopedChild
    },
    data() {
      return {
        todos:[
          {id:1,content:'抽烟',isOver:false},
          {id:2,content:'喝酒',isOver:true},
          {id:3,content:'打架',isOver:true},
        ]
      }
    },
  }
</script>

<style scoped>

</style>