<template>
    <div class="list">
        <!-- 
            ref:给子组件起别名
            List:列表数组
            FieldList:字段数组
            Selection:是否开启批量选择
            @onSelectionChange:CheckBox改变时的回掉
            @onDelete:内部删除时执行的回掉
         -->
        <h2>此页面，主要演示一下渲染列表，和自定义按钮，以及暴露的一些事件接口，实际交互开发中</h2>
        <list-data
            ref='list'
            :List='list'
            :FieldList='fields'
            :Selection='true'
            :BtnInfo='btn_info'
            @onSelectionChange='onChangeCheckbox'
            @onSelectionChangeObj='onChangeBoxObj'
            @onDelete='onDelete'
            @onGetInfo='onGetInfo'></list-data>
        <dialog-info
            :Dialog='dialog'>
        </dialog-info>
    </div>
</template>
<script>
    import ListJs from './List.js';
    module.exports=ListJs;
</script>
<style scoped lang='less'>
    
</style>
