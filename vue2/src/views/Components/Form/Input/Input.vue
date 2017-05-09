<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import InputJs from './Input.js';
    module.exports=InputJs;
</script>
<style scoped>
    
</style>
