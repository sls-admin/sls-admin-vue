<template>
    <div class="list">
        <list-data
            ref='list-data'
            :List='list'
            :FieldList='fields'
            :Selection='true'
            :Expand='expand'
            :BtnInfo='btn_info'>
                <div slot='list-header'>我曹，垃圾玩意啊。</div>
                <span slot='list-expand'>测试自定义折叠属性</span>
            </list-data>
    </div>
</template>

<script>
    import ListJs from './List.js';
    module.exports=ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
</style>
