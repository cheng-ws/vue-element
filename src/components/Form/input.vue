<template>
    <div>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
    </div>
</template>

<script>
    export default {
        name: "input",
    }
</script>

<style scoped>

</style>