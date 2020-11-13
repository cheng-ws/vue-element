export default {
    state: {
        userInfo: sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo'):'',
        token: sessionStorage.getItem('token') ? sessionStorage.getItem('token'):'',
        network: true,
    },
    getters: {
        getUserInfo(state) {
            return JSON.parse(state.userInfo);
        }
    },
    mutations: {
        'CHANGE_USER_INFO'(state,userInfo) {
            sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
            state.userInfo = JSON.stringify(userInfo);
        },
        'CHANGE_TOKEN'(state,token) {
            sessionStorage.setItem('token',token);
            state.token = token;
        },
        removeUserInfo (state) {
            sessionStorage.removeItem('userInfo');
            state.userInfo = '';
        },
        removeToken(state) {
            sessionStorage.removeItem('token');
            state.token = '';
        },
        'CHANGE_NET_WORK'(state,network) {
            state.network = network;
        }
    },
    actions: {
        'HOME_USER_INFO' (commit,params) {
            commit('CHANGE_USRE_INFO',params);
        },
        'HOME_TOKEN'(commit,params) {
            commit('CHANGE_TOKEN',params);
        },
        'HOME_NET_WORK'(commit,params) {
            commit('CHANGE_NET_WORK',params);
        }
    }
};