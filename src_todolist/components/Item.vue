<template>
  <li @mouseenter="isShow=true" @mouseleave="isShow=false" :class="{myClass:isShow}">
    <label>
      <!-- 单向数据绑定 -->
      <input type="checkbox" :checked="todo.isOver" @click="updateO"/>

      <!-- checkbox的两个用法
        1.多个复选框，添加value，收集到一个数组中
        2.单个复选框，不需要value值，v-model，对应的操作就是复选框的checked属性值
      -->
      
      <!-- <input type="checkbox" v-model="isChecked"/> -->
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO" >删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name:'',
    props:{
      // 写对象，可以对传递过来的属性值类型进行限定
      todo:Object,
      index:{
        type:Number,
        // default:0,
        required:true
      },
      updateOne:Function,
      // deleteOne:Function
      
    },
    // data当中不能出现this
    data() {
      return {
        isShow:false
      }
    },
    methods:{
      updateO(){
        // props
        // this.updateOne(this.index)

        // 消息发布
        PubSub.publish('heihei',this.index)
      },
      deleteO(){
        // props
        // this.deleteOne(this.index)
        // 全局事件总线
        this.$bus.$emit('deleteOne',this.index)
      }
    }
    // computed:{
    //   isChecked:{
    //     get(){
    //       return this.todo.isOver
    //     },
    //     set(){

    //     }
    //   }
    // }
  }
</script>

<style scoped>

.myClass{
  background-color:blueviolet ;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none;*/
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>