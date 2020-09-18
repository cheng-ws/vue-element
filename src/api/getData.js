import axios from 'axios'

// 设置 post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 配置请求地址
axios.defaults.baseURL = '/api/mysql';
// 配置超时时间
axios.defaults.timeout = 5000;
// 配置session
axios.defaults.withCredentials = true;
/**
 * 登陆
 */

export const login = data => axios.post('/login', data);

/**
 * 退出
 */

export const loginOut = data => axios.post('/loginout',data);

/**
 * 获取用户信息
 */

export const getAdminInfo = () => axios.get('/admin/info');

/**
 * api请求量
 */

export const apiCount = date => axios('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => axios('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => axios('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => axios.get('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => axios('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => axios('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => axios('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => axios.get('/admin/count');

/**
 * 获取定位城市
 */

export const cityGuess = () => axios('/v1/cities', {
    type: 'guess'
});

/**
 * 添加商铺
 */

export const addShop = data => axios('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => axios('/v1/pois', {
    type: 'search',
    city_id: cityid,
    keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => axios('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => axios('/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => axios('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

// export const foodCategory = (latitude, longitude) => axios('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

export const getResturants = data => axios('/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => axios('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => axios('/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => axios('/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => axios('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => axios('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => axios('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => axios('/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => axios('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => axios('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => axios('/shopping/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

export const getUserList = data => axios('/v1/users/list', data);

/**
 * 获取用户数量
 */

export const getUserCount = data => axios('/v1/users/count', data);

/**
 * 获取订单列表
 */

export const getOrderList = data => axios('/bos/orders', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => axios('/bos/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => axios('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => axios('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => axios('/v1/user/city/count');
