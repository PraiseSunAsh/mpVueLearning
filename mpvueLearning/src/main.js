import Vue from 'vue'
import App from './app.vue'

//设置vue的提示功能关闭
Vue.config.productionTip = false;
//声明当前组件的类型
App.mptype = 'app'
const app = new Vue(App);
app.$mount();