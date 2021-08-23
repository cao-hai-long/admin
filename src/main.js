import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import VueCompositionApi from '@vue/composition-api';
import 'element-ui/lib/theme-chalk/index.css';
// 自定义全局组件
import "./icons/icons.js"
// 引入路由守卫
import "./router/premit.js";

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;


// runtime(运行模式)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
