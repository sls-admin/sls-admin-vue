<template>
    <div class="form">
        <form-data
            :FieldList='fields'
            @onSubmit='onSubmit'></form-data>
    </div>
</template>
<script>
    import SwitchJs from './Switch.js';
    module.exports=SwitchJs;
</script>
<style scoped>
    
</style>
