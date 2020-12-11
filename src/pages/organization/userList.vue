<template>
    <div class="menuList">
        <search @search="handleSearch">
            <template>
                <el-button type="primary" size="small" icon="el-icon-plus" @click="handleCreate">新建</el-button>
<!--                <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>-->
                <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDeleteAll">删除</el-button>
            </template>
        </search>
        <table-list
                :listData="table.data"
                :listTitle="table.title"
                :listConfig="table.config"
                @checkbox="handleSelected"
        >
            <template #default="{data}">
                <i class="el-icon-edit list-btn" @click="handleEdit(data.row)"></i>
                <i class="el-icon-delete list-btn" @click="handleDelete(data.row)"></i>
<!--                <el-button type="primary" icon="el-icon-edit" circle-->
<!--                           @click="handleEdit(data.row)"></el-button>-->
<!--                <el-button type="danger" icon="el-icon-delete" circle-->
<!--                           @click="handleDelete(data.row)"></el-button>-->
            </template>
        </table-list>
        <pagination :page="page" @page="handlePageChange"></pagination>
        <popover
                :visibleFlag="createUser"
                :title="form.title"
                @cancel="handleCancel" @save="handleSave">
            <template>
                <list-edit :formData="formData" @form="handleFormData" ref="listEdit"></list-edit>
            </template>
        </popover>
    </div>
</template>

<script>
    import TableList from '@/components/Table';
    import Search from '@/components/Search';
    import Pagination from '@/components/Pagination';
    // import {getUserList,delUser} from '@/api/nouse/getData';
    import Popover from '@/components/Popover';
    import listEdit from './userListEdit';
    export default {
        name: "userList",
        components: {
            TableList,
            Search,
            Pagination,
            Popover,
            listEdit,
        },
        data() {
            return {
                table: {
                    data: [],
                    title: [
                        {
                           prop: 'keyId',
                           label: '序号',
                        },
                        {
                            prop: 'username',
                            label: '用户名',

                        },
                        // {
                        //     prop: 'age',
                        //     label: '年龄',
                        //
                        // },
                        // {
                        //     prop: 'email',
                        //     label: '邮箱'
                        // },
                        // {
                        //     prop: 'status',
                        //     label: '状态',
                        // },

                    ],
                    config: {
                        isFixed: false,
                        btnWidth: '120',
                        checkbox: true,
                    }
                },
                page: {
                    currentSize: 5,
                    currentPage: 1,
                    total: 0,
                },
                search: {
                    searchKey: '',
                },
                ids: [],
                createUser: false,
                form: {
                    title: '新建用户'
                },
                formData: {},
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            async init() {
                let vm = this;
                let obj = {
                    ...vm.page,
                    ...vm.search,
                };
                // let res = await getUserList(obj);
                // console.log(res.data);
                vm.$api.user.getUserList(obj)
                .then((res)=>{
                    if (res.data.status === 200) {
                        let data = res.data.data;
                        // console.log(1);
                        data.list.map((item,index) => {
                            if (item) {
                                item.status = String(item.token) === '1' ? '在线' : '离线';
                                item.keyId = vm.page.currentSize * (vm.page.currentPage - 1) + index +1;
                            }
                        });
                        vm.table.data = data.list;
                        vm.page = data.page;
                        console.log(vm.table.data);
                    } else if(res.data.status === 555) {
                        vm.table.data = [];
                        vm.page = {
                            currentSize: 5,
                            currentPage: 1,
                            total: 0,
                        };
                    }else{
                        vm.$message({message: '查询用户列表失败，请重试！', type: 'error'});
                    }
                })
                .catch((err)=>{
                    if(err) {
                        vm.$message({message: '查询用户列表失败，请重试！', type: 'error'});
                    }
                })

            },
            handleEdit() {

            },
            async handleDelete(data) {
                // console.log(data);
                // let vm = this;
                // if(data.id) {
                //     let obj = {id: data.id};
                //     let res = await delUser(obj);
                //     if(res.data.status === 200) {
                //         vm.$message({message: '删除成功！', type: 'success'});
                //     }else {
                //         vm.$message({message: '删除失败，请重试！', type: 'error'});
                //     }
                // }else {
                //     vm.$message({message: '用户列表数据有问题，请刷新重试！', type: 'warning'});
                // }
                // vm.ids = [];
                // vm.init()
            },
            handlePageChange(page) {
                console.log(page);
                let vm = this;
                vm.page = page;
                vm.init();
            },
            handleSearch(search) {
                let vm = this;
                vm.search.searchKey = search;
                vm.init();
            },
            handleSelected(val) {
                // console.log(val);
                this.ids = val;
            },
            handleDeleteAll() {
                let vm = this;
                if(vm.ids.length > 0) {
                    let id = [];
                    vm.ids.map(item=>{
                        if(item) {
                           id.push(`'${item.id}'`);
                        }
                    });
                    vm.handleDelete({id:id.join()});
                }else {
                    vm.$message({message: '请先选择数据！', type: 'warning'});
                }
            },
            handleCreate() {
                this.createUser = true;
            },
            handleCancel() {
                this.createUser = false;
                this.$refs.listEdit.resetForm();
            },
            handleSave() {
                console.log('确定');
                this.createUser = false;
                console.log(this.formData);
            },
            handleFormData(val) {
                this.formData = val;
            }
        }
    }
</script>

<style scoped>

</style>