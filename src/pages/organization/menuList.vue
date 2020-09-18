<template>
    <div class="menuList">
        <tree-table
                :listData="table.data"
                :listTitle="table.title"
                :listConfig="table.config"
        ></tree-table>
    </div>
</template>

<script>
    import TreeTable from '@/components/Table/treeTable';

    export default {
        name: "menuList",
        components: {
            TreeTable,
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
                        }, {
                            id: 2,
                            date: '2016-05-04',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            id: 3,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄',
                            children: [{
                                id: 31,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            }, {
                                id: 32,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            }]
                        }, {
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

<style scoped lang="scss">
    .menuList {

    }
</style>