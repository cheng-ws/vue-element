import axios from 'axios'

// // 设置 post 请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// // 配置请求地址
// axios.defaults.baseURL = '/api/mysql';
// // 配置超时时间
// axios.defaults.timeout = 5000;
// // 配置session
// axios.defaults.withCredentials = true;
// // 登录
/**
 * 登陆
 */

export const login = data => axios.post('/login', data);

/**
 * 退出
 */

export const loginOut = data => axios.post('/loginout',data);

//用户管理
/**
 * 获取用户列表信息
 */

export const getUserList = data => axios.post('/user/search',data);

/**
 * api请求量
 */

export const delUser = data => axios.post('/user/del',data);

