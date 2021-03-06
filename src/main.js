import Vue from 'vue'
import App from './App.vue'
//全局css
// import 'minireset.css/minireset.css';
// import '@/assets/styles/global.scss';
import '@/assets/styles/commonCopy.scss';
// import '@/assets/styles/mixin.scss';
//引入字体图标库
import '@/assets/font/iconfont.css';
// 路由文件
import router from "@/router";
// 状态管理
import store from "@/store";
import * as echarts from 'echarts';
// Vue.config.productionTip = false;
import walden from '@/assets/json/walden.json';
// console.log(walden);
// let waldenTheme = JSON.parse(walden);
echarts.registerTheme('walden',walden);
// Vue.use(echarts);
Vue.prototype.$echarts = echarts;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
import tools from '@/assets/utils/jsTool.js';
Vue.prototype.$tools = tools;
// import {Loading,MessageBox,Notification,Message} from 'element-ui';
// Vue.use(Loading);
// Vue.use(MessageBox);
// Vue.use(Notification);
// Vue.use(Message);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
import api from './api';
Vue.prototype.$api = api;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
