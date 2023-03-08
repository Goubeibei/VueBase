<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addT"/>
  </div>
</template>

<script>
  export default {
    name:'',
    // props:{
    //   // 第三种写法，比2严格
    //   // addTodo:Function  这是第二种，只限定了类
    //   addTodo:{
    //     // 配置对象，可以限定属性值的更多
    //     type:Function,
    //     required:true,
    //     // default:10  // 默认值为10,不传的话默认值就是10
    //   }
    // },
    data() {
      return {
        content:'',
      }
    },
    methods:{
      addT(){
        let content = this.content
        // let {content} = this
        if(content.trim()){
          let id = Date.now()
          let isOver = false
          let obj = {
            id,
            content,
            isOver
          }
          // this.addTodo(obj)   // props
          this.$emit('addTodo',obj)   // 自定义事件
        }else{
          alert('请输入合法数据')
        }

        this.content = ''
      }
    }
  }
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>