<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import SelectJs from './Select.js';
    module.exports=SelectJs;
</script>
<style scoped>
    
</style>
