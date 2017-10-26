<template>
  <div class="vuex">
    <div class="vuex-content">
      <h2>这是用vuex实现的购物车demo，用到了vuex的modules功能。<br>购物车信息使用本地存储localStorage。</h2>
      <list></list>
      <cart></cart>
      <info></info>
    </div>
  </div>
</template>
<script>
  import VuexJs from './Vuex.js'

  export default VuexJs
</script>
<style scoped lang='less'>
  .vuex-content {
    width: 100%;
    /*height: 500px;*/
    border: 1px solid #ccc;

    h1 {
      text-align: center;

    }
  }
</style>
