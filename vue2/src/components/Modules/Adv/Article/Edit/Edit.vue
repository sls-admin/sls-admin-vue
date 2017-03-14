<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            :DefaultValue='default_value'
            :Editor='editor'
            :Rules='rules'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>
<style scoped>
    
</style>
