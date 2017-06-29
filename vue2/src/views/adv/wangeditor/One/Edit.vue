<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            :Editor='editor'
            @onEditorChange='onChange'
            @onSubmit='onGetData'></form-data>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    export default EditJs;
</script>
<style scoped>
    
</style>
