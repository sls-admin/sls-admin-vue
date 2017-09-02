<template>
    <div class="form">
        <el-form
                label-width="100px"
                :inline="true">
            <el-form-item
                    label="父级路由"
                    class='edit-form'>
                <div class="el-input">
                    <el-input :value="params.pname" :disabled="true"></el-input>
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
