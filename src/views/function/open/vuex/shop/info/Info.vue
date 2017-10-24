<template>
  <div class="cart-info">
    <div>
      <div class='item'>总数：<strong>{{cartInfos.total_nums}}</strong></span></div>
      <div class='item'>总价：<strong>{{cartInfos.total_price}}</strong></span></div>

      <el-button class='item pull-right' type='danger' @click='clear_db'
                 :disabled='cartInfos.total_price ? false : true'>清空购物车
      </el-button>
    </div>
  </div>
</template>
<script>
  import InfoJs from './Info.js'

  export default InfoJs
</script>
<style scoped lang='less'>
  .cart-info {
    font-size: 20px;
    text-align: left;
    margin: 20px 0px;

    .item {
      display: inline-block;
      margin-right: 20px;
    }
  }
</style>
