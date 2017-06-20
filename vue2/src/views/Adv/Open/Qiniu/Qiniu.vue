<template>
    <div>
        <list-data
            ref='list-data'
            :List='list'
            :FieldList='fields'
            :BtnInfo="btn_info"
            @onClickBtnDelete="onDeleteQiniuFile"
            @onClickBtnSelect="onSelectQiniuFile"></list-data>
        
        <el-button
            type="primary"
            @click="onLoadMoreData"
            :loading="false">
            加载更多
        </el-button>

        <el-upload
            class="upload-demo"
            drag
            action=""
            :data="params"
            :before-upload="onUploadQiniu"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>


        <el-dialog title="查看图片" v-model="dialog.show" size="small">
            <div>
                <img class="qiniu-pic" :src="'//slsadmin.qiniu.sailengsi.com/'+dialog.info.key" alt="">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="onHideDialog">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import QiniuJs from './Qiniu.js';
    export default QiniuJs;
</script>
<style scoped>
    .qiniu-pic{
        max-width:100%;
        height:auto;
        margin:0 auto;
    }
</style>
