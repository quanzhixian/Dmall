import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import homeData from './data/businessIndex';
import suningData from './data/suningIndex'


let mock = new MockAdapter(axios)

//模拟 过2秒之后请求的数据才出来
//mock.onGet('/businessIndex').reply(200,homeData)
mock.onGet('/businessIndex').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,homeData])
		}, 200)
	})
})

mock.onGet('/suningIndex').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,suningData])
		}, 200)
	})
})