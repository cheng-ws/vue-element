export default {
    state: {
        userInfo: null,
        token: null,
        network: true,
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        }
    },
    mutations: {
        'CHANGE_USER_INFO'(state,userInfo) {
            state.userInfo = userInfo;
        },
        'CHANGE_TOKEN'(state,token) {
            state.token = token;
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