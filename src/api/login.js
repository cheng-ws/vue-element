import base from './base';
import axios from './httpNew';
import qs from 'qs';
let url = base.default;
const login = {
    signup (params) {
      return axios.post(`${url}/login/signup`,qs.stringify(params));
    },
    signout(params) {
        return axios.post(`${url}/login/signout`,qs.stringify(params));
    }
};
export default login;