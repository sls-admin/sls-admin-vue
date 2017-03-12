<template>
    <div class="form">
        <!-- <el-form-item label="文章内容" style="width:986px;" prop='content'>
            <div id="article" style="height:260px;"></div>
        </el-form-item> -->

        <form-data
            :FieldList='fields'
            :DefaultValue='default_value'
            :Editor='editor'
            :Rules='rules'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>
<style scoped>
    
</style>
