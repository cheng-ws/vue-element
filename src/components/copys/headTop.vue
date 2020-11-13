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
                <el-dropdown-item command="signdown">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    // import {baseImgPath} from '@/config/env'
    import { mapMutations } from 'vuex'

    export default {
        name: "headTop",
        data() {
            return {
                // baseImgPath,
            };
        },
        // computed: {
        //     ...mapState(['userInfo']),
        // },
        methods: {
            // ...mapActions(['getAdminData']),
            ...mapMutations(['removeToken']),
            handleCommand(command) {
                let vm = this;
                if (command == 'home') {
                    vm.$router.push('/manage');
                } else if (command == 'signdown') {
                    vm.$api.login.signdown({id: vm.$store.getters.getUserInfo._id})
                    .then((res)=>{
                        if (res.data.status == 200) {
                            vm.
                            vm.$tools.removeSession('userInfo');

                            // console.log(vm.mapMutations);
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
                    .catch((err)=>{
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