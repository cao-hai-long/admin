import service from "@/utils/request.js"

export function login(data) {
    return service.request({
        method: 'post',
        url: '/getSms/',
        data
        // data:data,左边的data是变量名<key>后台接收的 右边的data是接收的参数 如果两种都是同名的 可以写成单个即可（es6的写法）
    })
}