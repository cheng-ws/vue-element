<template>
    <el-form :model="form">
        <el-form-item label="名称:" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="年龄:" :label-width="formLabelWidth">
            <el-input-number v-model="form.age" @change="handleAgeChange" :min="18" :max="100" label="年龄"></el-input-number>
        </el-form-item>
        <el-form-item label="邮箱:" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "userListEdit",
        props: {
            formData: {
                type: Object,
                default: ()=>{
                    return {};
                }
            },

        },
        watch:{
            form: {
                handler(val) {
                    this.$emit('form',val);
                },
                immediate: true,
            },
            formData: {
                handler(val) {
                    if(Object.keys(val).length > 0) {
                        val.age = parseInt(val.age);
                        this.form = val;
                    }
                },
                immediate: true,
            }
        },
        data() {
            return {
                form: {
                    username: '',
                    age: 18,
                    email: '',
                    password: '',
                },
                formLabelWidth: '150px'
            };
        },
        methods: {
            handleAgeChange(val){
                this.form.age = val;
            },
            resetForm() {
                this.form = {
                    username: '',
                    age: 18,
                    email: '',
                    password: '',
                };
            }
        }
    }
</script>

<style scoped>

</style>