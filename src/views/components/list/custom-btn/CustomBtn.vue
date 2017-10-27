<template>
  <div class="list">
    <h2>默认按钮</h2>
    <list-data ref='list-data' :List='list' :FieldList='fields'></list-data>
  
    <h2>修改默认按钮</h2>
    <list-data ref='list-data' @onClickBtn="onClickBtn" @onClickBtnAdd="onClickBtnAdd" @onClickBtnSelect="onClickBtnSelect" @onClickBtnUpdate="onClickBtnUpdate" @onClickBtnDelete="onClickBtnDelete" @onClickBtnBatchDelete="onClickBtnBatchDelete" @onSelectionChange="onSelectionChange"
      @onSearch="onSearch" :List='list' :BtnInfo="btn_info.custom" :FieldList='fields'>
  
      <span slot="header-before">自定义表头前置</span>
      <span slot="header-after">自定义表头后置</span>
    </list-data>
  </div>
</template>

<script>
  import CustomBtnJs from "./CustomBtn.js";
  
  export default CustomBtnJs;
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
