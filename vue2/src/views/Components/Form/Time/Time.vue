<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import TimeJs from './Time.js';
    module.exports=TimeJs;
</script>
<style scoped>
    
</style>
