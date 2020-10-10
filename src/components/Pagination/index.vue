<template>
    <div class="pagination">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="sizes"
                :page-size="currentSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                v-if="total > 0">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            page: {
                type: Object,
                default: () => {
                    return {
                        currentSize: 5,
                        currentPage: 1,
                        pageSize: [5, 10, 15, 20],
                        total: 0,
                    };
                }
            }
        },
        data() {
            return {
                currentSize: 5,
                currentPage: 1,
                sizes: [5, 10, 15, 20] ,
                total: 0,
            };
        },
        watch: {
            page: {
                handler(val) {
                    let vm = this;
                    console.log(val);
                    if(val.total > 0) {
                        vm.currentSize = val.currentSize;
                        vm.currentPage = val.currentPage;
                        vm.total = val.total;
                        if(val.pageSize) {
                            vm.sizes = val.pageSize;
                        }
                    }

                },
                immediate: true,
            },
        },
        methods: {
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                let page = {
                    currentPage: this.currentPage,
                    currentSize: val,
                };
                this.handleChange('size', page);
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                let page = {
                    currentPage: val,
                    currentSize: this.currentSize,
                };
                this.handleChange('page', page);
            },
            handleChange(type, page) {
                if (type === 'size') {
                    page.currentPage = 1;
                }
                this.$emit('page', page);
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination {
        float: right;
    }
</style>