import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/views/Layout/layout.vue";

const routes = [
  {
    path: "/",
    redirect:'login',
	hidden:true,
	meta:{
		name:'主页'
	},
  },
  {
    path: "/login",
    name: "Login",
	hidden:true,
	meta:{
		name:'登录页'
		},
    component: () => import( "../views/login/login.vue"),
  },
  {
	path:"/layout",
	name:"layout",
	redirect:'index',
	meta:{
		name:"控制台",
		icon:"console",
	},
	component:Layout,
	children:[
		{
			path:"/index",
			name:"index",
			meta:{
				name:"首页"
			},
			component:()=>import("../views/console/console.vue")
		}
	]
  },
  // 信息管理
  {
	  path:"/info",
	  name:"Info",
	  meta:{
		  name:"信息管理",
		  icon:"info",
	  },
	  component:Layout,
	  children:[
		  {
			  path:"/infoIndex",
			  name:"InfoIndex",
			  meta:{
				  name:"信息列表",
			  },
			  component:()=>import("../views/info/info.vue"),
		  },
		  {
			  path:"/infoCategory",
			  name:"infoCategory",
			  meta:{
				  name:"信息分类",
			  },
			  component:()=>import("../views/info/caregory.vue"),
		  }
	  ]
  },
  // 用户
  {
	  path:"/user",
	  name:"User",
	  meta:{
		  name:"用户管理",
		  icon:"user",
	  },
	  component:Layout,
	  children:[
		  {
			  path:"/userIndex",
			  name:"UserIndex",
			  meta:{
				  name:"用户列表",
			  },
			  component:()=>import("../views/user/user.vue")
		  },
	  ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
