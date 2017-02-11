<template>
    <section class="chart">
        <el-row>
            <el-col :span='24'>
                <el-button
                    type="primary"
                    @click='onUpdateStatis'>更新数据</el-button>
            </el-col>
            <el-col :span="24">
                <statis
                    :title='echarts_data.title'
                    :subtext='echarts_data.subtext'
                    :hoverTitle='echarts_data.hover_title'
                    :textList='echarts_data.text_list'
                    :valueList='echarts_data.value_list'></statis>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import BarJs from './Bar.js';
    module.exports=BarJs;
</script>
<style scoped>
    
</style>
