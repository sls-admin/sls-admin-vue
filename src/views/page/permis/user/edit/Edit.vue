<template>
    <div class="form">
        <el-form
                label-width="100px"
                :inline="true">
            <el-form-item
                    label="所属父级"
                    class='edit-form'>
                <div class="el-input">
                    <el-input :value="parent.username" :disabled="true"></el-input>
                </div>
            </el-form-item>
        </el-form>

        <form-data
            :FieldList='fields'
            :DefaultValue='default_value'
            :Rules="rules"
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    export default EditJs;
</script>
<style scoped>

</style>
