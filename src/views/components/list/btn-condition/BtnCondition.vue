<template>
  <div class="list">
    <h2>按钮表达式</h2>
    <list-data ref='list-data' @onClickBtnDelete="onClickBtnDelete"
       :List='list' :BtnInfo="btn_info.condition" :FieldList='fields'>
    </list-data>
  </div>
</template>

<script>
  import BtnCondition from "./BtnCondition";
  
  export default BtnCondition;
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
