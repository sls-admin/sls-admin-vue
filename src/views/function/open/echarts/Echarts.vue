<template>
  <section class="chart">
    <el-row>
      <el-col :span="12">
        <div id="chartColumn" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartBar" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartLine" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartPie" style="width:100%; height:400px;"></div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import EchartsJs from './Echarts.js'

  export default EchartsJs
</script>
<style scoped>

</style>
