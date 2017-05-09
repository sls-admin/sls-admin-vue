<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import RadioJs from './Radio.js';
    module.exports=RadioJs;
</script>
<style scoped>
    
</style>
