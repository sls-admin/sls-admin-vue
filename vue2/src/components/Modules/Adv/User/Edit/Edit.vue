<template>
    <div>
        <h2>此页面，主要演示一下表单组件的渲染，以及暴露的一些事件接口</h2>
        <form-data
            :FieldList='fields'
            @onSubmit='onGetData'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>
<style scoped>
    .edit-form{
        width:500px;
    }
</style>
