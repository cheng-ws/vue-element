import base from './base';
import axios from './httpNew';
import qs from 'qs';
let url = base.default;
const login = {
    signup (params) {
      return axios.post(`${url}/login/signup`,qs.stringify(params));
    },
    signdown(params) {
        return axios.post(`${url}/login/signdown`,qs.stringify(params));
    },
    register(params) {
        return axios.post(`${url}/login/register`,qs.stringify(params));
    }
};
export default login;