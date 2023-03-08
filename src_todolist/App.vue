<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"></Header> -->
      <Header @addTodo="addTodo"></Header>
      <!-- props -->
      <!-- <List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List> -->
      <!-- 全局事件总线和pubsub -->
      <List :todos="todos"  ></List>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
  export default {
    name:'',
    components:{
      Header,
      List,
      Footer
    },
    mounted(){
      // 在app当中找到总线，给总线绑定一个事件
      this.$bus.$on('deleteOne',this.deleteOne)

      // 消息订阅
      PubSub.subscribe('heihei',this.updateOne)
    },
    data() {
      return {
        // todos:[
        //   {id:1,content:'抽烟',isOver:false},
        //   {id:2,content:'喝酒',isOver:true},
        //   {id:3,content:'烫头',isOver:true},
        // ]

        todos:JSON.parse(localStorage.getItem('TODOS_KEY')) || []

      }
    },

    watch:{
      todos:{
        deep:true,
        // 一般监视，监视的是数组的数据，但是数组内部对象的数据监视不到
        // 深度监视，都可以监视到
        handler(newVal,oldVal){
          // 只要数据发生变化，就把数据存储到localStorage中
          // localStorage 是前端本地储存方案，是一个小型数据库，存储的数据会自动转化为字符串
          // localStorage 当中有4个api
          // localStorage.setItem('key',value)   能获取得到就获取，获取不到就返回NULL，不会影响其他的
          // localStorage.getItem('key')
          // localStorage.removeItem('key')
          // localStorage.clear()

          // 对象数据类型转基本数据类型
          // 计算   比较   全部转基本
          // 判等的时候   都是对象判地址  有一个不是对象类型，转基本


          // localStorage.setItem('TODOS_KEY',newVal)  //  不能直接存，因为对象数据全部都会私自转基本，数据就变味了
          localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))  //  不能直接存，因为对象数据全部都会私自转基本，数据就变味了


        }
      }
    },


    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      // props 是把函数传过去，自定义事件是把这个函数当成回调函数
      // msg是消息订阅和发布 传递过来的消息名称，即使不用也要占位
      updateOne(msg,index){
        this.todos[index].isOver = !this.todos[index].isOver
      },
      deleteOne(index){
        this.todos.splice(index,1)
      },
      updateAll(val){
        this.todos.forEach(item => item.isOver = val)
      },
      deleteAll(){
        // 把没打勾的过滤出来组成新数组，把原数组修改成这个新数组
        this.todos = this.todos.filter(item => !item.isOver)
      }
    }
  }
</script>

<style  scoped>
  /*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>