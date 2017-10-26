<template>
  <div class="list">
    <el-col :span="24" class='actions-top'>
      <el-button type='danger' icon='delete'
                 :disabled='batch_flag'
                 @click='onDeleteArticle(true)'>删除选中
      </el-button>

      <el-form :inline="true" :model='search_data' class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="标题" v-model='search_data.title'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='onSearch'>查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table border style="width: 100%" align='center'
              :data="article_list"
              @selection-change='onSelectionChange'>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        :prop="fields.create_time.info.prop"
        :label="fields.create_time.info.label"
        :align="fields.create_time.style.align"
        :width="fields.create_time.style.width"
        :sortable="fields.create_time.info.sortable">
      </el-table-column>
      <el-table-column
        :prop="fields.title.info.prop"
        :label="fields.title.info.label"
        :align="fields.title.style.align"
        :sortable="fields.title.info.sortable">
      </el-table-column>
      <el-table-column
        :prop="fields.status.info.prop"
        :label="fields.status.info.label"
        :align="fields.status.style.align"
        :width="fields.status.style.width"
        :sortable="fields.status.info.sortable"
        :formatter="formatterStatus"
        :filters="fields.status.filter.list"
        :filter-method="filterStatus"
        :filter-multiple="fields.status.filter.multiple">
      </el-table-column>
      <el-table-column
        label="操作"
        width="160"
        :context="_self">
        <template slot-scope='scope'>
          <el-button
            type="info"
            icon='view'
            size="mini"
            @click='onSelectArticle(scope.row)'></el-button>
          <el-button
            type="info"
            icon='edit'
            size="mini"
            @click='onEditArticle(scope.row)'></el-button>
          <el-button
            type="danger"
            icon='delete'
            size="mini"
            @click='onDeleteArticle(scope.row,scope.$index,article_list)'></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class='btm-action'>
      <el-pagination
        v-if='paginations.total>0'
        class='pagination'
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total"
        :current-page='paginations.current_page'
        @current-change='onChangeCurrentPage'
        @size-change='onChangePageSize'>
      </el-pagination>
    </el-col>
    <el-dialog size="small"
               :title="dialog.article_info.title"
               v-model="dialog.show"
               @close='onCloseView'>
      <div v-html="dialog.article_info.content"></div>
      <!--  <span slot="footer" class="dialog-footer">
          <el-button @click="dialog.show = false">取 消</el-button>
          <el-button type="primary" @click="dialog.show = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
  import ListJs from './List.js'

  export default ListJs
</script>
<style scoped lang='less'>
  .demo-form-inline {
    display: inline-block;
    float: right;
  }

  .btm-action {
    margin-top: 20px;
    text-align: center;
  }

  .actions-top {
    height: 46px;
  }

  .pagination {
    display: inline-block;
  }
</style>
