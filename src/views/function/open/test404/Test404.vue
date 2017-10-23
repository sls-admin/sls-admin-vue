<template>
  <div>
    <el-button @click='routeRoot'>
      点击去往根路由,会跳转到/demo/user/list,因为默认会重定向到登录路由，但是在main.js中，定义了路由钩子，如果已登录过，则会跳到/demo/user/list
    </el-button>
    <el-button @click='routeNotRoot'>
      点击去往不存在的一级路由
    </el-button>
    <el-button @click='routeNotTwo'>
      点击去往不存在的二级路由
    </el-button>
    <el-button @click='routeNotThree'>
      点击去往不存在的三级路由
    </el-button>
  </div>
</template>
<script>
  import Test404Js from './Test404.js'

  export default Test404Js
</script>
<style scoped>

</style>
