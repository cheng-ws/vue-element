<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>elm后台管理系统</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
<!--                <p class="tip">温馨提示：</p>-->
<!--                <p class="tip">未登录过的新用户，自动注册</p>-->
<!--                <p class="tip">注册过的用户可凭账号密码登录</p>-->
            </section>
        </transition>
    </div>
</template>

<script>
    // import {login} from '@/api/getData';
    import {mapMutations} from 'vuex';

    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                showLogin: false,
            };
        },
        mounted() {
            this.showLogin = true;
        },
        methods: {
            ...mapMutations(['CHANGE_USER_INFO','CHANGE_TOKEN']),
            submitForm(formName) {
                let vm = this;
                vm.$refs[formName].validate((valid) => {
                    if (valid) {
                        let userInfo = {
                            username: vm.loginForm.username,
                            password: vm.loginForm.password
                        };
                        vm.$api.login.signup(userInfo)
                        .then(res=>{
                            // console.log(res);
                             let data = res.data.data;
                             let userInfo = {
                                 _id: data._id,
                                 username: data.username,
                                 createAt: data.createAt,
                             };
                             vm.CHANGE_TOKEN(data.token);
                             vm.CHANGE_USER_INFO(userInfo);
                             vm.$router.push({
                                 path: vm.$route.params.redirect || '/',
                             }); //跳转到指定页面
                        })
                        .catch(err=>{
                            console.log(err);
                        })

                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/mixin';

    .login_page {
        background-color: #324057;
    }

    .manage_tip {
        position: absolute;
        width: 100%;
        top: -100px;
        left: 0;

        p {
            font-size: 34px;
            color: #fff;
        }
    }

    .form_contianer {
        @include wh(320px, 210px);
        @include ctp(320px, 210px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;

        .submit_btn {
            width: 100%;
            font-size: 16px;
        }
    }

    .tip {
        font-size: 12px;
        color: red;
    }

    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }

    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>