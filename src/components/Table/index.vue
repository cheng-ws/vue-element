<template>
    <div class="table-box">
        <el-table
                :data="tableData"
                :height="tableConfig.height"
                border
                row-key="id"
                style="width: 100%"
                @selection-change="handleSelectionChange"
        >
            <el-table-column
                    v-if="tableConfig.checkbox"
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column v-for="(item,index) in tableTitle"
                             :prop="item.prop"
                             :label="item.label"
                             :key="index">
            </el-table-column>
            <el-table-column label="操作" class="btns" v-if="tableConfig.btnWidth > 0" :width="tableConfig.btnWidth">
                <template slot-scope="scope">
                    <slot :data="scope"></slot>
<!--                    <el-button type="primary" icon="el-icon-edit" circle-->
<!--                               @click="handleEdit(scope.$index, scope)"></el-button>-->
<!--                    <el-button type="danger" icon="el-icon-delete" circle-->
<!--                               @click="handleDelete(scope.$index, scope)"></el-button>-->
                </template>
            </el-table-column>
        </el-table>
    </div>

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
                        btnWidth: '0',
                        checkbox: true,
                    };
                }
            }

        },
        data() {
            return {
                tableData: [],
                tableTitle: [],
                tableConfig: {},
            }
        },
        watch: {
            'listData': {
                handler(val){
                    this.tableData = val;
                },
                deep: true,
                immediate: true,
            },
            'listTitle': {
                handler(val){
                    this.tableTitle = val;
                },
                deep: true,
                immediate: true,
            },
            'listConfig': {
                handler(val){
                    this.tableConfig = val;
                },
                deep: true,
                immediate: true,
            }
        },
        mounted() {

        },
        methods: {
            handleSelectionChange(val){
                // console.log(val);
                let vm = this;
                vm.$emit('checkbox',val);
            },
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

<style scoped lang="scss">
.table-box {
    margin: 20px 0;
    .btns {

    }
}
</style>