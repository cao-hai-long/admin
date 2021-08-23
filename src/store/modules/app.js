import {
	Login
} from "@/api/login.js";
import { setToKen,setUserName,getUserName,removeToKen} from "@/utils/app.js"
const state = {
	isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
	to_ken: '',
	username: getUserName() || "",
};

const getters = {};

const mutations = {
	SET_COLLAPSE(state) {
		state.isCollapse = !JSON.parse(sessionStorage.getItem('isCollapse'))
		sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
	},
	SET_TOKEN(state,value) {
		state.to_ken = value
	},
	SET_USERNAME(state,value) {
		state.username = value
	},
};

const actions = {
	setMenuStatus(content, data) {
		// 同步
		// content.commit('SET_COLLAPSE')
	},
	Login(content, repuestData) {
		return new Promise((resolve, reject) => {
			//接口
			Login(repuestData).then(req => {
				let data = req.data.data;
				content.commit("SET_TOKEN",data.token)
				content.commit("SET_USERNAME",data.username)
				setToKen(data.token)
				setUserName(data.username)
				resolve(req)
			}).catch(error => {
				reject(error)
			})
		})
	},
	exit({ commit }){
		return new Promise((resolve, reject) =>{
			commit("SET_TOKEN",'');
			commit("SET_USERNAME",'');
			removeToKen();
			resolve();
		})
	}

};


// const app = {
// 	// state（斯跌特） 存储的是 单一的数据
// 	state: {
// 		isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
// 	},
// 	// getters(给特斯) computed 和计算属性相同  可以计算属性
// 	getters: {},
// 	mutations: {
// 		// 这里面的函数是通过 this.$store.commit('函数名字',c参数)  调用  3.0 root.$store.commit('kkk',100)
// 		SET_COLLAPSE(state) {
// 			state.isCollapse = !JSON.parse(sessionStorage.getItem('isCollapse'))
// 			sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
// 		},

// 	},
// 	actions: {
// 		setMenuStatus(content, data) {
// 			// 同步
// 			// content.commit('SET_COLLAPSE')
// 		},
// 		login(content, repuestData) {
// 			return new Promise((resolve, reject) => {
// 				//接口
// 				Login(repuestData).then(下· => {
// 					resolve(req)
// 				}).catch(error => {
// 					reject(error)
// 				})
// 			})
// 		}

// 	},
// 	modules: {},
// }

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
