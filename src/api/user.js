import base from './base';
import axios from './httpNew';
import qs from 'qs';
let url = base.default;
const user = {
    userInfo () {
        return axios.get(`${url}/user/info`);
    },
    getUserList (params) {
       return axios.post(`${url}/login/userlist`,qs.stringify(params));
    },
    userImage(id,params) {
        return axios.get(`${url}/user/${id}`,{
            params,
        })
    }
};
export default user;