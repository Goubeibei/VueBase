<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">搜索中</h2>
    <h2 v-else-if="errMsg">请求失败 --- {{ errMsg }}</h2>
    <div v-else class="card" v-for="(user, index) in users" :key="user.username">
      <a :href="user.userurl" target="_blank">
        <img :src="user.userimg" style='width:100px' />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: []
    }
  },
  async mounted() {
    this.$bus.$on('searchAjax', await this.searchAjax)
  },
  methods: {
    // async await 是使用同步代码实现异步效果

    // async函数代表这是一个异步函数,async函数返回的是promise

    async searchAjax(q) {
      this.isFirst = false
      this.isLoading = true

      try {
        const response = await axios({
          // url:'https://api.github.com/search/users?q='+keyword
          // url:'https://api.github.com/search/users?q=${keyword}'
          url: 'https://localhost:8080/api/users/info',
          method: 'get',
        });

        console.log(response.data)

      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>