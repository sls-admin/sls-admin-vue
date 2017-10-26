<template>
  <div class="cart-list">
    <h3>购物车信息</h3>
    <el-table :data="cartList" border style="width: 100%">
      <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
      <el-table-column prop="name" label="菜品名称"></el-table-column>
      <el-table-column prop="price" label="菜品价格" width="120" sortable></el-table-column>
      <el-table-column prop="num" label="数量" width="100" sortable></el-table-column>
      <el-table-column label="总价" width="100" sortable inline-template :context="_self">
        <span>{{row.price * row.num}}</span>
      </el-table-column>
      <el-table-column inline-template :context="_self" label="操作" width="200">
                <span>
                    <el-button @click='action_cart(row,"add_db")' type="info" size="small">+</el-button>
                    <el-button @click='action_cart(row,"reduce_db")' type="warning" size="small">-</el-button>
                    <el-button @click='action_cart(row,"delete_db")' type="danger" size="small">x</el-button>
                </span>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import CartJs from './Cart.js'

  export default CartJs
</script>
<style scoped lang="less">
  .cart-list {
    h3 {
      text-align: center;
      margin-top: 20px;
    }
  }
</style>
