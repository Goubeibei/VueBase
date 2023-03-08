<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">{{this.$route.params.msgid}}</li> -->
    <li class="list-group-item">{{ msgid }}</li>
    <!-- <li class="list-group-item">{{username}}</li> -->

    <!-- <li class="list-group-item">{{this.$route.query.content}}</li> -->
    <li class="list-group-item">{{ content }}</li>
    <li class="list-group-item">{{ title }}</li>
  </ul>
</template>

<script>

let msgArr = [
  { id: 1, title: 'title01' },
  { id: 2, title: 'title02' },
  { id: 3, title: 'title03' },
]

export default {
  name: '',
  props: ['msgid', 'content'],
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.findTitle()
  },
  // 点击3个链接公用同一个路由组件，路由组件是同一个，就不会销毁重建
  // 点击3个链接的时候，传递的参数不一样，路由组件还是同一个，导致mounted只会执行一次
  // 第一次会正常，后面就不会变化
  watch: {
    $route: {
      handler(newVal, oldVal) {
        this.findTitle()
      }
    }
  },
  methods: {
    findTitle() {
      setTimeout(() => {
        this.title = msgArr.find(item => item.id === this.msgid).title
      }, 500);
    }
  }
}
</script>

<style scoped></style>