<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import TextareaJs from './Textarea.js';
    module.exports=TextareaJs;
</script>
<style scoped>
    
</style>
