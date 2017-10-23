<template>
  <div class="list">
    <list-data
      ref='list-data'
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnDelete="onClickBtnDelete"
      @onClickBtnBatchDelete="onClickBtnBatchDelete"
      @onClickBtnUpdate="onClickBtnUpdate"
      @onClickBtnSelect="onClickBtnSelect"
      @onChangeCurrentPage="onChangeCurPage"
      @onChangePageSize="onChangePageSize"
      @onSelectionChange="onSelectionChange"
      @onSearch="onSearch"
      :List='list'
      :Pagination="paginations"
      :Search="search_data"
      :BtnInfo="btn_info"
      :FieldList='fields'>
      <!--<span slot="header-after">我是自定义的header-after内容</span>-->
      <!--<span slot="header-before">我是自定义的header-before内容</span>-->
    </list-data>
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
