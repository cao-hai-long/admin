// Cookie 
// import cookie from "js-cookie";
import Cookies from 'js-cookie';


// 获取
export function getToKen(){
	return Cookies.get('admin_token');
}
// 设置
export function setToKen(toKen){
	return Cookies.set("admin_token",toKen)
}
export function removeToKen(value){
	return Cookies.remove(value)
}

export function setUserName(value){
	return Cookies.set("username",value)
}

export function getUserName(){
	return Cookies.get("username")
}