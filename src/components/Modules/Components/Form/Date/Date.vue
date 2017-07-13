<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import DateJs from './Date.js';
    module.exports=DateJs;
</script>
<style scoped>
    
</style>
