import Vue from 'vue';
import Vuex from 'vuex'
import shoppingCar from './modules/shoppingCar'
import showProducts from './modules/showProducts'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		shoppingCar,
		showProducts
	}
})

// export  default new Vuex.Store({
// 	state:{
// 		count:0
// 	},
// 	getters:{
// 		doneTodos:state=> {
// 			return state.todos.filter(todo=>todo.done)
// 		}
// 	},
// 	mutations:{
// 		increment (state) {
// 			state.count++
// 		}
// 	},
// 	actions:{
// 		increment ({commit,state}, products) {
// 			if(state.count > products) {
// 				alert('不能超过10件')
// 			}else{
// 				commit('increment')
// 			}
// 		}
// 	}
// }) 