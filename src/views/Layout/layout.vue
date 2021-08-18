<template>
	<div :class="[menuStatus ? 'close' : 'open']">
		<layoutHeader/>
		<layoutMain/>
		<layouttNav/>
	</div>
</template>

<script>
	import layoutHeader from "./Components/Header.vue";
	import layoutMain from "./Components/Main.vue";
	import layouttNav from "./Components/Nav.vue";
	import { computed } from "@vue/composition-api";
	export default {
		 neme:"layout",
		 components:{layoutHeader,layoutMain,layouttNav},
		 setup(props,{ root }){
			 const menuStatus = computed(() => root.$store.state.app.isCollapse)
			 
			 return{
				 menuStatus,
			 }
		 }
	}
</script>

<style lang="sass" scoped>
</style>
