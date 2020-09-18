<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column v-for="item in tableTitle"
                             :prop="item.prop"
                             :label="item.label"
                             :key="item.id">
            </el-table-column>
            <el-table-column label="操作" :width="tableConfig.btnWidth">
                <slot></slot>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "treeTable",
        prop: {
            listData: {
                type: Array,
                default: () => []
            },
            listTitle: {
                type: Array,
                default: () => []
            },
            listConfig: {
                type: Object,
                default: () => {
                    return {
                        isFixed: true,
                        btnWidth: ''
                    };
                }
            }
        },
        data() {
            return {
                tableData: this.listData,
                tableTitle: this.listTitle,
                tableConfig: this.listConfig,
            }
        },
        methods: {
            load(tree, treeNode, resolve) {
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
            }
        },
    }
</script>

<style scoped>

</style>