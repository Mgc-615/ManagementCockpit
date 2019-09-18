import Vue from 'vue'
import Router from 'vue-router'
// import Cookies from 'js-cookie'
import Common from '@/components/Common'
import Home from '@/components/Home'
import Share from '@/components/Share'
import Setting from '@/components/Setting'
import Pen from '@/components/Pen'
import Wrench from '@/components/Wrench'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  // 地址
  routes: [
    { path: '/', redirect: '/common' },
    // 后台页面公共样式
    {
      path: '/common',
      component: Common,
      redirect: '/home',
      // 后台所有页面（以子组件）
      children: [
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
          path:'/share/:id',
          name:'share',
          component:Share
        },
        {
          path:'/setting/:id',
          name:'setting',
          component:Setting
        },
        {
          path:'/wrench',
          name:'wrench',
          component:Wrench
        },
        {
          path:'/hsse',
          name:'hsse',
          component:Pen
        },
      ]
    }
  ]
})
// 路由导航守卫，检测token如果不存在，就跳转到login登录组件去
// router.beforeEach((to, from, next) => {
//   // 访问/login 就直接pass
//   if (to.path === '/login') {
//     return next()
//   }
//   // 访问非login，判断token
//   // var token = window.sessionStorage.getItem('token')
//   // var token = Cookies.get('token')
//   if (!token) {
//     return next('/login')
//   }
//   next() // token存在，继续....
// })

export default router
