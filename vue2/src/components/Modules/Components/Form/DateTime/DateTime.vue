<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import DateTimeJs from './DateTime.js';
    module.exports=DateTimeJs;
</script>
<style scoped>
    
</style>
