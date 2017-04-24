<template>
    <div class="form">
        <!-- <el-upload
            class="upload-demo"
            action="//upload.qiniu.com/"
            :before-upload='onBeforeUpload'
            name='file'
            :data='params'
            :multiple='false'>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->
        <input type="file"
            @change='onChangeFile'>
    </div>
</template>
<script>
    import QiniuJs from './Qiniu.js';
    module.exports=QiniuJs;
</script>
<style scoped>
    
</style>
