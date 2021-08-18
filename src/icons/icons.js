import Vue from "vue";
import SvuIcon from "./SvgIcon.vue"
Vue.component("svg-icon",SvuIcon);

// require.context 读取指定 目录所以文件
// 第一个参数 目录
// 第二个参数 是否遍历子级目录
// 第三参数 定义遍历文件规则
 

const req = require.context('./svg',false,/\.svg$/)
// se6 写法
const requireAll = requireContext =>{
	// console.log(requireContext.keys())
	return requireContext.keys().map(requireContext)
}
// se5 写法
// const requireAll = function(requireContext){
// 	return requireContext.keys().map(requireContext)
// }  
requireAll(req)
