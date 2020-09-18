<template>
    <div class="header_container">
        <el-breadcrumb separator="/">
<!--            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="handleCommand" menu-align='start'>
            <!--            <img :src="baseImgPath + adminInfo.avatar" class="avator">-->
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
<!--                <el-dropdown-item command="home">首页</el-dropdown-item>-->
                <el-dropdown-item command="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {loginOut} from '@/api/getData'
    // import {baseImgPath} from '@/config/env'
    import { mapState} from 'vuex'

    export default {
        name: "headTop",
        data() {
            return {
                // baseImgPath,
            };
        },
        created () {
            let vm = this;
            vm.getUserInfo();
        },
        computed: {
            ...mapState(['userInfo']),
        },
        methods: {
            // ...mapActions(['getAdminData']),
            async handleCommand(command) {
                let vm = this;
                if (command == 'home') {
                    vm.$router.push('/manage');
                } else if (command == 'loginOut') {
                    const res = await loginOut({id: vm.userInfo.id});
                    if (res.data.status == 200) {
                        vm.$tools.removeSession('userInfo');
                        vm.$message({
                            type: 'success',
                            message: '退出成功'
                        });
                        vm.$router.push('/');
                    } else {
                        vm.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }
            },
            getUserInfo() {
                let vm = this;
                let userInfo = vm.$tools.getSession('userInfo', 'json');
                if (userInfo && !vm.userInfo.id) {
                    vm.$store.commit('saveUserInfo', userInfo);
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
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