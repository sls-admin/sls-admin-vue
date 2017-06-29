<template>
    <div class="form">
        <!-- <el-form-item label="文章内容" style="width:986px;" prop='content'>
            <div id="article" style="height:260px;"></div>
        </el-form-item> -->

        <form-data
            :FieldList='fields'
            :Editor='editor'
            @onSubmit='onGetData'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    export default EditJs;
</script>
<style scoped>
    
</style>
