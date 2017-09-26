<template>
  <div class="form">
    <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;"
             :model="article_data"
             :rules="rules"
             ref='refArticle'>
      <el-form-item label="文章标题" prop='title' style="width:600px;">
        <el-input v-model="article_data.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" style="width:986px;" prop='content'>
        <div id="article"></div>
      </el-form-item>
      <el-form-item label="文章分类" prop='cate'>
        <el-select v-model="article_data.cate" placeholder="请选择文章分类">
          <el-option value="技术"></el-option>
          <el-option value="散文"></el-option>
          <el-option value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标签" prop='tabs'>
        <el-select v-model="article_data.tabs" multiple placeholder="请选择文章标签">
          <el-option value="html"></el-option>
          <el-option value="css"></el-option>
          <el-option value="javascript"></el-option>
          <el-option value="jquery"></el-option>
          <el-option value="vue"></el-option>
          <el-option value="react"></el-option>
          <el-option value="angular"></el-option>
          <el-option value="php"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch on-text="启用" off-text="禁用" v-model="article_data.status" style="width:100%"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click='onSubmit("refArticle")'>立即{{article_data.id ? '修改' : '添加'}}</el-button>
        <el-button @click='reset_article("article_data")'>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import EditJs from './Edit.js'

  export default EditJs
</script>
<style scoped>

</style>
