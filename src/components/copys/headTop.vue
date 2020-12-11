<template>
    <div class="header_container">
        <el-breadcrumb separator="/" class="header-title">
            <!--            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header-btn">
            <i class="el-icon-full-screen" @click="handleExpend"></i>
            <el-dropdown @command="handleCommand" menu-align='start'>
                <!--            <img :src="baseImgPath + adminInfo.avatar" class="avator">-->
                <span class="el-dropdown-link">
                {{currentUserName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                    <!--                <el-dropdown-item command="home">首页</el-dropdown-item>-->
                    <el-dropdown-item command="signdown">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>
    // import {baseImgPath} from '@/config/env'
    // import { mapMutations } from 'vuex'

    export default {
        name: "headTop",
        data () {
            return {
                // baseImgPath,
                currentUserName: '',
            };
        },
        // computed: {
        //     ...mapState(['userInfo']),
        // },
        created () {
            let vm = this;
            vm.currentUserName = vm.$store.getters.getUserInfo.username;
        },
        methods: {
            // ...mapActions(['getAdminData']),
            // ...mapMutations(['removeToken']),
            //全屏
            handleExpend () {
                let vm = this;
                if (document.fullscreenElement) {
                    // console.log("进入全屏");
                    vm.$tools.exitFullscreen();
                } else {
                    // console.log("退出全屏");
                    vm.$tools.launchFullscreen(document.documentElement);
                }
            },
            handleCommand (command) {
                let vm = this;
                if (command == 'home') {
                    vm.$router.push('/manage');
                } else if (command == 'signdown') {
                    vm.$api.login.signdown({id: vm.$store.getters.getUserInfo._id})
                        .then((res) => {
                            if (res.data.status == 200) {
                                // vm.$tools.removeSession('userInfo');
                                vm.$store.commit('removeToken');
                                vm.$store.commit('removeUserInfo');
                                vm.$router.push('/login');
                                vm.$message({
                                    type: 'success',
                                    message: '退出成功'
                                });
                            } else {
                                vm.$message({
                                    type: 'error',
                                    message: res.data.msg
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/mixin';

    .header_container {
        /*background-color: #EFF2F7;*/
        border-bottom: 1px solid #eeeeee;
        height: 60px;
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
        padding: 0 20px;
        line-height: 60px;

        .header-title {
            display: inline-block;
        }

        .header-btn {
            float: right;

            i {
                margin-right: 10px;
            }
        }
    }

    .avator {
        @include wh(36px, 36px);
        border-radius: 50%;
        margin-right: 37px;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>