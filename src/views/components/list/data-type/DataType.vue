<template>
  <div class="list">
    <h2>
      注意：如果后台给你的数据中的图片路径没有带域名，那么你可以在field数组中的image里面设置域名。
    </h2>
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
  import DataTypeJs from './DataType.js'

  export default DataTypeJs
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
