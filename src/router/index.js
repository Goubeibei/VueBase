import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageDetail from '@/views/MessageDetail'
import NewsDetail from '@/views/NewsDetail'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  // 配置路由
  routes:[
    {
      path:'/home',
      component:Home,    // 注册路由组件
      // 子路由
      children:[
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              // msgid是用来接收路径传过来的params参数
              
              path:'msgdetail/:msgid',
              component:MessageDetail,
              name:'msgdetail',   // 命名路由
              
              
              // props:true,
              // props:{username:'goubei'},
              props(route){
                return{
                  msgid:route.params.msgid,
                  content:route.query.content
                }
              }
              // 1.如果写布尔值为true,代表会把传递过来的路径当中的params参数映射为要显示组件当中的属性去使用
              // 2.写对象,props是用来把需要自己额外传递的静态数据传映射为组件当中的属性，这个对象用法只能传递一些自己添加的额外数据
              // 3.写函数,把params参数和query参数一起映射为组件当中的属性




              // 匹配的同时把参数解析出来，添加到当前这个路由对象当中
              // params:{
              //   msgid:1
              // },
              // query:{
              //   content:message01
              // }

            }
          ]
        },
        {
          path:'News',
          component:News,
          children:[
            {
              path:'newsdetail/:newsid',
              component:NewsDetail,
              name:'newsdetail'
            }
          ]
        },
        {
          path:'',
          redirect:'message'
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'',
      redirect:'/home'
    },

  ]
})