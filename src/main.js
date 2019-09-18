// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import echarts from 'echarts'

import './assets/css/global.css'
// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
// element按需引入的组件文件
import element from './element/index'

import tools from './common/tools'

import api from './api'
//全局配置api
Vue.prototype.$API =api.call(new Vue())
// 按需引入element组件
Vue.use(element)
// 引用echarts
Vue.prototype.$echarts = echarts
// 配置axios
// axios.defaults.baseURL = '/developer'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.prototype.$http = axios

Vue.prototype.tools = tools
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
