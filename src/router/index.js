import Vue from "vue";
import Router from "vue-router";

//登录页
import Login from '@/views/login';
import Home from '@/views/home';
import HtmlPage from '@/views/html';
import CssPage from '@/views/css';
import JsPage from '@/views/js';
import EChart from '@/views/echart';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const router = new Router({
    /*
    * mode {hash} 开发环境使用
    * mode {history} 生产环境使用
    * */
    mode: process.env.NODE_ENV === 'development' ? "hash" : "history",
    // mode: "hash",
    base: '/',
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [
                {
                    path: '/html_page',
                    name: 'html',
                    component: HtmlPage
                },
                {
                    path: '/css_page',
                    name: 'css',
                    component: CssPage,
                },
                {
                    path: '/js_page',
                    name: 'js',
                    component: JsPage
                },
                {
                    path: '/echart',
                    name: 'echart',
                    component: EChart,
                }
            ]
        },


    ],
});
// 路由权限控制
router.beforeEach((to, from, next) => {
    let userInfo = sessionStorage.getItem('userInfo');
    let info = JSON.parse(userInfo);
    if (info.username) {
        next('/home');
    } else {
        next('/');
    }
});
export default router;