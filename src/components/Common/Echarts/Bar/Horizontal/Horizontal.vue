<template>
    <section class="chart">
        <el-row>
            <el-col :span="24">
                <div id="chartDom" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import HorizontalJs from './Horizontal.js';
    module.exports=HorizontalJs;
</script>
<style scoped>
    
</style>
