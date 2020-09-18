<template>
    <el-table
            :data="tableData"
            :height="tableConfig.height"
            border
            style="width: 100%"
    >
        <el-table-column v-for="item in tableTitle"
                         :prop="item.prop"
                         :label="item.label"
                         :key="item.id">
        </el-table-column>
        <el-table-column label="操作" :width="tableConfig.btnWidth">
            <slot></slot>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "index",
        props: {
            //列表数据
            listData: {
                type: Array,
                default: () => [],
            },
            //列表表头
            listTitle: {
                type: Array,
                default: () => []
            },
            //列表配置数据
            listConfig: {
                type: Object,
                default: () => {
                    return {
                        //是否固定宽度
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
            getWidth(item) {
                let vm = this;

                if (vm.tableConfig.isFixed) {
                    return;
                } else {
                    return item.width;
                }
            }
        }
    }
</script>

<style scoped>

</style>