import Vue from 'vue'


let shopList = JSON.parse(window.localStorage['shopList'])

const shoppingCar = {
	namespaced: true,
	state:{
		shopList: shopList || []
	},
	getters: {
		shoppCount:state => {
			let count = 0;
			for(var item in state.shopList) {
				count += state.shopList[item].count
			}
			return count;
		}
	},
	mutations:{
		addCarItem (state,item) {
			item.count = 1;
			state.shopList.push(item)
			window.localStorage['shopList'] = JSON.stringify(state.shopList)
		},
		updateItemCount (state, config) {
			var count = state.shopList[config.itemIndex].count+config.count;
			Vue.set(state.shopList[config.itemIndex],'count',count)
			//state.shopList.splice(config.itemIndex, 1, state.shopList[config.itemIndex])   
			state.shopList=state.shopList;
			window.localStorage['shopList'] = JSON.stringify(state.shopList)
			if (state.shopList[config.itemIndex].count <= 0) {
                var a = confirm('确定删除吗?')
                if (a) {
                    state.shopList.splice(config.itemIndex, 1)
                }
			}
		}
	},
	actions:{
		addCarItem ({commit,state},item) {//item是super.vue methods 里的参数(i)
			for(var i in state.shopList){
				if(state.shopList[i].spId==item.spId) {//如果点击重复的商品，就触发更新
					commit('updateItemCount',{
						itemIndex:i,
						count:1
					})
					return ;
				}
			}
			commit('addCarItem',item)
		},
		add({commit, state}, item) {
			commit('updateItemCount',item)
		},
		sub({commit, state}, item) {
			commit('updateItemCount',item)
		},
	}
}
		// updataItemCount (state,config){
		// 	state.shopList.splice(config.index, 1, state.shopList[config.index])   //用splice的好处是对相同商品的数量进行更改时，footer中的数量也会相应改变
		// 	//window.localStorage['shopList'] = JSON.stringify(state.shopList)   //对数据进行存储的另一种写法
			
		// 	if (state.shopList[config.index].count <= 0) {   //删除数据
  //               var a = confirm('确定删除吗?')
  //               if (a) {
  //                   state.shopList.splice(config.index, 1)
  //               }else{
  //               	state.shopList[config.index].count=1
  //               }

  //           }
		// }

export default shoppingCar ;


