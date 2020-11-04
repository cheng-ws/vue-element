import Vue from 'vue'
import  Router from 'vue-router'

Vue.use(Router);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
};
import login from '@/pages/login';
import manage from "@/pages/manage";
import home from "@/pages/home";
import MenuList from "@/pages/organization/menuList";
import ControlList from '@/pages/organization/controlList';
import RoleList from '@/pages/organization/roleList';
import UserList from '@/pages/organization/userList';
import addShop from '@/pages/addShop';
import htmlFive from '@/pages/htmlFive';
import pie from '@/pages/charts/pie';
import mapChina from "@/pages/charts/mapChina";
import mapLine from "@/pages/charts/mapLine";
import mapCar from "@/pages/charts/car";
import horizontal from "@/pages/layout/horizontal";
// import chat from "@/pages/chat/index";
const routes = [
    {
        path: '/',
        component: login,
    },
    {
        path: '/manage',
        component: manage,
        name: '',
        children: [
            {
                path: '',
                component: home,
                meta: ['首页'],
            },
            {
                path: '/menuList',
                component: MenuList,
                meta: ['组织','菜单']
            },
            {
                path: '/controlList',
                component: ControlList,
                meta: ['组织','权限']
            },
            {
                path: '/roleList',
                component: RoleList,
                meta: ['组织','角色'],
            },
            {
                path: '/userList',
                component: UserList,
                meta: ['组织', '用户']
            },
            {
                path: '/addShop',
                component: addShop,
                meta: ['添加数据','添加商铺']
            },
            {
                path: '/htmlFive',
                component: htmlFive,
                meta: ['HTML','Five']
            },
            {
                path: '/pie',
                component: pie,
                meta: ['图表','饼图']
            },
            {
                path: '/mapChina',
                component: mapChina,
                meta: ['图表','地图']
            },
            {
                path: '/mapLine',
                component: mapLine,
                meta: ['图表','线图']
            },
            {
                path: '/mapCar',
                component: mapCar,
                meta: ['图表','虚拟车']
            },
            {
                path: '/layoutHor',
                component: horizontal,
                meta: ['布局','水平']
            },
            // {
            //     path: '/chat',
            //     component: chat,
            //     meta: ['沟通']
            // }
        ]
    }
];
export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
});