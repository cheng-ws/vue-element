import base from './base';
import axios from './httpNew';
import qs from 'qs';
let url = base.sq;
const user = {
    userInfo () {
        return axios.get(`${url}/user/info`);
    },
    getUserList (params) {
       return axios.post(`${url}/user/list`,qs.stringify(params));
    },
    userImage(id,params) {
        return axios.get(`${url}/user/${id}`,{
            params,
        })
    }
};
export default user;