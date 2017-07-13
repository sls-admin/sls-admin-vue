<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import CheckboxJs from './Checkbox.js';
    module.exports=CheckboxJs;
</script>
<style scoped>
    
</style>
