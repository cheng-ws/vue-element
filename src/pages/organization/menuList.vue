<template>
    <div class="menuList">
        <search>
            <template>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            </template>
        </search>
        <tree-table
                :listData="table.data"
                :listTitle="table.title"
                :listConfig="table.config"
                @getChildren="handleGetChildren"
        ></tree-table>
    </div>
</template>

<script>
    import TreeTable from '@/components/Table/treeTable';
    import Search from '@/components/Search';
    export default {
        name: "menuList",
        components: {
            TreeTable,
            Search,
        },
        data() {
            return {
                table: {
                    data: [
                        {
                            id: 1,
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            id: 2,
                            date: '2016-05-04',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1517 弄'
                        },
                        {
                            id: 3,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄',
                            hasChildren: true,
                            // children: [{
                            //     id: 31,
                            //     date: '2016-05-01',
                            //     name: '王小虎',
                            //     address: '上海市普陀区金沙江路 1519 弄'
                            // }, {
                            //     id: 32,
                            //     date: '2016-05-01',
                            //     name: '王小虎',
                            //     address: '上海市普陀区金沙江路 1519 弄'
                            // }]
                        },
                        {
                            id: 4,
                            date: '2016-05-03',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1516 弄'
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

                    }
                }
            };
        },
        methods: {
             handleGetChildren(tree,treeNode,resolve) {
                 setTimeout(() => {
                     resolve([
                         {
                             id: 31,
                             date: '2016-05-01',
                             name: '王小虎',
                             address: '上海市普陀区金沙江路 1519 弄'
                         }, {
                             id: 32,
                             date: '2016-05-01',
                             name: '王小虎',
                             address: '上海市普陀区金沙江路 1519 弄'
                         }
                     ])
                 }, 1000)
             },
        }
    }
</script>

<style scoped lang="scss">
    .menuList {

    }
</style>