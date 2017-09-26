<template>
  <div class="list">
    <list-data
      ref='list-data'
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnUpdate="onClickBtnUpdate"
      @onClickBtnSelect="onClickBtnSelect"
      @onClickBtnDelete="onClickBtnDelete"
      :List='list'
      :FieldList='fields'></list-data>
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
