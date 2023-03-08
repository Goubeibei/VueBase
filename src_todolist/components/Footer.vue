<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{overNum}}</span> / 全部{{ allNum }}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    // props:['todos'],
    props:{
      todos:Array,
      updateAll:Function,
      deleteAll:Function
    },
    name:'',
    methods:{
      deleteA(){
        this.deleteAll()
      }
    },
    computed:{
      allNum(){
        return this.todos.length
      },
      overNum(){
        return this.todos.reduce((prev,item)=>{
          // 这个方法也是暗含遍历
          // 第一次执行遍历的时候prev的值就是你给的初始值
          // 第一次执行完回调函数后会返回prev值，返回给了第二次执行时候的初始值
          if(item.isOver){
            prev += 1
          }
          // 最后一次执行完回调函数后返回的prev值因为没有下一次了，这个值直接为reduce的结果返回
          return prev
        },0)

        // 功能   统计数组当中符合条件的结果
        // 参数 回调函数 （参数：prev(上一次统计的结果) item() index() arr()）  统计的初始值
        // 返回值：返回统计出来的结果
      },

      isCheckAll:{
        get(){
          return this.overNum === this.allNum && this.allNum>0
        },
        set(val){
          this.updateAll(val)
        }
      }

    }
  }
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>