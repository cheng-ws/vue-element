<template>
    <div class="search-box">
        <div class="search" :style="activeStyle">
            <el-input placeholder="请输入内容" v-model="inputValue" class="search-input">
            </el-input>
            <el-button icon="el-icon-search" class="search-btn" @click="handleSearch"></el-button>
        </div>
        <div class="btn-s" :style="{width: `calc(100% - ${activeStyle.width})`}">
            <div class="btn-content">
                <slot></slot>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "index",
        props: {
            placeholderValue: {
                type: String,
                default: '请输入内容'
            },
            activeStyle: {
                type: Object,
                default: () => {
                    return {
                        width: '200px'
                    };
                }
            }
        },
        data() {
            return {
                inputValue: '',
            };
        },
        methods: {
            handleSearch() {
                this.$emit('search', this.inputValue);
            }
        }
    }
</script>

<style scoped lang="scss">
    .search-box {
        /*margin-bottom: 20px;*/
        .search {
            display: inline-block;
            width: 200px;
            .search-input {
                display: inline-block;
                width: calc(100% - 60px);

                /deep/ .el-input__inner {
                    border-radius: 4px 0px 0px 4px !important;
                    border-right: 0 !important;
                }
            }

            .search-btn {
                display: inline-block;
                width: 60px;
                border-radius: 0 4px 4px 0 !important;
            }
        }

        .btn-s {
            display: inline-block;
            vertical-align: middle;
            .btn-content {
                float: right;
            }
        }
    }

</style>