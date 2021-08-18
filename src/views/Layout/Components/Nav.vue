<template>
	<div id="nav-wrap">
		<h1 class="logo">
			<img src="@a/logol.png" alt="">
		</h1>
		<el-menu 
		default-active="1-4-1" 
		class="el-menu-vertical-demo" 
		:collapse="isCollapse" 
		background-color="transparent" 
		text-color="#fff" 
		active-text-color="#fff"
		router
		>
			<template v-for="(item,index) in routers" >
				<el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
					<!-- 一级菜单 -->
					<template slot="title">
						<!-- <i :class="item.meta.icon"></i> -->
						<svg-icon :iconClass="item.meta.icon" :className="item.meta.icon"/>
						<span slot="title">{{item.meta.name}}</span>
					</template>
					<!-- 子级菜单 -->	
					<el-menu-item v-for="sbutiem in item.children" :key="sbutiem.id" :index="sbutiem.path">{{sbutiem.meta.name}}</el-menu-item>
				</el-submenu>
			</template>
			
		</el-menu>
	</div>
</template>

<script>
	import {
		ref,reactive,computed
	} from "@vue/composition-api";
	export default {
		name: 'navMenu',
		setup(props, {root}) {
			// data 数据
			
			const routers = reactive(root.$router.options.routes)
			// console.log(routers)
			
			// computed 监听
			const isCollapse = computed(() => root.$store.state.app.isCollapse)
			
			
			return {
				routers,
				isCollapse,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/main.scss";
	.logo {
		text-align: center;
		img {
			margin:28px auto 0;
			@include webkit(transition,all .3s ease 0s);
		}
	}
	#nav-wrap {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		background-color: #344a5f;
		@include webkit(transition,all .3s ease 0s);
		svg{
			font-size: 20px;
			margin-right: 10px;
		}
	}
	.el-submenu  .is-opened .is-active{
		background-color: #f56c6c !important;  
	}
	.open{
		#nav-wrap {width: $navMenu;}
		.logo {
			img{
				width: 92px;
			}
		}
	}
	.close{
		#nav-wrap { width: $navMenuMin;}
		.logo {
			img{
				width: 60%;
			}
		}
	}
</style>
