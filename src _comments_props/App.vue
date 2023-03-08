<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :coms="comments" :deleteComment="deleteComment"></List>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Add from './components/Add';
import List from '@/components/List';
export default {

  components:{
    Header,
    Add,
    List
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

<style scoped></style>