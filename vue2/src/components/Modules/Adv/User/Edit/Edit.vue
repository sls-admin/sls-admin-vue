<template>
    <div>
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
