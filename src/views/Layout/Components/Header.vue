<template>
	<div id="header-wrap">
		<div class="pull-left heihgt-icon" @click="navMenuState">
			<svg-icon iconClass="menu" className="menu"></svg-icon>
		</div>
		<div class="pull-right">
			<div class="user-info pull-left">
				<img src="../../../assets/user.jpg" alt="">
				{{userNamne}}
			</div>
			<div class="heihgt-icon pull-left" @click="exit"><svg-icon iconClass="exit" className="exit"></svg-icon></div>
		</div>
	</div>
</template>

<script>
	import { computed } from "@vue/composition-api"
	export default{
		name:"Header",
		setup(props,{root}){
			const userNamne = computed(()=> root.$store.state.app.username)
			const navMenuState = () =>{
				// mutations  commit调用  
				root.$store.commit('app/SET_COLLAPSE')
				// 异步  actions   dispatch调用
				// root.$store.dispatch('setMenuStatus')
			}
			// 退出
			const exit = () =>{
				root.$store.dispatch("app/exit").then(()=>{
					root.$router.push({
							name:'Login'
						}
						)
				})
			}
			return {
				navMenuState,
				userNamne,
				exit
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/main.scss";
	#header-wrap {
		position: fixed;
		top: 0;
		right: 0;
		height: 75px;
		line-height: 75px;
		@include webkit(transition,all .3s ease 0s);
		@include webkit(box-shadow,0 3px 16px 0 rgba(0,0,0,.1));
	}
	.open{
		#header-wrap {left: $navMenu;}
	}
	.close{
		#header-wrap { left: $navMenuMin;}
	}
	.heihgt-icon {
		padding: 0 32px;
		svg {
			font-size: 25px;
			margin-bottom: -6px;
			cursor: pointer;
		}
	}
	.user-info {
		height: 100%;
		border-right: 1px solid #ededed;
		padding: 0 32px;
		+ .heihgt-icon {
			padding: 0 28px;
		}
		img {
			width: 40px;
			height: 40px;
			display: inline-block;
			margin-bottom:-14px;
			margin-right:18px;
			border-radius: 50px;
		}
	}
</style>
