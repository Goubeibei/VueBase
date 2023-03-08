import Vue from 'vue'
import App from '@/App'
// 完整引入 全局注册
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)


// 按需引入
import { Button } from 'element-ui';

// Vue.component(Button.name, Button);

Vue.use(Button)

// element-ui分为两大类组件：按使用区分，组件标签形式和js代码形式


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)

  // render:function(h){
  //   return(App)
  // }

})