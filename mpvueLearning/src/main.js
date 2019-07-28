import Vue from 'vue'
//在全局中引入store
import store from './store/store'
import App from './app.vue'

//设置vue的提示功能关闭
Vue.config.productionTip = false;
//声明当前组件的类型
App.mptype = 'app';

//把store对象放到Vue的原型上
//这样的话每个Vue示例都可以使用
Vue.prototype.$store = store;
const app = new Vue(App);
app.$mount();