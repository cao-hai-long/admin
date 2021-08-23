import router from "./index.js"

import { getToKen,removeToKen } from "@/utils/app.js"

import store from "../store/index.js"

// 路由守卫
router.beforeEach((to,from,next) => {
	if(getToKen()){
		if(to.path  === "/login"){
			removeToKen("admin_token");
			store.commit('app/SET_TOKEN','');
			store.commit('app/SET_USERNAME','');
			console.log(store)
			next();
		}else{
			next();
		}
		
		console.log("存在")
	}else{
		if (to.path === "/login") {
		next()
		} else {
		next('/login')
		}
		
	}
	// next()
})