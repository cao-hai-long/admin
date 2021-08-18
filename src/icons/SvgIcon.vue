<template>
	<svg :class="svgClass" aria-hidden="true">
		<use :xlink:href="iconNamne"></use>
	</svg>
</template>
<script>
	import { ref,reactive,computed} from "@vue/composition-api"
	export default {
		name:'svgIcon',
		// props:["iconClass","className"], //普通接收父组件的数据
		props:{
			iconClass:{
				type:String, //定义接收的值类型
				default:"",//默认值  如果传入就是传入的值  如果没有传入 就是默认值
			},
			className:{
				type:String,
				default:"",  
			}
		},
		setup(props){
			// 计算属性 得出最终结果，并返回
			const iconNamne = computed(() => `#icon-${props.iconClass}`)
			const svgClass =  computed(() => {
				if(props.className){
					return `svg-icon ${props.className}`
				}else{
					return `svg-icon`
				}
			})
			return {
				iconNamne,
				svgClass
			}
		}
	}
</script>

<style lang="scss" scoped>
.svg-icon{
	width: 1em;
	height: 1em;
	fill:currentcolor;
}
	
</style>
