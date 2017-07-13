<template>
    <div class="list">
        <list-data
            ref='list-data'
            :List='list'
            :FieldList='fields'
            :Selection='true'
            :BtnInfo='btn_info'
            :Pagination='pagination'
            @onGetInfo='onGetInfo'
            @onDelete='onDelete'
            @onSelectionChange='onSelectionChange'
            @onSelectionChangeObj='onSelectionChangeObj'
            @onChangeCurrentPage='onChangeCurrentPage'
            @onChangePageSize='onChangePageSize'></list-data>
    </div>
</template>

<script>
    import PaginationJs from './Pagination.js';
    module.exports=PaginationJs;
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
