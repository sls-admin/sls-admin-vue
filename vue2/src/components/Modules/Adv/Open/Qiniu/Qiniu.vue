<template>
    <div>
        <list-data
            ref='list-data'
            :ImageHost='image_host'
            :List='list'
            :FieldList='fields'
            :Selection='true'></list-data>

        <input type="file"
            @change='onChangeFile'>
    </div>
</template>
<script>
    import QiniuJs from './Qiniu.js';
    module.exports=QiniuJs;
</script>
<style scoped>
    
</style>
