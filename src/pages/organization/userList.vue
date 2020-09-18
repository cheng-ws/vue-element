<template>
    <div class="menuList">
        <table-list
                :listData="table.data"
                :listTitle="table.title"
                :listConfig="table.config"
        >
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope)"></el-button>
            </template>
        </table-list>
    </div>
</template>

<script>
    import TableList from '@/components/Table';

    export default {
        name: "userList",
        components: {
            TableList,
        },
        data() {
            return {
                table: {
                    data: [
                        {
                            date: '2016-05-03',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-04',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-08',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-06',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-07',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }
                    ],
                    title: [
                        {
                            prop: 'date',
                            label: '时间',

                        },
                        {
                            prop: 'name',
                            label: '名字',

                        },
                        {
                            prop: 'address',
                            label: '地址',
                        },

                    ],
                    config: {
                        isFixed: false,
                        btnWidth: '120'
                    }
                }
            };
        },
        methods: {
            handleEdit() {

            },
            handleDelete() {

            }
        }
    }
</script>

<style scoped>

</style>