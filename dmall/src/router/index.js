import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/views/Home'
import ClassType from '@/views/ClassType'
import ShopCar from '@/views/ShopCar'
import Zoom from '@/views/Zoom'
import Detail from '@/views/Detail'
import Search from '@/views/Search'

import invite from '@/views/Zoomerji/invite'
import verify from '@/views/Zoomerji/verify'

Vue.use(Router)

let router =  new Router({
     mode: 'history',
     scrollBehavior (to, from, savedPosition) {//必须返回一个x y值 上次保持的位置
          if (savedPosition) {//上次保存的位置，如果没有保存，返回0，0的位置
              return savedPosition
          } else {
              return { x: 0, y: 0 }
          }
      },
      routes: [
        {
            path:'/',
            redirect: { name: 'Home' }//重定向
        },
        {
            path: '/classType',
            name: 'ClassType',
            component: ClassType
            
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/shopCar',
            name: 'ShopCar',
            component: ShopCar
        },
        {
            path: '/zoom',
            name: 'Zoom',
            meta:{
              isLogin:true
            },
            component: Zoom,
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
          path: '/invite',
          name: 'invite',
          component: invite
       },
       {
          path: '/verify',
          name: 'verify',
          component: verify
       }
      ]
})
//导航钩子,进行判断拦截登录
router.beforeEach(function(to, from, next) {
  console.log(to)
    if (window.localStorage.aa) { //判断如果添加到localstorage就修改islogin的值
        to.meta.islogin = false
    }
    if (to.meta.islogin) {
        next('login')
    } else {
        next()
    }
})
export default router;