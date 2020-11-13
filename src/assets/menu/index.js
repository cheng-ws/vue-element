const menuList = [
    {
        path: 'home',
        title: '首页',
        icon: 'el-icon-menu'
    },
    {
        title: '组织',
        icon: 'el-icon-document',
        path: 'organization',
        children: [
            {
                path: 'menuList',
                title: '菜单'
            },
            {
                path: 'controlList',
                title: '权限'
            },
            {
                path: 'roleList',
                title: '角色'
            },
            {
                path: 'userList',
                title: '用户'
            },
        ]
    },
    {
        title: '图表',
        icon: 'el-icon-map-location',
        path: 'chartpicture',
        children: [
            {
                path: 'pie',
                title: '饼图'
            },
            {
                path: 'mapChina',
                title: '地图'
            },
            {
                path: 'mapLine',
                title: '线图'
            },
            {
                path: 'mapCar',
                title: '虚拟车'
            },
        ]
    }

    // {
    //     path: 'layoutHor',
    //     title: ['布局', '水平']
    // },
    // {
    //     path: 'addShop',
    //     title: ['添加数据', '添加商铺']
    // },
    // {
    //     path: 'htmlFive',
    //     title: ['HTML', 'Five']
    // },
];
export default menuList;