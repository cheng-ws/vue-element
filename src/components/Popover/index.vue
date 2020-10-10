<template>
    <el-dialog :title="formTitle" :visible.sync="dialogFormVisible" @closed="handleCancel">
        <slot></slot>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">取 消</el-button>
            <el-button type="primary" @click="handleSave">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: {
                type: String,
                default: "弹框标题"
            },
            visibleFlag: {
                type: Boolean,
                default: false,
            }
        },
        watch: {
            title: {
                handler(val) {
                    this.formTitle = val;
                },
                immediate: true,
            },
            visibleFlag: {
                handler(val) {
                    this.dialogFormVisible = val;
                },
                immediate: true,
            }
        },
        data() {
            return {
                formTitle: "弹框标题",
                dialogFormVisible: false,
            };
        },
        methods: {
            handleCancel() {
                this.$emit('cancel');
            },
            handleSave() {
                this.$emit('save');
            },

        }
    }
</script>

<style scoped>

</style>