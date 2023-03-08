import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this // 配置总线，vm挂到Vue的原型上，让所有组件都能找到他，进而调用$on和$emit
  },
  el: '#app',
  render: h => h(App)

  // render:function(h){
  //   return(App)
  // }

})