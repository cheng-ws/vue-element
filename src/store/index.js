// import Vue from "vue";
// import Vuex from "vuex";
//
// Vue.use(Vuex);
//
// import home from './modules/home';
//
// export default new Vuex.Store({
//     modules: {
//         home,
//
//     }
// });
import Vue from 'vue'
import Vuex from 'vuex'
// import {getAdminInfo} from '@/api/getData'
Vue.use(Vuex);

const state = {
    userInfo: {
        avatar: 'default.jpg'
    },
};

const mutations = {
    saveUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
};

const actions = {
    // getUserInfo({commit}) {
    //     let vm = this;
    //     let userInfo = vm.$tools.getSession('userInfo', 'json');
    //     if (userInfo) {
    //         commit('saveUserInfo',userInfo);
    //         return vm.$tools.outPut(200);
    //     } else {
    //         commit('saveUserInfo',{});
    //         return vm.$tools.outPut(500);
    //     }
    // }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
})
