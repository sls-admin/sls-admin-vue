<template>
    <div class="list">
        <list-data
            ref='list-data'
            :List='list'
            :Expand="expand"
            :FieldList='fields'>
            <template
                    scope="props"
                    slot="expand">
                <div>索引：{{props.index}}</div>
                <div>地址：{{props.data.address}}</div>
                <div>行数据：{{JSON.stringify(props.data)}}</div>
            </template>
        </list-data>
    </div>
</template>

<script>
    import ExpandJs from './Expand.js';
    export default ExpandJs;
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
