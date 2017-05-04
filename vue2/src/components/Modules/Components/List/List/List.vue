<template>
    <div class="list">
        <list-data
            ref='list-data'
            :List='list'
            :FieldList='fields'
            :Selection='true'
            :Expand='expand'
            :BtnInfo='btn_info'>
                <div slot='list-header'>自定义头部，可以在这里放上一些东西</div>
                <!--<span slot='list-expand'>测试自定义折叠属性</span>-->
                <template slot="list-expand" scope="props">
                    <div>当前索引：{{ props.index }}</div>
                    <div>姓名：{{ props.data.name }}</div>
                    <div>创建时间：{{ props.data.create_time }}</div>
                </template>
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
