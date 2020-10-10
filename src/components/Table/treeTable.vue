<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                lazy
                :load="load"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column v-for="item in tableTitle"
                             :prop="item.prop"
                             :label="item.label"
                             :key="item.id">
            </el-table-column>
            <el-table-column label="操作" v-if="tableConfig.btnWidth > 0" :width="tableConfig.btnWidth">
                <slot></slot>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "treeTable",
        props: {
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
                        btnWidth: '0'
                    };
                }
            },
        },
        data() {
            return {
                tableData: this.listData,
                tableTitle: this.listTitle,
                tableConfig: this.listConfig,
            }
        },
        mounted() {
            // console.log(this.tableData);
        },
        methods: {
            load(tree, treeNode, resolve) {
                let vm = this;
                vm.$emit('getChildren',tree,treeNode,resolve);
            }
        },
    }
</script>

<style scoped>

</style>