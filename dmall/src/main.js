// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import mock from './mock/mock'

import directive from './directive/index'
import store from './store/index'

console.log(directive)
//注册指令
for(let key in directive) {
	Vue.directive(key, directive[key])
}
Vue.use(VueAwesomeSwiper)//挂载
Vue.use(Vuex)


var instance = axios.create({
	baseURL:'',//打包上线的时候替换baseURL
	timeout:1000,
	headers:{'X-Custom-Header':'footbar'}
})
//添加一个请求拦截器
instance.interceptors.request.use(function(config){
	loadding(true)
	  //在请求发出之前进行一些操作  加载中
	  return config;
});
//添加一个响应拦截器
instance.interceptors.response.use(function(res){
	loadding(false)
	  //在这里对返回的数据进行处理  加载完成
	  return res;
})


Vue.config.productionTip = false
Vue.prototype.$axios = instance;//Vue 原型上有$axios这个方法  其他地方直接this.$axios调用
/* eslint-disable no-new */


var myApp = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted() {
  	console.log(this.$children[0])
  }
})
function loadding(buer) {
	myApp.$children[0].loaddingShow = buer
}
